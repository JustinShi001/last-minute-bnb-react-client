import React from 'react'

const ApartmentForm = ({ apartment, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <input
      placeholder="Apartment title"
      type="text"
      value={apartment.title}
      onChange={handleChange}
      name="title"
    />
    <input
      placeholder="Apartment location"
      type="text"
      value={apartment.location}
      onChange={handleChange}
      name="author"
    />
    <button type="submit">Submit</button>
  </form>
)

export default ApartmentForm
