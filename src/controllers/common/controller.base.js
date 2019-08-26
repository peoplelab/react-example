import store from '../../store/redux.store';


const headersFn = state => ({
  Authorization: state.accessToken ? `Bearer ${state.accessToken}` : undefined,
  Session: state.sessionId,
});


export const base = async ({ request, api, success, failure, params }) => {
  const headers = headersFn(store.getState());

  console.log('----- Start api call');

  const response = api({ request, headers, params });

  const { httpcode, dataraw, error } = await response;

  if (httpcode === 200) {
    if (typeof success === 'function') {
      success({ dataraw });
    }
    console.log('----- Success call');
  } else {
    if (typeof failure === 'function') {
      failure({ httpcode, dataraw, error });
    }
    console.log('----- Failure call');
  }

  console.log('----- End api call');
};
