import React, { Component } from 'react'
import BookForm from './BookForm'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'

class BookEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      book: {
        title: '',
        author: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    // console.log(this.props)
    axios(`${apiUrl}/books/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ book: res.data.book })
      })
      .catch(console.error)
  }

  handleChange = event => {
    this.setState({
      book: {
        ...this.state.book,
        [event.target.name]: event.target.value
      }
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    axios({
      url: `${apiUrl}/books/${this.props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        book: this.state.book
      }
    })
      .then(res => this.setState({ update: true }))
      .then(() => this.props.alert({
        heading: 'Woot Woot',
        message: 'Nice job! Book edited!',
        variant: 'success' }))
      .catch(() => this.props.alert({
        heading: 'Something wnet wrong',
        message: 'Try again!',
        variant: 'danger' }))
  }

  render () {
    if (this.state.createdId) {
      return <Redirect to={`/books/${this.props.match.params.id}`} />
    }
    return (
      <BookForm
        book={this.state.book}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default BookEdit
