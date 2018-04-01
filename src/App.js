import React from 'react'

import { Router } from 'react-static'

import Routes from 'react-static-routes'

import { Provider } from 'react-redux'

import Footer from './components/Main/Footer'
import Header from './components/Main/Header'

import { hot } from 'react-hot-loader'

import configureStore from './configureStore'
import rootReducer from './rootReducer'
import rootSaga from './sagas/rootSaga'

const store = configureStore({})
store.runSaga(rootSaga)

import './assets/sass/styles.scss'
import logo from '../public/uploads/image1-small-23.png'

const App = () => (
  <Provider store={store} key="provider">
    <Router>
      <div className="main-container">
        <Header logo={logo}/>
        <Routes />
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
