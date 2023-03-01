import produce from 'immer';
import * as types from './events';

export const initialState = {
  gameDetails: null,
  playerDetails: null,
  results: null,
  loading: false,
  error: null,
};

const gamesReducer = (state = initialState, action) =>
  produce(state, draft => {
    if (action.type.startsWith(types.PREFIX)) {
      switch (action.type) {
        case types.FETCH_GAME_BY_UUID:
          draft.loading = true;
          break;

        case types.RESULTS:
          draft.results = true;
          break;

        case types.REGISTRATION_SUCCESS:
          draft.playerDetails = action.playerDetails;
          draft.error = null;
          break;

        case types.RESULTS_SUCCESS:
          draft.results = action.results;
          draft.error = null;
          break;
  
        case types.SUCCESS:
          draft.loading = false;
          draft.gameDetails = action.gameDetails;
          draft.error = null;
          break;

        case types.ERROR:
          draft.error = action.message;
          break;
      }
      return draft; // assumes a change has been made
    }
    // assumes no change made so return undefined
  });

export default gamesReducer;
