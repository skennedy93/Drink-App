import './App.css';
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
height: 100vh
`

export default class App extends Component {

  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        drinks: [],
        favorites:[],
        loading: true,
      };
    }
  
  componentDidMount() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              drinks: result.drinks
            });
            console.log(result)
          },
          (error) => {
            this.setState({
              isLoaded: true,
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

            {/* <Route render={props => <NavBar {...props}
            user={this.state.authUser}/>}/> */}
            <Route exact path='/home' render={props => <Home {...props}
            drinks={this.state.drinks}/>}
            />
            <Route path="/drink/:id" render={props => <DrinkInfo {...props}
            drinks={this.state.drinks}
            favorites={this.state.favorites}
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
