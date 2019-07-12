import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { stringify } from 'querystring';

function* myFunction() {
    yield put({ type: 'SAGA_EVENT_A', payload: 'a_' + Date.now().toString() });
    yield put({ type: 'SAGA_EVENT_B', payload: 'b_' + Date.now().toString() });
    //eslint-disable-next-line
    console.log('saga event!');
}

export function* helloSaga() {
    yield takeEvery("TEST", myFunction);
}




function syncFunctionCall(function_arg1, function_arg2) {
    //eslint-disable-next-line
    console.log('syncfunctionCall execute!');
}

function* fetchSyncData(action) {
    try {
        const response = yield call(fetch, 'https://reqres.in/api/users?page=2');

        //eslint-disable-next-line
        console.log('response:' + response);
        const data = yield call([response, response.json]);
        yield put({ type: "FETCH_SUCCEEDED", data });

        //eslint-disable-next-line
        console.log('syncfunctionCall execute!');

        //const data = response.json().then(res => {
        //    //eslint-disable-next-line
        //    console.log('data:' + res);
        //    put({ type: "FETCH_SUCCEEDED", res });
        //});

    } catch (error) {
        yield put({ type: "FETCH_FAILED", error });
    }
}

export function* fetchData() {
    yield takeEvery("TEST", fetchSyncData);
}





function* genFunctionCall(function_arg1, function_arg2) {
    yield;
    //eslint-disable-next-line
    console.log('genfunctionCall execute!');
}

export function* fetchGenData(action) {
    try {
        const data = yield call(genFunctionCall, 'function_arg1', 'function_arg2');
        //yield put({ type: "FETCH_SUCCEEDED", data });
    } catch (error) {
        //yield put({ type: "FETCH_FAILED", error });
    }
}




async function asyncFunctionCall(function_arg1, function_arg2) {
    
    //eslint-disable-next-line
    console.log('asyncfunctionCall execute!');
}

export function* fetchAsyncData(action) {
    try {
        const data = yield call(asyncFunctionCall, 'function_arg1', 'function_arg2');
        //yield put({ type: "FETCH_SUCCEEDED", data });
    } catch (error) {
        //yield put({ type: "FETCH_FAILED", error });
    }
}