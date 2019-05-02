import React from 'react';

export default function Splash(props) {
  return (
    <div>
      <h1>{props.film.title}</h1>
      <h1><span>Released:</span>{props.film.release_date}</h1>
      <p>{props.film.opening_crawl}</p>
      <button onClick={props.splashButton}>Continue</button>
    </div>
  )
}