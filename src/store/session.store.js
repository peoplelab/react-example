import Enum from '../models/common/Enum';


export const types = Enum.from('SET_USER_IP', 'SET_SESSION', 'RESET_SESSION');


const initialState = {
  ip: '',
  username: '',
  accessToken: '',
  refreshToken: '',
  culture: '',
  groups: [],
  permissions: [],
  sessionId: '',
  expiredAt: '',
  sessionLogId: '',
  refreshExpiredAt: '',
  issuedAt: '',
};


const actionHandlers = {
  [types.SET_USER_IP]:  (state, { payload }) => ({
    ...state,
    ip: payload.ip,
  }),
	[types.SET_SESSION]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [types.RESET_SESSION]: (state, { payload }) => ({
      ...initialState,
      ip: state.ip,
  }),
};


export const reducer = (state = initialState, action) => {
  /**
   * Map actionHandler to retrive reducer relative to current action type
   */
  const handler = actionHandlers[action.type];

  /**
   * Update the Redux store state only if reducer is defined
   */
  return typeof handler === 'function' ? handler(state, action) : state;
};
