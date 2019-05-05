import React from 'react'
import Header from './header.js'
import { shallow } from 'enzyme'

describe('header', () => {
  let wrapper 
  let mockSwitchCardCat = jest.fn()
  let mockSplash = false;

  it('should match snapshot', () => {
    wrapper = shallow(
      <Header 
        splash = {mockSplash}
        mockSwitchCardCat = {mockSwitchCardCat}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })


})