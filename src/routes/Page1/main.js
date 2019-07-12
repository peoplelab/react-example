
import { helloSaga, fetchData } from './sagas';

import reducer from './reducer';

__STORE.injectReducers('Page1View', reducer);


let middleware = window.saga;

//eslint-disable-next-line
console.log('worker in progress...');

// then run the saga
middleware.run(helloSaga);
middleware.run(fetchData);

//eslint-disable-next-line
console.log('worker done');


