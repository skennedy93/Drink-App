import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Box = styled.div`
padding:5px;
`
const Title = styled.h1`
color:white;
position: absolute;
padding-left: 10px;
`
const Image = styled.div`
cursor:pointer;
border-radius: 15px;
overflow: hidden;
}
`

const Drink = ({title, image, id})=>{

return (
  <Link to={`/drink/${id}`}>
  <Box>
  <Title >
      {title}
  </Title>
  <Image>
      <img src ={image} alt="Drink" width="270" height="270"/>
  </Image>
</Box>
</Link>
);
};
export default Drink;