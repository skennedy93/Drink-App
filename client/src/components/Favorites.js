import React, { Component } from 'react'
import styled from 'styled-components'
import Drink from './Drink'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding-top: 40px;
`
const Favorites = props =>{

  return (
            <Container>
            {props.favorites.map(drink => (
              <Drink
              key = {drink.idDrink}
              id={drink.idDrink}
              title = {drink.strDrink}
              image = {drink.strDrinkThumb}/>
            ))}
            </Container>
  );
  };
  export default Favorites;