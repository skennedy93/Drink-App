import React from 'react'
import styled from 'styled-components'
import Drink from './Drink'
import Navbar from './Navbar'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 40px;
`
const Favorites = props =>{

  return (
            <>
            <Navbar/>
            <Container>
            {props.favorites.map(drink => (
              <Drink
              key = {drink.idDrink}
              id={drink.idDrink}
              title = {drink.strDrink}
              image = {drink.strDrinkThumb}/>
            ))}
            </Container>
            </>
  );
  };
  export default Favorites;