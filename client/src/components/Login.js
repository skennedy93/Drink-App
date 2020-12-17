import React from 'react';
import axios from 'axios';
import styled from 'styled-components'

const Form = styled.form`
position: relative;
z-index: 1;
background: #FFFFFF;
max-width: 360px;
margin: 0 auto 100px;
padding: 45px;
text-align: center;
`
const Container = styled.div`
padding-top: 10%
`
const Input = styled.input`
font-family: "Roboto", sans-serif;
outline: 0;
background: #f2f2f2;
width: 100%;
border: 0;
margin: 0 0 15px;
padding: 15px;
box-sizing: border-box;
font-size: 14px;
`
const Submit = styled.h2`
font-family: "Roboto", sans-serif;
text-transform: uppercase;
outline: 0;
background: #4CAF50;
border: 0;
padding: 15px;
color: #FFFFFF;
font-size: 14px;
-webkit-transition: all 0.3 ease;
transition: all 0.3 ease;
cursor: pointer;
`
const BottomText = styled.h2`
margin: 15px 0 0;
color: #b3b3b3;
font-size: 12px;
`


class Login extends React.Component{
    constructor(){
        super(); 
        this.state = {
            username: '', 
            password: '', 
        }
    }

    onInputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = event => {
        event.preventDefault(); 
        const userLogin = {
            username: this.state.username, 
            password: this.state.password, 
        }
        axios.post("http://localhost:4400/user/login", userLogin).then(response => {
            this.setState({
                username: "", 
                password: "", 
            })
            const token = response.data.token; 
            localStorage.setItem('jwt', token); 
            this.props.history.push('/home');  // navigates to the users route when successfully logged in
        }).catch(err => {
            console.log(err); 
        })
    }

    render(){
        return(
            <Container>
            <div onSubmit = {this.onSubmitHandler} className = 'login'>
                <Form>
                    <h1>Login</h1>
                    <Input
                        type = "text"
                        placeholder = "Username" 
                        onChange = {this.onInputChangeHandler}
                        value = {this.state.username} 
                        name = "username" 
                     />
                    <Input
                        type = "password"
                        placeholder = "Password"
                        onChange = {this.onInputChangeHandler}
                        value = {this.state.password}
                        name = "password" />
                    <Submit type = "submit">Login</Submit>
                    <BottomText>Don't have an account yet? <a href="/">Register</a></BottomText>
                </Form>
            </div>
            </Container>
        )
    }
}
export default Login; 