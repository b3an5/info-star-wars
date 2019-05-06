import React from 'react'
import PropTypes from 'prop-types'

export default function Card(props) {
  if(props.categoryName === 'People') {
    return (
      <div>
      <h1>Name: {props.category.name}</h1>
      <h1>species: {props.category.species}</h1>
      <h2>Home Planet: {props.category.planetName}</h2>
      <p>Planet population: {props.category.population}</p>
      </div>
      )
    }
    if(props.categoryName === 'Vehicles') {
      return (
        <div>
        <h1>Name: {props.category.name}</h1>
        <h2>Model: {props.category.model}</h2>
        <h3>Class: {props.category.vehicle_class}</h3>
        <p>No. of Passengers: {props.category.passengers}</p>
      </div>
    )
  }
  if(props.categoryName === 'Planets') {
    const allResidents = props.category.residents.map((resident, index) => {
      return (
        <p key={index+Date.now()}>{resident}</p>
      )
    });
    return (
      <div>
        <h1>Name: {props.category.name}</h1>
        <h2>Terrain: {props.category.terrain}</h2>
        <h2>Population: {props.category.population}</h2>
        <h2>Climate: {props.category.climate}</h2>
        <h2>Residents: {allResidents}</h2>
      </div>
    )
  }
}

Card.propTypes = {
  category: PropTypes.object,
  categoryName: PropTypes.string,
  key: PropTypes.number
}