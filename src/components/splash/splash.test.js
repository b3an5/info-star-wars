import React from 'react'
import Splash from './splash.js'
import { shallow } from 'enzyme'

describe('splash', () => {
  let wrapper
  let mockShowMainPage = jest.fn()
  let mockFilm = {
    title: 'spaceballs',
    subTitle: '2',
    text: 'lonestar vs dark helmet'
  }

  it('should match snapshot', () => {
    wrapper = shallow(
      <Splash 
        film={mockFilm}
        splashButton={mockShowMainPage}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})