import React from 'react'

const ReservationForm = ({ reservation, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      placeholder="Reservation checkin_date"
      type="date"
      value={reservation.checkin_date}
      onChange={handleChange}
      name="checkin_date"
    />
    <input
      placeholder="Reservation checkout_date"
      type="date"
      value={reservation.checkout_date}
      onChange={handleChange}
      name="checkout_date"

    />
    <input
      placeholder="Apartment_id"
      type="text"
      value={reservation.apartment_id}
      onChange={handleChange}
      name="apartment_id"
    />
    <button type="submit">Submit</button>
  </form>
)

export default ReservationForm
