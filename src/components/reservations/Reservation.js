import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'

class Reservation extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reservation: null
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/reservations/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ reservation: res.data.reservation })
      })
      .catch(console.error)
  }

handleDelete = () => {
  event.preventDefault()
  axios({
    url: `${apiUrl}/reservations/${this.props.match.params.id}`,
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
  if (!this.state.reservation) {
    return <p>Loading</p>
  }
  return (
    <div>
      <h2>{this.state.reservation.checkin_date}</h2>
      <p>{this.state.reservation.checkout_date}</p>
      {this.props.user && (this.props.user.id === this.state.reservation.user.id) &&
        (
          <div>
            <Link className="btn btn-primary" to={`/reservations/${this.props.match.params.id}/edit`}>Edit</Link>
            <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
          </div>
        )}
    </div>
  )
}
}

export default Reservation
