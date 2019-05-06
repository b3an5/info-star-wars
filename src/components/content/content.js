import React from 'react'
import Card from '../card/card.js'
import PropTypes from 'prop-types'

export default function Content(props) {
  return (
    <div>
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