import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/main.scss'
import {
  alderaan,
  atat,
  atst,
  beru,
  bespin,
  bigg,
  c3p0,
  cloudcar,
  coruscant,
  dagobah,
  endor,
  geonosis,
  hoth,
  kamino,
  leia,
  luke,
  naboo,
  obiwan,
  owen,
  r2d2,
  r5d4,
  sailbarge,
  sandcrawler,
  snowspeeder,
  t16skyhopper,
  tiebomber,
  tiefighter,
  vader,
  x34landspeeder,
  yavin4,
} from '../../images/card-images';


export default function Card(props) {
  
  const getImage = (name) => {
    const images = {
      "Alderaan": alderaan,
      "AT-AT": atat,
      "AT-ST": atst,
      "Bespin": bespin,
      "C-3PO": c3p0,
      "Coruscant": coruscant,
      "Dagobah": dagobah,
      "Darth Vader": vader,
      "Endor": endor,
      "Luke Skywalker": luke,
      "R2-D2": r2d2,
      "Leia Organa": leia,
      "Owen Lars": owen,
      "Beru Whitesun lars": beru,
      "R5-D4": r5d4,
      "Biggs Darklighter": bigg,
      "Obi-Wan Kenobi": obiwan,
      "Geonosis": geonosis,
      "Hoth": hoth,
      'Kamino': kamino,
      "Naboo": naboo,
      "Sail barge": sailbarge,
      "Sand Crawler": sandcrawler,
      "Snowspeeder": snowspeeder,
      "Storm IV Twin-Pod cloud car": cloudcar,
      "T-16 skyhopper": t16skyhopper,
      "TIE bomber": tiebomber,
      "TIE/LN starfighter": tiefighter,
      "X-34 landspeeder": x34landspeeder,
      "Yavin IV": yavin4
    }

    return images[name] || tiefighter;
  }

  if(props.categoryName === 'People') {
    return (
      <div className='card'>
        <img alt='cardimg' src={getImage(props.category.name)} className='card-pic'/>
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
          <img alt='cardimg' src={getImage(props.category.name)} className='card-pic'/>
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
        <img alt='cardimg' src={getImage(props.category.name)} className='card-pic'/>
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