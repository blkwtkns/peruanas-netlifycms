import { takeLatest } from 'redux-saga/effects'
import contactPutSaga from '../components/Contact/contactSaga'
// import visibilitySaga from '../components/visibilitySaga'
import * as types from '../constants/actionTypes'
// import regeneratorRuntime from 'regenerator-runtime';

// Watches for PUT_CONTACT_FORM action type asynchronously
export default function* watchPutForm() {
  console.log('watchPutForm triggered')
  yield takeLatest(types.PUT_CONTACT_FORM, contactPutSaga)
  // yield takeLatest(types.HIDE_FOOTER, visibilitySaga)
  // yield takeLatest(types.SHOW_FOOTER, visibilitySaga)
}
