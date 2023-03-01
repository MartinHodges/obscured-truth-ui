const { REACT_APP_GATEWAY_URL } = process.env;
const USER_V1_API = `${REACT_APP_GATEWAY_URL}/api/v1`;

export const REGISTER_GAME =                         `${USER_V1_API}/games`;
export const START_GAME =                            `${USER_V1_API}/games/{UUID}/start`;
export const REGISTER_PLAYER =                       `${USER_V1_API}/games/{PIN}/players`;
export const CHOOSE_SUSPECT =                        `${USER_V1_API}/games/{UUID}/rounds/suspects/{ID}`;
export const RECORD_FACTS =                          `${USER_V1_API}/games/{UUID}/rounds`;
export const ENTER_DEDUCTION =                       `${USER_V1_API}/games/{UUID}/rounds/players/{ID}`;
export const RESULTS =                               `${USER_V1_API}/games/{UUID}/rounds/results`;
