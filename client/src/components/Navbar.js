import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
      return (
        <div>
            <div>

            <div>
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
            </div>
            <div>
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
            </div>

            </div>
        </div>
      );
    }
  }
  export default Navbar;