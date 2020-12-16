  
import React, { Component } from 'react';
import axios from 'axios';

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
            <div onSubmit = {this.onSubmitHandler} className = 'login'>
                <form>
                    <input type = "text" placeholder = "Username" onChange = {this.onInputChangeHandler} value = {this.state.username} name = "username" />
                    <input type = "password" placeholder = "Password" onChange = {this.onInputChangeHandler} value = {this.state.password} name = "password" />
                    <button type = "submit">Login</button>
                </form>
            </div>
        )
    }
}
export default Login; 