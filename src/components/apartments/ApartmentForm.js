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
      name="location"
    />
    <input
      placeholder="Link to image here"
      type="text"
      value={apartment.imageUrl}
      onChange={handleChange}
      name="imageUrl"
    />
    <button type="submit">Submit</button>
  </form>
)

export default ApartmentForm
