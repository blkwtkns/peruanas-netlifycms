import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData, Link } from 'react-static'
import Markdown from 'react-markdown'
import { footerAction, headerAction } from '../uiActions'

class Dance extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ dance }) => (
        <section className="mainSection">
          <div className="dance__container">
            <div className="headline-row">
              <div className="dance-back-btn">
                <Link className="sub-headline dance__back" to="/dances/">Back to Dances</Link>
              </div>
              <h3 className="sub-headline dance-title">{dance.data.title}</h3>
            </div>
            <br />
            <img className="dance__image" src={dance.data.thumbnail} alt="" />
            <Markdown className="dance-markdown" source={dance.content} escapeHtml={false} />
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
)(Dance)
