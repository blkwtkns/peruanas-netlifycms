import * as types from '../constants/actionTypes'

const uiState = {
  footer: {
    visible: true,
  },
  header: {
    stasis: true,
  },
  language: {
    visible: 'en',
  },
}

export default (state = uiState, action) => {
  const { type, payload } = action
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
    case types.LANGUAGE:
      return {
        ...state,
          language: {
            visible: payload,
          },
      }
    default:
      return state
  }
}
