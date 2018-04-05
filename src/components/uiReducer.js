import * as types from '../constants/actionTypes'

const uiState = {
  footer: {
    visible: true,
  },
}

export default (state = uiState, action) => {
  const { type, payload } = action
  console.log('state inside uiReducer', type, payload)
  switch (type) {
    case types.FOOTER_VISIBILITY:
      return {
        ...state,
        // state: {
          footer: {
            visible: payload,
          },
        // },
      }
    default:
      return state
  }
}
