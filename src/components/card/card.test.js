import React from 'react';
import Card from './card.js';
import { shallow } from 'enzyme';

describe('card', () => {

  let wrapper 
  let mockCategoryNameP = 'People'
  let mockCategoryNameV = 'Vehicles'
  let mockCategoryNamePl = 'Planets'
  let mockCategoryV = {
    name: 'theo',
    model: 'monkey',
    vehicle_class: 'earth',
    passengers: 1
  }
  let mockCategoryP = {
    name: 'theo',
    species: 'monkey',
    planet: 'earth',
    population: 1,
    url: 'www.mockdatatheo.com'
  }
  let mockCategoryPl = {
    name: 'theo',
    terrain: 'monkey',
    climate: 'earth',
    population: 100,
    residents: ['a', 'b']
  }


  beforeEach(() => {
    wrapper = shallow(
      <Card
        category={mockCategoryP}
        categoryName={mockCategoryNameP}
        key={mockCategoryP.url} 
      />
    )
  })

  it('should match snapshot of people', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot of vehicles', () => {
    wrapper = shallow(
      <Card
        category={mockCategoryV}
        categoryName={mockCategoryNameV}
        key={mockCategoryV.url}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot of planets', () => {
    wrapper = shallow(
      <Card
        category={mockCategoryPl}
        categoryName={mockCategoryNamePl}
        key={mockCategoryPl.url}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})