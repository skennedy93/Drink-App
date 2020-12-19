import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Nav = styled.div`
background-color: #222;
border-color: #080808;
`
const Contents = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Page = styled.h2`
padding: 20px;
font-size: 25px;
`
const Links = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
const Logout = styled.button`
cursor:pointer;
color: #fff;
background-color: #d9534f;
border-color: #d43f3a;
border: 1px solid transparent;
border-radius: 20px;
width: 80px;
height: 45px;
margin-right: 20px;
`
class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    signOutHandler = () => {
        localStorage.removeItem('jwt'); 
        this.props.history.push('/'); 
    }

    render() {
      return (
        <Nav>
            <Contents>
        <Links>
            <Page>
                <Link
                to="/home"
                style={{
                textDecoration: 'none',
                color: 'white',
                cursor:'pointer',
                }}
                >
                    Home
                </Link>
            </Page>
            <Page>
                <Link 
                to="/favorites"
                style={{
                    textDecoration: 'none',
                    color: 'white',
                    cursor:'pointer',
                }}
                >
                    Favorites
                </Link>
            </Page>
            </Links>
            <Logout onClick = {this.signOutHandler}>Logout</Logout>
            </Contents>
        </Nav>
      );
    }
  }
  export default Navbar;