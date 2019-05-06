import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/main.scss'

export default function Card(props) {
  if(props.categoryName === 'People') {
    return (
      <div className='card'>
        <h1 className='small-card'>Name: {props.category.name}</h1>
      <h1>species: {props.category.species}</h1>
      <h2>Home Planet: {props.category.planetName}</h2>
      <h2>Planet population: {props.category.population}</h2>
      </div>
      )
    }
    if(props.categoryName === 'Vehicles') {
      return (
        <div className='card'>
        <h1 className='small-card'>Name: {props.category.name}</h1>
        <h2>Model: {props.category.model}</h2>
        <h2>Class: {props.category.vehicle_class}</h2>
        <h2>No. of Passengers: {props.category.passengers}</h2>
      </div>
    )
  }
  if(props.categoryName === 'Planets') {
    const allResidents = props.category.residents.map((resident, index) => {
      return (
        <span key={index+Date.now()}>{resident} </span>
      )
    });
    return (
      <div className='card'>
        <h1>Name: {props.category.name}</h1>
        <h2>Terrain: {props.category.terrain}</h2>
        <h2>Population: {props.category.population}</h2>
        <p>Climate: {props.category.climate}</p>
        <p>Residents: {allResidents}</p>
      </div>
    )
  }
}

Card.propTypes = {
  category: PropTypes.object,
  categoryName: PropTypes.string
}