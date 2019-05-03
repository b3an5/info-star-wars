import React, { Component } from 'react'

export default class Card extends Component {
  constructor() {
    super()
    this.state = {
      moreInfo: false,
    }
  }
  
  render() {
    if(this.props.categoryName === 'People') {
      return (
        <div>
        <h1>Name: {this.props.category.name}</h1>
        <h1>species: {this.props.category.species}</h1>
        <h2>Home Planet: {this.props.category.planetName}</h2>
        <p>Planet population: {this.props.category.population}</p>
        </div>
        )
      }
      if(this.props.categoryName === 'Vehicles') {
        return (
          <div>
          <h1>Name: {this.props.category.name}</h1>
          <h2>Model: {this.props.category.model}</h2>
          <h3>Class: {this.props.category.vehicle_class}</h3>
          <p>No. of Passengers: {this.props.category.passengers}</p>
        </div>
      )
    }
    if(this.props.categoryName === 'Planets') {
      const allResidents = this.props.category.residents.map((resident) => {
        return (
          <p>{resident}</p>
        )
      });
      return (
        <div>
          <h1>Name: {this.props.category.name}</h1>
          <h2>Terrain: {this.props.category.terrain}</h2>
          <h2>Population: {this.props.category.population}</h2>
          <h2>Climate: {this.props.category.climate}</h2>
          <h2>Residents: {allResidents}</h2>
        </div>
      )
    }
  }
}