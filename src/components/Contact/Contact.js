import React, { Component } from 'react'
import Notify from './NotifySubmission'
import { connect } from 'react-redux'
import * as types from '../../constants/actionTypes.js'
import putFormAction from './contactActions'

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
      <section className="contactSection">
        <div className="reqHeadline">
          <h1>
            Please contact us and/or send us your info to request more info or
            book a performance.
          </h1>
        </div>
        <form action="#">
          <div className="row uniform 50%">
            <div className="6u 12u$(xsmall)">
              <input
                type="text"
                name="name"
                className="name"
                value={this.state.nameInput}
                onChange={event => this.handleInputState(event, `nameInput`) }
                placeholder="Name" />
            </div>
            <div className="6u$ 12u$(xsmall)">
              <input
                type="email"
                name="email"
                className="email"
                placeholder="Email"
                value={this.state.emailInput}
                onChange={event => this.handleInputState(event, `emailInput`) } />
            </div>
            <div className="6u 12u$(medium)">
              <input type="checkbox" className="contact-generalInfo" name="info"/>
              <label htmlFor="info">General Info</label>
            </div>
            <div className="6u$ 12u$(medium)">
              <input type="checkbox" className="contact-bookingInfo" name="booking"/>
              <label htmlFor="booking">Booking</label>
            </div>
            <div className="6u 12u$(medium)">
              <input type="checkbox" className="contact-pricingInfo" name="pricing"/>
              <label htmlFor="pricing">Pricing</label>
            </div>
            <div className="6u 12u$(medium)">
              <input type="checkbox" className="contact-feedbackInfo" name="feedback"/>
              <label htmlFor="feedback">Feedback</label>
            </div>
            <div className="12u$ contact__text--container">
              <textarea
                className="textarea"
                id="message"
                placeholder="Please leave your feedback or any further request info here"
                rows="6"
                value={this.state.textInput}
                onChange={event => this.handleInputState(event, `textInput`) } ></textarea>
            </div>
            <div className="12u$">
              <ul className="actions">
                <li>
                  <input
                    type="submit"
                    value="Send Message"
                    className="special"
                    onClick={this.handleFormSubmit} />
                </li>
                <li><input type="reset" value="Reset" /></li>
              </ul>
            </div>
          </div>
        </form>

        <Notify dbInfo={this.props.dbInfo} />

        <div className="committeeInfo">
          <h2>Committee Members</h2>
          <p>Director: Erbelia Espejo</p>
          <p>Sub-director: Ben Espejo</p>
          <p>Instructors: Oscar León</p>
          <p>Cynthia Nagel</p>
          <p>Assistant: April Espejo</p>
          <p>South Pasadena, CA 91030</p>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ state }) => ({
  dbInfo: state.contactState.dbInfo,
})

const mapDispatchToProps = dispatch => {
  return {
    submitForm: input => dispatch(putFormAction(input)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
