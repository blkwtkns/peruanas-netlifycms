import React, { Component } from 'react'
import ReactGA from 'react-ga';

export default class LogPageView extends Component {
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
    return null
  }
}
