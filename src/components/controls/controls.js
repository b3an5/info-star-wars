import React from 'react';
import PropTypes from 'prop-types'

export default function Controls(props) {
  return(
    <div>
      <button onClick={props.switchCardCat}>People</button>
      <button onClick={props.switchCardCat}>Vehicles</button>
      <button onClick={props.switchCardCat}>Planets</button>
    </div>
  )
}

Controls.propTypes = {
  switchCardCat: PropTypes.func
}