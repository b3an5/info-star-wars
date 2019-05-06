import React from 'react'
import Card from '../card/card.js'
import Ads from '../ads/ads.js'
import PropTypes from 'prop-types'
import '../../scss/main.scss'

export default function Content(props) {
  return (
    <div className='container'>
    <Ads />
      {props.cardCategories.map((category, index) =>  (
             <Card 
              category={category}
              categoryName={props.categoryName}
              key={index + Date.now()}
             />
        )
      )}
    </div>
  )
}

Content.propTypes = {
  cardCategories: PropTypes.array,
  categoryName: PropTypes.string
}