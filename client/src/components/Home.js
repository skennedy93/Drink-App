import React, { Component } from 'react'
import styled from 'styled-components'
import Drink from './Drink'

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
        <Container>
        {this.props.drinks.map(drink => (
          <Drink
          key = {drink.idDrink}
          id={drink.idDrink}
          title = {drink.strDrink}
          image = {drink.strDrinkThumb}/>
        ))}
        </Container>
      )
    }
  }
  
  