import React from 'react'
import Card from '../card/card.js'

export default function Content(props) {
  return (
    <div>
      {props.cardCategories.map((category) => {
        return (
          <div>
             <Card 
              category={category}
              categoryName={props.categoryName}
              key={category.url}
             />
          </div>
        )
      })}
    </div>
  )
}