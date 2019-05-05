import React, { Component } from 'react';

export default function Contols(props) {
  return(
    <div>
      <button onClick={props.switchCardCat}>People</button>
      <button onClick={props.switchCardCat}>Vehicles</button>
      <button onClick={props.switchCardCat}>Planets</button>
    </div>
  )
}