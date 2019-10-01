// import { withRouteData } from 'react-static'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RouteData } from 'react-static'
import { footerAction, headerAction } from '../uiActions'

class Home extends Component {
  componentDidMount () {
    this.props.footerVisibility(false)
    this.props.headerStasis(true)
    document.getElementById('main-container').style.paddingBottom = 0;
  }

  componentWillUnmount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)

    // document.getElementById('main-container').style.paddingBottom = '23vh';
  }

  render () {
    return (
      <RouteData render={({ home }) => (
        <section className="homeSection">
          <img className="home__background" src={home[0].data.thumbnail}></img>
          <div className="Intro">
            <div className="greyBox">
              <h1 className="intro-title">Raices Peruanas</h1>
        {this.props.language === 'en' ? <h1 className="intro-subtitle">Dance, Music, Culture</h1> : <h1 className="intro-subtitle">Bailar, Musica, Cultura</h1> }
            </div>
          </div>
        </section>
      )} />
    )
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    visible: ui.footer.visible,
    language: ui.language.visible,
  }
}

const mapDispatchToProps = dispatch => ({
  footerVisibility: visible => dispatch(footerAction(visible)),
  headerStasis: stasis => dispatch(headerAction(stasis)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
