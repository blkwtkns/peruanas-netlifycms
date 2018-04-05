import React, { Component } from 'react'
import { connect } from 'react-redux'
import Sociolinks from './SocialLinks'

const mapStateToProps = ({ ui }) => ({
  visible: ui.footer.visible,
})

class Footer extends Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (maybeProps) {
    console.log('footer shouldItUpdate', this.props, maybeProps)
    return maybeProps.visible
  }

  render () {
    return (
      { <this.props.visible && Footie /> }
    )
  }
}

const Footie = () => (
  <footer className="footer">
    <div className="containter">
      <Sociolinks />
      <p>RaicesPeruanas.com © Copyright 2004 - 2013</p>
      <p>
        <em>
          Peruvian Events in Los Angeles. Promoting music and traditional dances
          from Perú
        </em>
      </p>
      <p>
        Web page created, updated and Maintained by:{' '}
        <a href="blkmwtkns.co">Blake Watkins</a>
      </p>
    </div>
  </footer>
)

export default connect(mapStateToProps)(Footer)
