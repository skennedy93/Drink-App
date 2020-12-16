import React, { Component } from 'react';
import axios from 'axios';

class SignupPage extends React.Component{
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
        const userProfile = {
            username: this.state.username, 
            password: this.state.password, 
        }
        axios.post("http://localhost:4400/user/register", userProfile ).then(response => {
            this.setState({
                username: "", 
                password: "", 
            })
            const token = response.data.token; 
            localStorage.setItem('jwt', token); 
            this.props.history.push('/home'); 
        }).catch(err => {
            console.log(err); 
        })
    }

    render(){
        return(
            <div onSubmit = {this.onSubmitHandler} className = 'signup'>
                <form>
                    <input type = "text" placeholder = "Username" onChange = {this.onInputChangeHandler} value = {this.state.username} name = "username" />
                    <input type = "password" placeholder = "Password" onChange = {this.onInputChangeHandler} value = {this.state.password} name = "password" />
                    <button type = "submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignupPage; 