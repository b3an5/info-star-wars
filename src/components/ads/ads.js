import React from 'react';
import '../../scss/main.scss'
import palp from '../../images/palp.png'
import yoda from '../../images/yoda.png'

export default function Ads() {

  return(
    <div className='top-stories'>
      <h1 className='top-stories-title'>Top Stories</h1>
      <div className='story-wrap'>
        <div className='story1 story'>
          <img className='story-picture' src={palp} alt='meme'/>
          <p className='story-title'>Is Palpatine a Sith Loard?</p>
        </div>
        <div className='story2 story'>
          <img className='story-picture' src={yoda} alt='yoda'/>
          <p className='story-title'>Midichlorians in the water are turning the frogs FORCE-SENSITIVE!</p>
        </div>
      </div>
    </div>
  )
}