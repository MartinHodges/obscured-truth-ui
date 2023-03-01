import { createSelector } from 'reselect';
import { initialState } from './reducer';

const mainDomain = state => state.games || initialState;

const selectLoading = () =>
  createSelector(
    mainDomain,
    substate => substate.loading,
  );

const selectGameDetails = () =>
  createSelector(
    mainDomain,
    substate => substate.gameDetails,
  );

  const selectPlayerDetails = () =>
  createSelector(
    mainDomain,
    substate => substate.playerDetails,
  );

const selectResults = () =>
  createSelector(
    mainDomain,
    substate => substate.results,
  );

const selectError = () =>
  createSelector(
    mainDomain,
    substate => substate.error,
  );

export {
  selectLoading,
  selectGameDetails,
  selectPlayerDetails,
  selectResults,
  selectError,
};
