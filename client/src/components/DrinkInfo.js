import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Box = styled.div`
width: 500px;
margin: 0 auto;
padding-bottom:10px
`
const Title = styled.h1`
text-align: center;
color: #4d4d4d;
font-size: 40px;
`
const Ingredient = styled.h2`
color: #4d4d4d;
font-size: 20px;
`
const Instructions = styled.h2`
color: #4d4d4d;
font-size: 24px;
`
const Favorite = styled.div`
cursor:pointer
`

export default class DrinkInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('jwt'); 

    console.log("token",token)
    if(token === null){
      this.props.history.push('/login'); 
    }
  }

  toggleFavorite = () => {
    const drink = this.props.drinks.find(drink => drink.idDrink.toString() === this.props.match.params.id);
    this.setState(state => ({ isFavorited: !state.isFavorited }))

    console.log("id",this.props.drinks)
    console.log("drunkkk",drink)
    console.log("favs",this.props.favorites)
  }
  getImageName = () => this.state.isFavorited ? 'favorited' : 'notFavorited'

  render() {

      const drink = this.props.drinks.find(drink => drink.idDrink.toString() === this.props.match.params.id);
      console.log(drink,"props")
      if(!drink ){
          return null
    }

    return (
      <>
    <Navbar/>
    <Box>
    <Title >
      {drink.strDrink}
    </Title>
    <Instructions>{drink.strInstructions}</Instructions>
    <Ingredient>{drink.strIngredient1}</Ingredient>
    <Ingredient>{drink.strIngredient2}</Ingredient>
    <Ingredient>{drink.strIngredient3}</Ingredient>
    <Ingredient>{drink.strIngredient4}</Ingredient>
    <Ingredient>{drink.strIngredient5}</Ingredient>
    <Ingredient>{drink.strIngredient6}</Ingredient>
    <Ingredient>{drink.strIngredient7}</Ingredient>
    <Ingredient>{drink.strIngredient8}</Ingredient>
    <Ingredient>{drink.strIngredient9}</Ingredient>
    <Ingredient>{drink.strIngredient10}</Ingredient>
    <Favorite>
        <img src={imagesPath[imageName]} alt="Favorite" onClick={this.toggleFavorite} width="100" height="100"/>
    </Favorite>
        <img src ={drink.strDrinkThumb} alt="Drink Pic" width="450" height="450"/>
  </Box>
  </>
    )
  }
}