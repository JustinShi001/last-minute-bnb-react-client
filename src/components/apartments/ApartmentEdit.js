import React, { Component } from 'react'
import ApartmentForm from './ApartmentForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartment: {
        title: '',
        author: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    // console.log(this.props)
    axios(`${apiUrl}/apartments/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ apartment: res.data.apartment })
      })
      .catch(console.error)
  }

  handleChange = event => {
    this.setState({
      apartment: {
        ...this.state.apartment,
        [event.target.name]: event.target.value
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/apartments/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        apartment: this.state.apartment
      }
    })
      .then(res => this.setState({ update: true }))
      .then(() => this.props.alert({
        heading: 'Woot Woot',
        message: 'Nice job! Apartment edited!',
        variant: 'success' }))
      .catch(() => this.props.alert({
        heading: 'Something wnet wrong',
        message: 'Try again!',
        variant: 'danger' }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/apartments/${this.props.match.params.id}`} />
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

export default ApartmentEdit
