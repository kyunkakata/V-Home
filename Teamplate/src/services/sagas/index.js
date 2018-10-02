import { all } from 'redux-saga/effects';
import accountSagas from '../sagas/account-saga';
import getDataSagas from '../sagas/getdata_saga';

export default function* rootSagas() {
    yield all(
        [accountSagas(),
        getDataSagas()]);
}
