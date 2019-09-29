import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import { footerAction, headerAction } from '../uiActions'
import Member from './Member'

class Team extends Component {
  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ team }) => (
        <section className="mainSection">
          <div className="presentation__container">
            <h1 className="pres-header">Grupo Raices Peruanas</h1>
            <ul>
              {team.map((member, id) => (
                <li key={id} className="presentation">
                  <Member {...member.data} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )} />
    )
  }
}

const mapStateToProps = ({ ui }) => ({
  visible: ui.footer.visible,
})

const mapDispatchToProps = dispatch => ({
  footerVisibility: visible => dispatch(footerAction(visible)),
  headerStasis: stasis => dispatch(headerAction(stasis)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Team)
