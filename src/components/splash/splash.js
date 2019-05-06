import React from 'react';
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'
import PropTypes from 'prop-types'
import '../../scss/main.scss'

export default function Splash(props) {
  return (
    <div>
      <Crawl 
        title={props.film.title}
        subTitle={props.film.release_date}
        text={props.film.opening_crawl}
      />
      <button className='enter-button' onClick={props.splashButton}>Continue</button>
    </div>
  )
}

Splash.propTypes = {
  film: PropTypes.object,
  splashButton: PropTypes.func
}