import { createReducer } from '../../generators/reducers';


const actionHandlers = {
    'SAGA_EVENT_A': (state, { payload }) => ({ ...state, payload_a : payload }),
    'SAGA_EVENT_B': (state, { payload }) => ({ ...state, payload_b: payload }),
    'FETCH_SUCCEEDED': (state, { data }) => ({ ...state, payload_fetch: data }),
};


const initialState = {
    payload_a: '',
    payload_b: '',
    payload_fetch: '',
};


const reducer = createReducer(actionHandlers, initialState);
export default reducer;
