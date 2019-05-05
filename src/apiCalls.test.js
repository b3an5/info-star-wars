import { grabHomeworld, grabSpecies, grabResidents, getFilms, getPeople, getVehicles, getPlanets } from './apiCalls.js'
import { mockData } from './mockData.js'

describe('get films', () => {
  const { films, people, planets, vehicles } = mockData;

  beforeEach(() =>  {

  })

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      json: () => {
        return Promise.resolve(films);
      },
      ok: true
    });
  })


  it('should be called with correct param', () => {
    const expected = 'https://swapi.co/api/films'

    getFilms();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })
})

describe('get people', () => {
  const { films, people, planets, vehicles } = mockData;

  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        json: () => {
          return Promise.resolve(people);
        },
        ok: true
      })
    })
  })

  it('should be called with correct param', () => {
    const expected = 'https://swapi.co/api/people/'

    getPeople();

    expect(window.fetch).toHaveBeenCalledWith(expected);
  })
})


describe('get planets', () => {
  const { films, people, planets, vehicles } = mockData;
  
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    })
  })
  
  it('should be called with correct param', () => {
    const expected = 'https://swapi.co/api/planets'
    
    getPlanets();
    
    expect(window.fetch).toHaveBeenCalledWith(expected);
  })
})

describe('grab homworld', () => {
  const { films, people, planets, vehicles } = mockData;
  let grabHomeworld = jest.fn()
  
  window.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    })
  })

  it.skip('should be called with correct param', () => {

    getPeople()

    expect(grabHomeworld).toBeCalled();
  })
})