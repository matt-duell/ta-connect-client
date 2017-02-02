import React, { Component } from 'react';
import Auth from './lib/auth';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("Hello");
    this.state = { loggedIn: Auth.loggedIn() };
  }

  setStateOnAuth = (loggedIn) => {
    return this.setState({loggedIn});
  }

  componentDidMount = () => {
    var _this = this;
    var instance = axios.create({baseURL: 'localhost:8080'});
    this.serverRequest =
      axios.post('http://localhost:8080/authenticate', 
          {email: "eddiequan@hotmail.com", password:"password"}).then((response) => console.log(response.data.auth_token)).catch((error) => console.log(error));
  }

  componentWillMount = () => {
    return Auth.onChange = this.setStateOnAuth;
  }

  handleClick = (e) => {
    Auth.login("eddiequan@hotmail.com", "password", this.setStateOnAuth);
    console.log('The link was clicked.');
    console.log(this.state.loggedIn);
  }

  render = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Hello?</button>
      </div>
    );
  }
}

export default App;
