export const grabFilms = () => {
  fetch('https://swapi.co/api/films')
    .then(response => response.json())
}

export const grabHomeworld = (people) => {
  let unresolvedPromises = people.map((person) => {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({ ...person, planetName: data.name, population: data.population }))
  })
  return Promise.all(unresolvedPromises)
}

export const grabSpecies = (people) => {
  let unresolvedPromises = people.map((person) => {
    return fetch(person.species[0])
    .then(response => response.json())
    .then(data => ({ ...person, species: data.name }))
  })
  return Promise.all(unresolvedPromises)
}

export const grabResidents = (planets) => {
  const unresolvedPromises = planets.map((planet) => {

    return unresolvedPromise2(planet.residents).then(residents => ({
      ...planet, residents }))
  })
  return Promise.all(unresolvedPromises)
}


const unresolvedPromise2 = (residents) => {
  const promises = residents.map((resident) => {
    console.log(resident)
    return fetch(resident)
    .then(response => response.json())
    .then(data => data.name)
  })
  return Promise.all(promises)
} 