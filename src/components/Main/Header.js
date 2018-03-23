import React from 'react'
import RouteLinks from './RouteLinks'
import SocialLinks from './SocialLinks'
import { Link } from 'react-static'

export default props => (
  <header id="header">
    <img src={props.logo} className={"raicesLogo"}/>
    <h1 className="logo"><Link to="/">Raices Peruanas</Link></h1>
    <nav id="nav">
      <ul>
        <li><Link to="/presentations">Presentations</Link></li>
        <li><Link to="/dances">Dances</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <a href="#">Social</a>
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
        </li>
          { /*
            <li>
              <a href="#">Submenu</a>
              <ul>

                <li><Link to="/presentations">Presentations</Link></li>
                <li><Link to="/dances">Dances</Link></li>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="elements.html">Elements</a></li>
      <li><a href="#" class="button special">Sign Up</a></li>
       */ }
      </ul>
    </nav>
  </header>
)
