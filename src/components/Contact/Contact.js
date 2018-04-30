import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notify from './NotifySubmission'
import putFormAction from './contactActions'
import { footerAction, headerAction } from '../uiActions'
import { espContactForm, enContactForm } from './contactFormInfo'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState();
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  getInitialState() {
    return {
      nameInput: "",
      emailInput: "",
      textInput: "",
      template: this.props.language === 'en' ? enContactForm : espContactForm
    }
  }

  resetState() {
    this.setState(this.getInitialState())
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

  handleFormSubmit(e) {
    e.preventDefault()
    const input = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.textInput.value,
    }
    this.props.submitForm(input)
    this.resetState()
  }

  handleInputState(event, type) {
    console.log('see event and type', event, type);
    let update = {};
    update[type] = event.target.value;
    this.setState(update);
  }

  render() {
    const { template } = this.state;
    return (
      <section className="mainSection">
        <div className="contact__container">
          <h1 className="contact-headline">{ this.state.template.headline }</h1>
          <form action="#">
            <div className="contact-forms">
              <div className="contact-info">
                <input
                  type="text"
                  name="name"
                  className="name"
                  value={this.state.nameInput}
                  onChange={event => this.handleInputState(event, `nameInput`) }
                  placeholder={template.info.name} />
              </div>
              <div className="contact-info">
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder={template.info.email}
                  value={this.state.emailInput}
                  onChange={event => this.handleInputState(event, `emailInput`) } />
              </div>
              <div className="contact-checkbox-container">
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-generalInfo" name="info"/>
                  <label htmlFor="info">{template.checkbox.info}</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-bookingInfo" name="booking"/>
                  <label htmlFor="booking">{template.checkbox.booking}</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-pricingInfo" name="pricing"/>
                  <label htmlFor="pricing">{template.checkbox.pricing}</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-feedbackInfo" name="feedback"/>
                  <label htmlFor="feedback">{template.checkbox.feedback}</label>
                </div>
              </div>
              <div className="contact__text--container">
                <textarea
                  className="textarea"
                  id="message"
                  placeholder={template.textarea}
                  rows="6"
                  value={this.state.textInput}
                  onChange={event => this.handleInputState(event, `textInput`) } ></textarea>
              </div>
              <div className="contact-actions">
                <input
                  type="submit"
                  value={template.actions.submit}
                  className="special"
                  onClick={this.handleFormSubmit} />
                  <input type="reset" value={template.actions.reset} />
              </div>
            </div>
          </form>

          <Notify dbInfo={this.props.dbInfo} template={template}/>

          <div className="committeeInfo">
            <h2>{template.committee.title}</h2>
            <p><span>{template.committee.director}</span> Erbelia Espejo</p>
            <p><span>{template.committee.sub}</span> Ben Espejo</p>
            <p><span>{template.committee.instructors}</span> Oscar León</p>
            <p><span>{template.committee.assistant}</span> April Espejo</p>
            <p>Cynthia Nagel</p>
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
