import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme'
import { mockData } from './mockData.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('app', () => {
  let wrapper 
  let e
  const { films, people, planets, vehicles } = mockData;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should have the correct default state', () => {
    expect(wrapper.state()).toEqual({
      isLoading: true,
      splash: true,
      film: null,
      randomFilm: null,
      data: {
        People: [],
        Planets: [],
        Vehicles: []
      },
      cardCategory: 'People'
    })
  })

  it('should set cardCategory in state to innertext when switch cardCat is called', () => {
    e = {
      target: {
        innerText: 'Vehicles'
      }
    }
    expect(wrapper.state()).toEqual({
      isLoading: true,
      splash: true,
      film: null,
      randomFilm: null,
      data: {
        People: [],
        Planets: [],
        Vehicles: []
      },
      cardCategory: 'People'
    })
    wrapper.instance().switchCardCat(e)
    expect(wrapper.state()).toEqual({
      isLoading: true,
      splash: true,
      film: null,
      randomFilm: null,
      data: {
        People: [],
        Planets: [],
        Vehicles: []
      },
      cardCategory: 'Vehicles'
    })
  })

  it.skip('should populate state when component did mount runs', () => {
    wrapper.instance().componentDidMount()
    expect(wrapper.state()).toEqual({
        isLoading: true,
        splash: true,
        film: null,
        randomFilm: null,
        data: {
          People: people.results,
          Planets: planets.results,
          Vehicles: vehicles.results
        },
        cardCategory: 'People'
    })
  })

  it('should switch state splash to false when showMainPage is called', () => {
    wrapper.instance().showMainPage()
    expect(wrapper.state()).toEqual({
        isLoading: true,
        splash: false,
        film: null,
        randomFilm: null,
        data: {
          People: [],
          Planets: [],
          Vehicles: []
        },
        cardCategory: 'People'
    })
  })

  it('should match snapshot when splash is false', () => {
    wrapper.instance().showMainPage()
    expect(wrapper).toMatchSnapshot()
  })

})