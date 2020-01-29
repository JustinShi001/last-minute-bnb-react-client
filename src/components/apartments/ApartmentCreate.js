import React, { Component } from 'react'
import ApartmentForm from './ApartmentForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class ApartmentCreate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartment: {
        title: '',
        author: ''
      },
      createdId: ''
    }
  }
  handleChange = event => {
    // can't use funciton declaration, have to be fat arrow.
    // because if we use function declaration, this.state's this will only
    // refer to the function, not the class.

    this.setState({
      apartment: {
        ...this.state.apartment,
        [event.target.name]: event.target.value
      }
    })
  }
  // Object.assigns(this.state.apartment, {title: 'J'}) will create a new object
  // with the same values as this.state.apartment, but with title property updated
  // to 'J'
  // or just use {...this.state.apartment, title: "J"} as a shorthand
  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/apartments`,
      // in a RESTful app, what is the route we need for url?
      method: 'POST',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        apartment: this.state.apartment
      }
    })
      .then(res => this.setState({ createdId: res.data.apartment._id }))
      .then(() => this.props.alert({
        heading: 'Woot Woot',
        message: 'Nice job! Apartment created!',
        variant: 'success' }))
      .catch(() => this.props.alert({
        heading: 'Something wnet wrong',
        message: 'Try again!',
        variant: 'danger' }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/apartments/${this.state.createdId}`} />
    }
    return (
      <ApartmentForm
        apartment={this.state.apartment}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default ApartmentCreate

// <ApartmentForm apartment="" handleChange="" handleSubmit=""/>
// these are "key-value pairs" for the props, which is the input parameter
// for the function ApartmentForm() defined in the ApartmentForm.js
// this is the way to invoke a function in react jsx
