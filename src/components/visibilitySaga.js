import { put, call } from 'redux-saga/effects'
// import putRaicesForm from '../Api/api'
import * as types from '../constants/actionTypes'
// import putURL from '../secrets/awsURLs'
// import regeneratorRuntime from 'regenerator-runtime';

// Responsible for making PUT request to AWS API gateway
// and then instructing the saga middleware on the next line of action,
// for success or failure

export default function* visibilitySaga({ payload }) {
  console.log('putFormSaga payload and url', putURL, payload)
  try {
    const status = yield call(putRaicesForm, putURL, payload)
    yield put({
      type: types.FOOTER_HIDE,
      status,
    })
  } catch (error) {
    yield put({
      type: types.FOOTER_SHOW,
      status,
    })
  }
}
