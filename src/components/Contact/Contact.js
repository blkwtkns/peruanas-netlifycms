import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notify from './NotifySubmission'
import putFormAction from './contactActions'
import { footerAction, headerAction } from '../uiActions'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameInput: "",
      emailInput: "",
      textInput: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  componentDidMount () {
    this.props.footerVisibility(true)
    this.props.headerStasis(false)
  }

  handleFormSubmit(e) {
    e.preventDefault()
    const input = {
      name: this.nameInput.value,
      email: this.emailInput.value,
      message: this.textInput.value,
    }
    this.props.submitForm(input)
  }

  handleInputState(event, type) {
    console.log('see event and type', event, type);
    let update = {};
    update[type] = event.target.value;
    this.setState(update);
  }

  render() {
    return (
      <section className="mainSection">
        <div className="contact__container">
          <h1 className="contact-headline">
            Please contact us and/or send us your info to request more info or book a performance.</h1>
          <form action="#">
            <div className="contact-forms">
              <div className="contact-info">
                <input
                  type="text"
                  name="name"
                  className="name"
                  value={this.state.nameInput}
                  onChange={event => this.handleInputState(event, `nameInput`) }
                  placeholder="Name" />
              </div>
              <div className="contact-info">
                <input
                  type="email"
                  name="email"
                  className="email"
                  placeholder="Email"
                  value={this.state.emailInput}
                  onChange={event => this.handleInputState(event, `emailInput`) } />
              </div>
              <div className="contact-checkbox-container">
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-generalInfo" name="info"/>
                  <label htmlFor="info">General Info</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-bookingInfo" name="booking"/>
                  <label htmlFor="booking">Booking</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-pricingInfo" name="pricing"/>
                  <label htmlFor="pricing">Pricing</label>
                </div>
                <div className="contact-checkbox">
                  <input type="checkbox" className="contact-feedbackInfo" name="feedback"/>
                  <label htmlFor="feedback">Feedback</label>
                </div>
              </div>
              <div className="contact__text--container">
                <textarea
                  className="textarea"
                  id="message"
                  placeholder="Please leave your feedback or any further request info here"
                  rows="6"
                  value={this.state.textInput}
                  onChange={event => this.handleInputState(event, `textInput`) } ></textarea>
              </div>
              <div className="contact-actions">
                <input
                  type="submit"
                  value="Send Message"
                  className="special"
                  onClick={this.handleFormSubmit} />
                  <input type="reset" value="Reset" />
              </div>
            </div>
          </form>

          <Notify dbInfo={this.props.dbInfo} />

          <div className="committeeInfo">
            <h2>Committee Members</h2>
            <p><span>Director:</span> Erbelia Espejo</p>
            <p><span>Sub-director:</span> Ben Espejo</p>
            <p><span>Instructors:</span> Oscar León</p>
            <p><span>Assistant:</span> April Espejo</p>
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
  visible: ui.footer.visible
})

const mapDispatchToProps = dispatch => ({
  submitForm: input => dispatch(putFormAction(input)),
  footerVisibility: visible => dispatch(footerAction(visible)),
  headerStasis: stasis => dispatch(headerAction(stasis))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
