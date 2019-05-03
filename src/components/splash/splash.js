import React from 'react';
import Crawl from 'react-star-wars-crawl'
import 'react-star-wars-crawl/lib/index.css'

export default function Splash(props) {
  return (
    <div>
      {/* <h1>{props.film.title}</h1>
      <h1><span>Released:</span>{props.film.release_date}</h1>
      <p>{props.film.opening_crawl}</p> */}
      <Crawl 
        title={props.film.title}
        subTitle={props.film.release_date}
        text={props.film.opening_crawl}
      />
      <button onClick={props.splashButton}>Continue</button>
    </div>
  )
}