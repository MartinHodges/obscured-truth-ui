import * as types from './events';

export function registerGame(game) {
  return {
    type: types.REGISTER_GAME,
    game,
  };
}

export function start(uuid) {
  return {
    type: types.START,
    uuid,
  };
}

export function fetchGameByUuid(uuid) {
  return {
    type: types.FETCH_GAME_BY_UUID,
    uuid,
  };
}

export function fetchGameByPin(pin) {
  return {
    type: types.FETCH_GAME_BY_PIN,
    pin,
  };
}

export function registerPlayer(pin, player) {
  return {
    type: types.REGISTER_PLAYER,
    pin,
    player,
  };
}

export function chooseSuspect(uuid, suspectId) {
  return {
    type: types.CHOOSE_SUSPECT,
    suspectId,
    uuid,
  };
}

export function recordFacts(uuid, factsDto) {
  return {
    type: types.RECORD_FACTS,
    uuid,
    factsDto,
  };
}

export function enterDeductions(uuid, playerId, deductionDto) {
  return {
    type: types.DEDUCTION,
    uuid,
    playerId,
    deductionDto
  };
}

export function fetchResults(gameId) {
  return {
    type: types.RESULTS,
    gameId,
  };
}

export function registrationSuccess(playerDetails) {
  return {
    type: types.REGISTRATION_SUCCESS,
    playerDetails,
  };
}

export function resultsSuccess(results) {
  return {
    type: types.RESULTS_SUCCESS,
    results,
  };
}

export function success(gameDetails) {
  return {
    type: types.SUCCESS,
    gameDetails,
  };
}


export function gamesError(message) {
  return {
    type: types.ERROR,
    message,
  };
}
