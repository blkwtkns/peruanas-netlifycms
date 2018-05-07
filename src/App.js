import React, { Component } from 'react'
import { Router } from 'react-static'
import Routes from 'react-static-routes'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'
import ReactGA from 'react-ga';

import Header from './components/Main/Header'
import Footer from './components/Main/Footer'
// import LogPageView from './components/LogPageView'

import configureStore from './configureStore'
import rootSaga from './sagas/rootSaga'

import './assets/sass/styles.scss'
import logo from '../public/uploads/image1-small-23.png'

const store = configureStore({})
store.runSaga(rootSaga)

// const App = () => (
class App extends Component {
  constructor () {
    super()
    this.state = {
      initialised: false,
      hasWindow: false,
    }
  }

  componentWillMount () {
    this.setState({
      initialised: true,
    })
  }

  componentDidMount () {
    ReactGA.initialize('UA-118823162-1', {
      debug: true,
    })
    ReactGA.pageview('Load Site')

    this.setState({
      hasWindow: true,
    })
  }

  render () {
    if (this.state.initialised && this.state.hasWindow) {
      console.log('track')
      ReactGA.set({ page: window.location.pathname })
      ReactGA.pageview(window.location.pathname)
    }
    return (
      <Provider store={store} key="provider">
        <Router>
          {/* <Route path="/" component={LogPageView} /> */}
          <div id="main-container">
            <Header logo={logo} />
            <Routes />
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default hot(module)(App)
