// saga
import { call, put, takeLatest } from 'redux-saga/effects';

// service
import * as AccountService from '../apis/account-service';

// app configs
import { ActionTypes } from '../../configs/app-config';

// firebase configs
import firebaseApp from '../../configs/firebase-config';

import Store from '../../configs/store';
import * as GetData from '../apis/data-service';


// Login from email and pass
function* loginUser(params) {
    try {
        console.log("saga");
        firebaseApp.auth().signInWithEmailAndPassword(params.payload.email, params.payload.pass).then(lgUser => {
            Store.dispatch({ type: ActionTypes.SIGN_IN_SUCCEED, message: 'success', user: lgUser });
        }).catch(
            Store.dispatch({ type: ActionTypes.SIGN_IN_FAILED, message: 'faild' })
        );
    } catch (error) {
        console.log('error', error);
        yield put({ type: ActionTypes.SIGN_IN_FAILED, message: error });
    }

}

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

// create account 
function* signUpUser(email, pass) {
    try {
        if (this.state.pass.length < 6) {
            alert('Input more than 6 character');
        }
        firebaseApp.auth().createUserWithEmailAndPassword(email, pass);
    } catch (error) {
        console.log(error);
    }

}

/**
 * watch all function
 */
function* accountSagas() {
    yield takeLatest(ActionTypes.SIGN_IN_REQUEST, loginUser);
}

// export
export default accountSagas;
