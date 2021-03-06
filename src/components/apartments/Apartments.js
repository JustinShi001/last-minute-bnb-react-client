import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import apiUrl from '../../apiConfig'
// import ListGroup from 'react-bootstrap'

class Apartments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount () {
    axios({
      url: `${apiUrl}/apartments`,
      method: 'GET'
    })
      .then(response => {
        this.setState({ apartments: response.data.apartments })
      })
      .catch(console.error)
  }

  // callbacks in render should use (), not {}.
  render () {
    let apartmentsJsx = ''
    if (!this.state.apartments.length) {
      apartmentsJsx = <p>Loading...</p>
    } else {
      apartmentsJsx = this.state.apartments.map(apartment => (
        <div key={apartment.id}>
          <img className="image-container-small"src={apartment.imageUrl} />
          <p></p>
          <p className="small-font">{apartment.location}</p>
          <Link to={`/apartments/${apartment.id}`}>{`          ${apartment.title}`}</Link>
        </div>
      ))
    }
    return (
      <div className="list-group">
        {apartmentsJsx}
      </div>
    )
  }
}

export default Apartments

// <p></p>
// <p to={`/apartments/${apartment.id}`}>{`Reservation checkin_date:${apartment.reservations}`}</p>
// <p></p>
// <p to={`/apartments/${apartment.id}`}>{`Reservation checkout_date:${apartment.reservations.checkout_date}`}</p>
// <p></p>
