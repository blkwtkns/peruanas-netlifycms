import { combineReducers } from 'redux'
import contact from './components/Contact/contactReducer'
import ui from './components/uiReducer'

// state: contactReducer,
export default combineReducers({
  contact,
  ui,
})
