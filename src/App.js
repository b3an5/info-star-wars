import React, { Component } from 'react';
import Splash from './components/splash/splash.js';
import Header from './components/header/header.js';
import Content from './components/content/content.js';
import { grabHomeworld, grabSpecies } from './apiCalls.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
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
    }
  }

  switchCardCat = (e) => {
    this.setState({cardCategory: e.target.innerText})
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => {
        this.setState({
          film: data.results,
          isLoading: false,
          randomFilm: Math.floor(Math.random() * data.results.length)
        });
      })
      .catch(error => console.log(error));

    fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(homeworld => grabHomeworld(homeworld.results))
      .then(species => grabSpecies(species))
      .then(results => this.setState( ({ data }) => {
       data.People = results
        return data
      } ))

    fetch('https://swapi.co/api/vehicles')
    .then(response => response.json())
    .then(results => this.setState( ({ data }) => {
      data.Vehicles = results.results
      return data
    }))

    fetch('https://swapi.co/api/planets')
    .then(response => response.json())
    .then(results => this.setState(({ data }) => {
      data.Planets = results.results
      return data
    }))
  }

  showMainPage = () => {
    this.setState({
      splash: false
    })
  }

  render() {
    if(this.state.isLoading) {
      return (
        <div className="App">
          <h1>...loading</h1>
        </div>
      );
    } 
    if(this.state.splash) {
      return (
        <div>
          <Header 
            splash={this.state.splash}
          />
          <Splash 
            film={this.state.film[this.state.randomFilm]}
            splashButton = {this.showMainPage}
          />
        </div>
      )
    } else {
      return (
        <div>
          <Header 
            switchCardCat={this.switchCardCat}
          />
          <Content 
            cardCategories={this.state.data[this.state.cardCategory]}
            categoryName={this.state.cardCategory}
          />
        </div>
      )
    }
  }
}

export default App;
