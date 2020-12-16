import React from "react";
// import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';

const Drink = ({title, image, id})=>{

return (
  <Link to={`/drink/${id}`}>
  <div>
  <h1 >
      {title}
  </h1>
  <div>
      <img src ={image} alt="Drink" width="270" height="270"/>
  </div>
</div>
</Link>
);
};
export default Drink;