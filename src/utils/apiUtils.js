import { toast } from 'react-toastify';
import axios from 'axios';

export const reportError = (error, defaultMsg) => {
  const errorMsg = (error && error.message) || error;

  if (!errorMsg || errorMsg === '') {
    if (defaultMsg && defaultMsg !== '') {
      return defaultMsg;
    } else {
      return 'There was an unexpected issue talking to server';
    }
  } else {
    if (defaultMsg && defaultMsg !== '') {
      return `${defaultMsg} (${errorMsg})`;
    } else {
      return errorMsg;
    }
  }
}

export const getFileAsBlob = async url => {
  try {
    const response = await axios.get(url, { withCredentials: false, responseType: 'blob' });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error) };
    }
    
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg) };
    }
    return { error: 'Unexpected problem talking to server', login: true };
  }
}

export const getData = async (url, silent) => {
  try {
    const response = await axios.get(url, { withCredentials: false });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error)  };
    }
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (silent) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    return { error: 'Unexpected problem talking to server', login: true };
  }
};

export const postData = async (url, data) => {
  try {
    const response = await axios.post(url, data, { withCredentials: false });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error)  };
    }
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    return { error: 'Unexpected problem talking to server', login: false };
  }
};

export const postFile = async (url, data) => {
  if (!data || data.size > 104857600) {
    return { error: 'File cannot be uploaded (100MB limit)', login: false };
  }

  try {
    const formData = new FormData();
    formData.append('file', data);
    const response = await axios.post(url, formData, 
      { headers: {'content-type': 'multipart/form-data'},
      withCredentials: false });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error) };
    }
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    return { error: 'Unexpected problem talking to server', login: false };
  }
};

export const putData = async (url, data) => {
  try {
    const response = await axios.put(url, data, { withCredentials: false });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error)  };
    }
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    return { error: 'Unexpected problem talking to server', login: true };
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.delete(url, { withCredentials: false });
    const error = checkErrorStatus(response);
    if (error) {
      return { error, login: needsLogin(error)  };
    }
    return { response: response.data, login: false };
  } catch (error) {
    const errorMsg = checkErrorStatus(error.response);
    if (errorMsg) {
      return { error: errorMsg, login: needsLogin(errorMsg)  };
    }
    return { error: 'Unexpected problem talking to server', login: true };
  }
};


const checkMessage = (message, ifMissing) => {
  if (message) {
    if (message.toLowerCase() === 'no message available') {
      if (ifMissing) {
        return ifMissing;
      }
      return 'Something unexpected happened';
    } else {
      return message;
    }
  }
  return ifMissing;
}

export const checkErrorStatus = response => {

  if (response === undefined) {
    return false;
  }

  if (response.status !== undefined) {
    switch (response.status) {
      case 200:
      case 201:
      case 204:
        return false;
      case 400:
      case 409:
        return checkMessage(response.data.message, 'There was something wrong with your request');
      case 401:
        return 'You need to login';
      case 403:
        // redirectUrl(routes.logout.path);
        return checkMessage(response.data.message, 'Operation Not Authorised');
      case 404:
        return checkMessage(response.data.message, 'Not found');
      case 413:
        return 'File size too large (100MB limit)';
      case 500:
        return 'Unexpected problem talking to server';
      default:
        return response.status;
    }
  }
  return false;
};

export const needsLogin = message => {
  const login = message === "You need to login";
  return login;
}

/**
 * Show info toast
 * @param  message String
 */
export const showInfoToast = message => {
  if (message && message.trim().length) {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: message,
    });
}
};

/**
 * Show warning toast
 * @param  message String
 */
export const showWarningToast = message => {
  if (message && message.trim().length) {
    toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
      toastId: message,
    });
  }
};

/**
 * Show error toast
 * @param  message String
 */
 export const showErrorToast = message => {
   if (needsLogin(message)) {
     showWarningToast(message);
   } else {
    if (message && message.trim().length) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
        toastId: message,
      });
    }
  }
};
