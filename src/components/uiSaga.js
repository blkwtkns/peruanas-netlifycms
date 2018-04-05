import { put } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
// import regeneratorRuntime from 'regenerator-runtime';

export default function* uiSaga ({ payload }) {
  console.log('uiSaga payload', payload)
  try {
    yield put({
      type: types.FOOTER_VISIBILITY,
      payload,
    })
  } catch (error) {
    yield put({
      type: types.FOOTER_VISIBILITY,
      payload,
    })
  }
}
