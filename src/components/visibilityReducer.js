import * as types from '../../constants/actionTypes'
import initialState from '../../constants/initialState'

// Handle Contact related actions

export default (state = initialState, action) => {
  console.log('state inside visibilityReducer', state)
  // console.log('action inside contactReducer', action.status, action.type)
  switch (action.type) {
    case types.FOOTER_HIDE:
      return {
        ...state,
        visibilityState: { footer: action.status.footerVisible },
      }
    case types.FOOTER_SHOW:
      return {
        ...state,
        visibilityState: { footer: action.status.footerVisible },
      }
    default:
      return state
  }
}
