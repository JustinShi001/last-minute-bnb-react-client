import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

class Apartment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartment: null
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/apartments/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ apartment: res.data.apartment })
      })
      .catch(console.error)
  }

handleDelete = () => {
  event.preventDefault()
  axios({
    url: `${apiUrl}/apartments${this.props.match.params.id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
  // another way to switch our url
    .then(this.props.history.push('/'))
    .catch(console.error)
}
render () {
  if (!this.state.apartment) {
    return <p>Loading</p>
  }
  return (
    <div>
      <h2>{this.state.apartment.title}</h2>
      <p>{this.state.apartment.location}</p>
      <p>{this.state.apartment.imageUrl}</p>
      {this.props.user && (this.props.user.id === this.state.apartment.user.id) &&
        (
          <div>
            <Link className="btn btn-primary" to={`/apartments/${this.props.match.params.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          </div>
        )}
    </div>
  )
}
}

export default Apartment
