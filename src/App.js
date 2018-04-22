import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import Header from './components/Main/Header'
import Footer from './components/Main/Footer'

import configureStore from './configureStore'
import rootSaga from './sagas/rootSaga'

import './assets/sass/styles.scss'
import logo from '../public/uploads/image1-small-23.png'

const store = configureStore({})
store.runSaga(rootSaga)

const App = () => (
  <Provider store={store} key="provider">
    <Router>
      <div id="main-container">
        <Header logo={logo} />
        <Routes />
        <Footer />
      </div>
    </Router>
  </Provider>
)

export default hot(module)(App)
