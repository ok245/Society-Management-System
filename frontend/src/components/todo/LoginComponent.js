import React, { Component,useState } from 'react';
import './Navbar.css'
import AuthenticationService from '../../service/AuthenticationService';
import FlatownerServices from '../../service/FlatownerServices';

export default class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      authenticated: false,
      login: false,
    };
    //bind methods
    this.updateValues = this.updateValues.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  updateValues(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  authEmail(event){
    this.setState({ login: true });
    FlatownerServices.getFlatowner(this.state.user)
    .then((response) => {
      console.log('auth done',response);
      AuthenticationService.storeEmail(this.state.user);
    }).catch((error) => {
      console.log('auth failed ', error.message);
    });
  }

  handleLogin(event) {
    this.setState({ login: true });
    AuthenticationService.authenticateUser(this.state.user, this.state.pwd)
      .then((response) => {
        console.log('auth success', response);
        AuthenticationService.storeUserDetails(
          this.state.user,
          response.data.jwt
        );
        console.log(response.data.roles);
        if(response.data.roles.roleName === "ROLE_ADMIN"){
          this.props.history.push(`/Admin`);
        } else if(response.data.roles.roleName === "ROLE_FLATOWNER"){
          this.props.history.push(`/flatowner`);
        } else{
          this.props.history.push(`/worker`);
        }
      })
      .catch((error) => {
        console.log('auth failed ', error.message);
      });
  }

  render() {
    return (
      <> 
<br/>
       <div className='container'>
        <div className='row'>
          <div className='style'>
            <div className='image'>
          <h2 className='title'>Login</h2>
          {this.state.login && this.state.authenticated && (
            <div>Login Successful</div>
          )}
          {this.state.login && !this.state.authenticated && (
            <div className='alert alert-warning'>Invalid Login</div>
          )}
          <div className='form-group'>
          Email :{' '}
          <input
            type='text'
            name='user'
            value={this.state.user}
            onChange={this.updateValues}
            className='form-control' autoFocus
          autoComplete="off" placeholder='Enter Your Email' required></input><br/><br/></div>
         <div className='form-group'>
          Password :{' '}
          <input
            type='password'
            name='pwd'
            value={this.state.pwd}
            onChange={this.updateValues}
            className='form-control' autoFocus
            autoComplete="off" placeholder='Enter Your Password' required></input><br/><br/></div>
         <div className='form-group'>
          <button className='btn btn-lg btn-success btn-block' onClick={this.handleLogin}>
            Login
          </button>
          </div>
          </div>
          </div>
        </div>
        </div>
      </>
      
    );
  }
}
