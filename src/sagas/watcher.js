import { takeLatest, take } from 'redux-saga/effects'
import contactPutSaga from '../components/Contact/contactSaga'
// import uiSaga from '../components/uiSaga'
import * as types from '../constants/actionTypes'
// import regeneratorRuntime from 'regenerator-runtime';

// Watches for PUT_CONTACT_FORM action type asynchronously
export default function* watchPutForm () {
  console.log('watchPutForm triggered')
  yield takeLatest(types.PUT_CONTACT_FORM, contactPutSaga)
}
