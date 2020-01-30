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
    url: `${apiUrl}/apartments/${this.props.match.params.id}`,
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
      <h2>Apartment title: {this.state.apartment.title}</h2>
      <p>Location: {this.state.apartment.location}</p>
      <p>imageUrl: {this.state.apartment.imageUrl}</p>
      <p>apartment_id: {this.state.apartment.id}</p>
      <p>reserved dates:
        {this.state.apartment.reservations.map(reservation => (
          <li className="list-group-item" key={reservation.id}>
            <p>{reservation.checkin_date} to {reservation.checkout_date}</p>
          </li>
        ))}
      </p>
      <Link className="btn btn-secondary" to={'/create-reservation'}>create-reservation</Link>
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

// render () {
//   let reservationsJsx = ''
//   if (!this.state.apartment.reservations.length) {
//     reservationsJsx = <p>No reservations yet...</p>
//   } else {
//     reservationsJsx = this.state.apartment.reservations.map(reservation => (
//       <li>
//         <Link to={`/reservations/${reservation.id}`}>{reservation.checkin_date}</Link>
//       </li>
//     ))
//   }
//   return (
//     <ul className="list-group">
//       {reservationsJsx}
//     </ul>
//   )
// }

// <p></p>
// <p to={`/apartments/${apartment.id}`}>{`Reservation checkin_date:${apartment.reservations}`}</p>
// <p></p>
// <p to={`/apartments/${apartment.id}`}>{`Reservation checkout_date:${apartment.reservations.checkout_date}`}</p>
// <p></p>
// else if (this.props.user.id !== this.state.apartment.user.id) {
//   return
//     <Link className="btn btn-primary" to={`/reservations/create-reservation`}>create-reservation</Link>
// }
