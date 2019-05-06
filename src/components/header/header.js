import React from 'react'
import Controls from '../controls/controls.js'
import PropTypes from 'prop-types'
import '../../scss/main.scss'

export default function Header(props) {
  if(!props.splash) {
    return (
      <div className='header'>
        <h1 className='header-title'>INFOstarWARS</h1>
        <Controls 
          switchCardCat={props.switchCardCat}
        />
      </div>
    )
  } else {
    return (
      <div className='header'>
        <h1 className='header-title'><span className='info'>INFO</span>star<span className='wars'>WARS</span></h1>
      </div>
    )
  }
}

Header.propTypes = {
  splash: PropTypes.bool,
  switchCardCat: PropTypes.func
}