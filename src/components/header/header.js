import React from 'react'
import Controls from '../controls/controls.js'

export default function Header(props) {
  if(!props.splash) {
    return (
      <div>
        <h1>INFOstarWARS</h1>
        <Controls 
          switchCardCat={props.switchCardCat}
        />
      </div>
    )
  } else {
    return (
      <div>
        <h1>INFOstarWARS</h1>
      </div>
    )
  }
}