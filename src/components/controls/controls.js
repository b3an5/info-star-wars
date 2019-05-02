import React, { Component } from 'react';

export default class Contols extends Component {
  constructor() {
    super();
    // this.state = {
    //   peopleButton: 'on',
    //   vehiclesButton: 'off',
    //   planetsButton: 'off'
    // }
  }

  render() {
    return(
      <div>
        <button onClick={this.props.switchCardCat}>People</button>
        <button onClick={this.props.switchCardCat}>Vehicles</button>
        <button onClick={this.props.switchCardCat}>Planets</button>
      </div>
    )
  }
}