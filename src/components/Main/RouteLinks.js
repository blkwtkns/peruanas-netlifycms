import React, { Component } from 'react'
import { Link } from 'react-static'

export default class Routelinks extends Component {
  constructor(props){
    super(props)
    this.state = {
      listVisibility: true
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this)
  }

  toggleMobileMenu() {
    this.setState({ listVisibility: !this.state.listVisibility });
  }

  toggleListClass() {
    return this.state.listVisibility ? 'nav-ul hide-ul' : 'nav-ul';
  }

  toggleLinkVisibility(stasis) {
    return stasis ? 'nav-link nav-links-home' : 'nav-link nav-links-else';
  }

  toggleHeaderBackground(stasis) {
    return stasis ? 'nav-background nav-back-trans' : 'nav-background nav-back-white';
  }

  toggleMenuBackground(stasis) {
    return stasis ? 'nav-menu-button nav-menu-btn-clr-home' : 'nav-menu-button nav-menu-btn-clr-else';
  }

  render() {
    return (
      <div className={this.toggleHeaderBackground(this.props.stasis)}>
        <div id="nav-container">
          <header id="nav-header">
            <div className="raicesLink nav-logo"><Link to="/"><img src={this.props.logo} className='raicesLogo' alt="peruanos logo" /></Link></div>
            <div className={this.toggleMenuBackground(this.props.stasis)} onClick={this.toggleMobileMenu}><i className="fa fa-bars fa-2x"></i></div>
          </header>
          <nav>
            <ul className={this.toggleListClass()}>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/about">About</Link></li>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/presentations">Presentations</Link></li>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/dances">Dances</Link></li>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/history">History</Link></li>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/dancers">Dancers</Link></li>
              <li className={this.toggleLinkVisibility(this.props.stasis)}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
