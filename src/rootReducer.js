import { combineReducers } from 'redux'
// import { routerReducer } from 'react-router-redux';
import contactReducer from './components/Contact/contactReducer'
import visibilityReducer from './components/visibilityReducer'

// DO NOT USE UNLESS THERE ARE MULTIPLE REDUCERS
// Combine reducers

  // state: contactReducer,
export default combineReducers({
  state: contactReducer,
  visibilityReducer
  // routing: routerReducer
})
