import React, { Component } from 'react'
import { connect } from 'react-redux'
import { footerAction, headerAction } from '../uiActions'
import { espContactForm, enContactForm } from './contactFormInfo'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {
      template: this.props.language === 'en' ? enContactForm : espContactForm
    }
  }

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  componentWillUpdate(nextProps) {
    if (nextProps.language !== this.props.language) {
      this.setState({
        template: nextProps.language === 'en' ? enContactForm : espContactForm
      })
      return true;
    }
  }

  render() {
    const { template } = this.state;
    return (
      <section className="mainSection">
        <div className="contact__container">
          <h1 className="contact-headline">{template.headline}</h1>
          <ul className="contact__direct">
            <li><a className="fa fa-envelope-o fa-lg" href="mailto:raicesperuanas@hotmail.com" /></li>
            <li><a className="fa fa-phone fa-lg" href="tel:6266640944" /></li>
            <li><a className="fa fa-youtube fa-lg" href="http://www.youtube.com/user/RaicesPeruanas/videos" /></li>
            <li><a className="fa fa-facebook fa-lg socials" href="https://www.facebook.com/danzas.peruanas" /></li>
            <li><a className="fa fa-twitter fa-lg" href="#" /></li>
          </ul>

          <div className="committeeInfo">
            <h2>{template.committee.title}</h2>
            <p><span>{template.committee.director}</span> Erbelia Espejo</p>
            <p><span>{template.committee.sub}</span> Ben Espejo</p>
            <p><span>{template.committee.instructors}</span> Melba Cubas & Oscar León</p>
            <p><span>{template.committee.assistant}</span> April Espejo</p>
            <p>South Pasadena, CA 91030</p>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ contact, ui }) => ({
  dbInfo: contact.dbInfo,
  visible: ui.footer.visible,
  language: ui.language.visible
})

const mapDispatchToProps = dispatch => ({
  submitForm: input => dispatch(putFormAction(input)),
  footerVisibility: visible => dispatch(footerAction(visible)),
  headerStasis: stasis => dispatch(headerAction(stasis))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
