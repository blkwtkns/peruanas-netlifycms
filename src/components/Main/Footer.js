import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({ ui }) => ({
  visible: ui.footer.visible,
  language: ui.language.visible,
})

const style = {
  display: 'none',
}

const PeruSpan = () => (
  <span style={{color:'red'}}>Perú</span>
)

class Footer extends Component {
  constructor (props) {
    super(props)
  }

  shouldComponentUpdate (maybeProps) {
    return true
  }

  footerClass(visible) {
    return visible ? 'footer' : 'footer foot-hide';
  }

  render () {
    return (
      <footer className={this.footerClass(this.props.visible)}>
        <div className="footainer">
          <ul className="socialLinks">
            <li><a className="fa fa-phone fa-lg socials" href="tel:6266640944" /></li>
            <li><a
              className="fa fa-envelope-o fa-lg socials"
              href="mailto:raicesperuanas@hotmail.com"
            /></li>
            <li><a className="fa fa-twitter fa-lg socials" href="#" /></li>
            <li><a
              className="fa fa-youtube fa-lg socials"
              href="http://www.youtube.com/user/RaicesPeruanas/videos"
            /></li>
            <li><a
              className="fa fa-facebook fa-lg socials"
              href="https://www.facebook.com/danzas.peruanas"
            /></li>
          </ul>
          <p>RaicesPeruanas.com © Copyright 2004 - 2013</p>
          <p>
            { this.props.language === 'en' ?
              <em>
                Peruvian Events in Los Angeles. Promoting music and traditional dances from <PeruSpan/>
              </em> :
              <em>
                Eventos peruanos en Los Ángeles. Promover la música y las danzas tradicionales de <PeruSpan/>
              </em>
            }
          </p>

          <p style={style} >Created by <a href="http://blkmwtkns.co">Blake Watkins</a></p>
        </div>
      </footer>
    )
  }
}

export default connect(mapStateToProps)(Footer)
