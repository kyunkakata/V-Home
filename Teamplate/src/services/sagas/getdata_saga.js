// saga
import { call, put, takeLatest } from 'redux-saga/effects';

// service
// import * as AccountService from '../apis/account-service';

import * as ActionTypes from '../../actions/action-type'
import * as GetData from '../apis/data-service';

/**
 * @param {*} params 
 */

function* getData(data) {
    try {
        console.log("data test ", data.payload.id);

        const response = yield call(GetData.getData, data);
        if (response.ok) {
            yield put({ type: ActionTypes.GET_DATA_SUCCEED, data: response.data });
        } else {
            yield put({ type: ActionTypes.GET_DATA_FAILED, message: 'failed' });
        }
    } catch (error) {
        yield put({ type: ActionTypes.GET_DATA_FAILED, message: error.message });
    }
}

/**
 * watch all function
 */
function* getDataSagas() {
    yield takeLatest(ActionTypes.GET_DATA_REQUEST, getData);
}

export default getDataSagas;