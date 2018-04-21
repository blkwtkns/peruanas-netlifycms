import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import { footerAction, headerAction } from '../uiActions'

class Dancer extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ dancer }) => (
        <section className="mainSection">
          <div className="dancer__container">
            <div className="headline-row">
              <div className="sub-headline">
                <Link className="dancer__back" to="/dancers/">{'<'}</Link>
              </div>
              <div className="sub-headline">
                <h3 className="dancer-title">{dancer.data.title}</h3>
              </div>
            </div>
            <br />
            <img className="dancer__image" src={dancer.data.thumbnail} alt="" />
            <Markdown className="dancer-markdown" source={dancer.content} escapeHtml={false} />
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
)(Dancer)
