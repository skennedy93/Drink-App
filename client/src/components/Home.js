import React, { Component } from 'react'
import styled from 'styled-components'
import Drink from './Drink'
import Navbar from './Navbar';

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 40px;
`
// const Home = props =>{

//   return (
//             <Container>
//             {props.drinks.map(drink => (
//               <Drink
//               key = {drink.idDrink}
//               id={drink.idDrink}
//               title = {drink.strDrink}
//               image = {drink.strDrinkThumb}/>
//             ))}
//             </Container>
//   );
//   };
  // export default Home;

  
    // signOutHandler = () => {
    //     localStorage.removeItem('jwt'); 
    //     this.props.history.push('/'); 
    // }

  export default class Home extends Component {
    constructor(props) {
      super(props);
        this.state = {

      }
    }

    componentDidMount = () => {
      const token = localStorage.getItem('jwt'); 

      console.log("token",token)
      if(token === null){
        this.props.history.push('/login'); 
      }
    }

    render() {
      return (
        <>
        <Navbar/>
        <Container> 

        {this.props.drinks.map(drink => (
          <Drink
          key = {drink.idDrink}
          id={drink.idDrink}
          title = {drink.strDrink}
          image = {drink.strDrinkThumb}/>
        ))}
        </Container>
        </>
      )
    }
  }
  
  