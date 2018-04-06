import * as types from '../constants/actionTypes'

// Returns action type and payload
const footerAction = payload => ({
  type: types.FOOTER_VISIBILITY,
  payload,
})

const headerAction = payload => ({
  type: types.HEADER_STASIS,
  payload,
})

export { footerAction, headerAction }
