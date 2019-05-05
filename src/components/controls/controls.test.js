import React from 'react';
import Controls from './controls.js';
import { shallow } from 'enzyme';

describe('controls', () => {

  let wrapper
  let mockSwitchCardCat = jest.fn()

  it('should match snapshot', () => {
    wrapper = shallow(<Controls
      switchCardCat={mockSwitchCardCat}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})