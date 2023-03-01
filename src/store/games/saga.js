import { all, takeLatest, put, call } from 'redux-saga/effects';
import * as apiEndpoints from '../../apiEndpoints';
import { reportError, getData, postData } from '../../utils/apiUtils';
import * as types from './events';
import {
  gamesError,
  success,
  registrationSuccess,
  resultsSuccess,
} from './actions';

export function* doRegisterGame(action) {
  const url = apiEndpoints.REGISTER_GAME;
  try {
    const { error, response } = yield call(postData, url, action.game)
    if (!error) {
      yield put(registrationSuccess(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error registering new game')));
  }
}

export function* doStartGame(action) {
  const url = apiEndpoints.START_GAME.replace("{UUID}", action.uuid);
  try {
    const { error, response } = yield call(postData, url, {})
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error fetching game')));
  }
}

export function* doFetchGameByUuid(action) {
  const url = apiEndpoints.REGISTER_GAME + "/uuid/" + action.uuid;
  try {
    const { error, response } = yield call(getData, url, action.game)
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error fetching game')));
  }
}

export function* doFetchGameByPin(action) {
  const url = apiEndpoints.REGISTER_GAME + "/pin/" + action.pin;
  try {
    const { error, response } = yield call(getData, url, action.game)
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error fetching game')));
  }
}

export function* doRegisterPlayer(action) {
  const url = apiEndpoints.REGISTER_PLAYER.replace("{PIN}", action.pin);
  try {
    const { error, response } = yield call(postData, url, action.player)
    if (!error) {
      yield put(registrationSuccess(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error registering new player')));
  }
}

export function* doChooseSuspect(action) {
  const url = apiEndpoints.CHOOSE_SUSPECT.replace("{UUID}", action.uuid).replace("{ID}", action.suspectId);
  try {
    const { error, response } = yield call(postData, url, {})
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error choosing suspect')));
  }
}

export function* doRecordFacts(action) {
  const url = apiEndpoints.RECORD_FACTS.replace("{UUID}", action.uuid)
  try {
    const { error, response } = yield call(postData, url, action.factsDto)
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error recording facts')));
  }
}

export function* doDeduction(action) {
  const url = apiEndpoints.ENTER_DEDUCTION.replace("{UUID}", action.uuid).replace("{ID}", action.playerId)
  try {
    const { error, response } = yield call(postData, url, action.deductionDto)
    if (!error) {
      yield put(success(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error registering deduction')));
  }
}

export function* doFetchResults(action) {
  const url = apiEndpoints.RESULTS.replace("{UUID}", action.gameId)
  try {
    const { error, response } = yield call(getData, url)
    if (!error) {
      yield put(resultsSuccess(response));
    } else {
      yield put(gamesError(reportError(error)));
    }
  } catch (errorMsg) {
    yield put(gamesError(reportError(errorMsg, 'Error fetching results')));
  }
}


export function* listenRegisterGame() {
  yield takeLatest(types.REGISTER_GAME, doRegisterGame);
}

export function* listenStartGame() {
  yield takeLatest(types.START, doStartGame);
}

export function* listenFetchGameByUuid() {
  yield takeLatest(types.FETCH_GAME_BY_UUID, doFetchGameByUuid);
}

export function* listenFetchGameByPin() {
  yield takeLatest(types.FETCH_GAME_BY_PIN, doFetchGameByPin);
}

export function* listenRegisterPlayer() {
  yield takeLatest(types.REGISTER_PLAYER, doRegisterPlayer);
}

export function* listenChooseSuspect() {
  yield takeLatest(types.CHOOSE_SUSPECT, doChooseSuspect);
}

export function* listenRecordFacts() {
  yield takeLatest(types.RECORD_FACTS, doRecordFacts);
}

export function* listenDeduction() {
  yield takeLatest(types.DEDUCTION, doDeduction);
}

export function* listenFetchResults() {
  yield takeLatest(types.RESULTS, doFetchResults);
}


export default function* accountReportsSaga() {
  yield all([
    listenRegisterGame(),
    listenStartGame(),
    listenFetchGameByUuid(),
    listenFetchGameByPin(),
    listenRegisterPlayer(),
    listenChooseSuspect(),
    listenRecordFacts(),
    listenDeduction(),
    listenFetchResults(),
  ]);
}
