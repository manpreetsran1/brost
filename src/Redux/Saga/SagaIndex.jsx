import { all,fork,takeEvery } from 'redux-saga/effects';
import contactSaga from './ContactSaga';
import rootAuthenticationSaga from './Saga';
export default function* Saga() {
    yield all[
        fork(rootAuthenticationSaga),
        fork(contactSaga)
    ]
}