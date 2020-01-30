import React, { Component } from 'react'
import ReservationForm from './ReservationForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class ReservationEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reservation: {
        checkin_date: '',
        checkout_date: '',
        apartment_id: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    // console.log(this.props)
    axios(`${apiUrl}/reservations/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ reservation: res.data.reservation })
      })
      .catch(console.error)
  }

  handleChange = event => {
    this.setState({
      reservation: {
        ...this.state.reservation,
        [event.target.name]: event.target.value
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/reservations/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        reservation: this.state.reservation
      }
    })
      .then(res => this.setState({ update: true }))
      .then(() => this.props.alert({
        heading: 'Woot Woot',
        message: 'Nice job! Reservation edited!',
        variant: 'success' }))
      .catch(() => this.props.alert({
        heading: 'Something wnet wrong',
        message: 'Try again!',
        variant: 'danger' }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/reservations/${this.props.match.params.id}`} />
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

export default ReservationEdit
