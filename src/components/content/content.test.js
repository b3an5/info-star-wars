import React from 'react';
import Content from './content.js';
import { shallow } from 'enzyme';

describe('content', () => {
  let wrapper
  let mockCardCategories = [{
        name: 'theo',
        species: 'monkey',
        planet: 'earth',
        population: 1,
        url: 'www.mockdatatheo.com'
      }, {
          name: 'theo',
          species: 'monkey',
          planet: 'earth',
          population: 1,
          url: 'www.mockdatatheo.com'
        }]
  let mockCategoryName = 'People'

  it('should match snapshot', () => {
    wrapper = shallow(
    <Content
      cardCategories = {mockCardCategories}
      categoryName = {mockCategoryName}
    />)
    expect(wrapper).toMatchSnapshot()
  })
})