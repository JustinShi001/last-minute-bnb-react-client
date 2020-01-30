import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
// import ListGroup from 'react-bootstrap'

class Reservations extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reservations: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/reservations`,
      method: 'GET'
    })
      .then(response => {
        this.setState({ reservations: response.data.reservations })
      })
      .catch(console.error)
  }

  // callbacks in render should use (), not {}.
  render () {
    let reservationsJsx = ''
    if (!this.state.reservations.length) {
      reservationsJsx = <p>Loading...</p>
    } else {
      reservationsJsx = this.state.reservations.map(reservation => (
        <li className="list-group-item" key={reservation.id}>
          <Link to={`/reservations/${reservation.id}`}>{`checkin_date:${reservation.checkin_date}`}</Link>
          <p></p>
          <p to={`/reservations/${reservation.id}`}>{`checkout_date:${reservation.checkout_date}`}</p>
          <p></p>
          <p to={`/reservations/${reservation.id}`}>{`Apartment:${reservation.apartment.title} in ${reservation.apartment.location}`}</p>
        </li>
      ))
    }
    return (
      <ul className="list-group">
        {reservationsJsx}
      </ul>
    )
  }
}

export default Reservations

// , {reservation.apartment_id.title}
