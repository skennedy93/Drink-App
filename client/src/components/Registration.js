import React, { Component } from 'react';
import styled from 'styled-components'

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <form>
        <label>Email address</label>
        <input  
        type="email" 
        name="email" 
        placeholder="Enter email" 
        />
        <label>Password</label>
        <input  
        type="password" 
        name="password" 
        placeholder="Password" 
        />
      <div type="submit">Register</div>
      <div>Already registered? <a href="/">Log in</a></div>
    </form>
    );
  }
}
export default SignupPage;