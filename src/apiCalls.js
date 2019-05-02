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