import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData, Link } from 'react-static'
import { footerAction, headerAction } from '../uiActions'

class Dancers extends Component {

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  render () {
    return (
      <RouteData render={({ dancers }) => {
        const featuredIdx = Math.floor(Math.random() * dancers.length);
        return (
          <section className="mainSection">
            <div className="dancers__container">
              <h1 className="dancers--title">Dancers of Raices Peruanas</h1>
              <br />
              {
                <div className="dancer-contain">
                  <div className="dancer--featured" key={dancers[featuredIdx].data.slug}>
                    <Link to={`/dancers/dancer/${dancers[featuredIdx].data.slug}`}>
                      <img src={dancers[featuredIdx].data.thumbnail} alt={dancers[featuredIdx].data.title} />
                    </Link>
                  </div>
                </div>
              }
              <div className="dancers-grid">
                {dancers.map((dancer, idx) => {
                  if (idx === featuredIdx) {
                    return null
                  }
                  return (
                    <div className="dancer-contain">
                      <div className="dancer-col" key={dancer.data.slug}>
                        <Link to={`/dancers/dancer/${dancer.data.slug}`}>
                          <img src={dancer.data.thumbnail} alt={dancer.data.title} />
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
      )}} />
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
)(Dancers)
