import React, { Component } from 'react'
import ReservationForm from './ReservationForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class ReservationCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reservation: {
        checkin_date: '',
        checkout_date: '',
        apartment_id: ''
      },
      createdId: ''
    }
  }
  handleChange = event => {
    // can't use funciton declaration, have to be fat arrow.
    // because if we use function declaration, this.state's this will only
    // refer to the function, not the class.

    this.setState({
      reservation: {
        ...this.state.reservation,
        [event.target.name]: event.target.value
      }
    })
  }
  // Object.assigns(this.state.reservation, {title: 'J'}) will create a new object
  // with the same values as this.state.reservation, but with title property updated
  // to 'J'
  // or just use {...this.state.reservation, title: "J"} as a shorthand
  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/reservations`,
      // in a RESTful app, what is the route we need for url?
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        reservation: this.state.reservation
      }
    })
      .then(res => this.setState({ createdId: res.data.reservation._id }))
      .then(() => this.props.alert({
        heading: 'Woot Woot',
        message: 'Nice job! Reservation created!',
        variant: 'success' }))
      .catch(() => this.props.alert({
        heading: 'Something wnet wrong',
        message: 'Try again!',
        variant: 'danger' }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/reservations/${this.state.createdId}`} />
    }
    return (
      <ReservationForm
        reservation={this.state.reservation}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default ReservationCreate

// <ReservationForm reservation="" handleChange="" handleSubmit=""/>
// these are "key-value pairs" for the props, which is the input parameter
// for the function ReservationForm() defined in the ReservationForm.js
// this is the way to invoke a function in react jsx
