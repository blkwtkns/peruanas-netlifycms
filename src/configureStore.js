import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './rootReducer'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default initialState => {
  // saga middleware
  // middleware.push(window.__REDUX_DEVTOOLS_EXTENSION__);

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}
