import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import Event from './Event'
import { footerAction, headerAction } from '../uiActions'

class Presentations extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ presentations }) => (
        <section className="mainSection">
          <div className="presentation__container">
            <h1 className="pres-header">Presentations</h1>
            <ul>
              {presentations.map((event, id) => (
                <li key={id} className="presentation">
                  <Event {...event.data} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )} />
    )
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    visible: ui.footer.visible,
  }
}

const mapDispatchToProps = dispatch => ({
  footerVisibility: visible => dispatch(footerAction(visible)),
  headerStasis: stasis => dispatch(headerAction(stasis)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Presentations)
