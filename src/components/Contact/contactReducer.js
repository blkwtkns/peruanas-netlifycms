import * as types from '../../constants/actionTypes'

const contactReducer = (state = { dbInfo: false }, action) => {
  const { type, status } = action
  switch (type) {
    case types.PUT_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        state: { dbInfo: status.dbInfo },
      }
    case types.PUT_CONTACT_FORM_ERROR:
      return {
        ...state,
        state: { dbInfo: status.dbInfo },
      }
    default:
      return state
  }
}

export default contactReducer
