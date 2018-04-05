import * as types from '../constants/actionTypes'

// Returns action type and PUT_FORM
const footerAction = payload => ({
  type: types.FOOTER_VISIBILITY,
  payload,
})

export default footerAction
