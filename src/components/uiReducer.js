import * as types from '../constants/actionTypes'

const uiState = {
  footer: {
    visible: true,
  },
  header: {
    stasis: true,
  },
}

export default (state = uiState, action) => {
  const { type, payload } = action
  console.log('state inside uiReducer', type, payload)
  switch (type) {
    case types.FOOTER_VISIBILITY:
      return {
        ...state,
          footer: {
            visible: payload,
          },
      }
    case types.HEADER_STASIS:
      return {
        ...state,
          header: {
            stasis: payload,
          },
      }
    default:
      return state
  }
}
