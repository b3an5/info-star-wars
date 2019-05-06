import React from 'react';
import { shallow } from 'enzyme';
import ads from './ads'

describe('ads', () => {
  let wrapper

  it('should match snapshot', () => {
    wrapper = shallow(<ads />)

    expect(wrapper).toMatchSnapshot()
  })
})