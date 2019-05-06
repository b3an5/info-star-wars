import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';

export default function Controls(props) {
  return(
    <div className='button-component'>
      <button className='control-button' onClick={props.switchCardCat}>People</button>
      <button className='control-button' onClick={props.switchCardCat}>Vehicles</button>
      <button className='control-button' onClick={props.switchCardCat}>Planets</button>
    </div>
  )
}

Controls.propTypes = {
  switchCardCat: PropTypes.func
}