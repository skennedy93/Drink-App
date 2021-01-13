import React, { Component } from 'react'
import styled from 'styled-components'
import Home from "./components/Home";
import Favorites from "./components/Favorites"
import {
  Route,
} from "react-router-dom";
import LoginPage from './components/Login';
import DrinkInfo from './components/DrinkInfo';
import SignupPage from './components/Registration';

const Container = styled.div`
font-family: Tahoma, Geneva, sans-serif;
width:100%;
background-color: #f7f7f7;
`

export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        error: null,
        drinks: [],
        favorites:[],
      };
    }
  
    addFavorite = favorite => {
      
        if(this.state.favorites.includes(favorite) === false){
          this.setState({
            favorites: [...this.state.favorites, favorite]
          });
        }
      
      console.log(this.state.favorites)
    };

  componentDidMount() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              drinks: result.drinks
            });
            console.log(result)
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
        
    }


  render() {

      return (
      <Container>
            <Route exact path='/' component={SignupPage}/>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/home' render={props => <Home {...props}
            drinks={this.state.drinks}/>}
            />
            <Route path="/drink/:id" render={props => <DrinkInfo {...props}
            drinks={this.state.drinks}
            favorites={this.state.favorites}
            addFavorite={this.addFavorite}
            />}
            />
            <Route path='/favorites' render={props => <Favorites {...props}
            drinks={this.state.drinks}
            favorites={this.state.favorites}/>}
            />
      </Container>
      )
  }
}
