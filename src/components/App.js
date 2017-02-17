import React from 'react';
import { Link } from 'react-router'
import auth from '../lib/auth'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: auth.loggedIn()
    }
  }

  updateAuth = (loggedIn) => {
    this.setState({
      loggedIn
    })
  }

  componentWillMount = () => {
    auth.onChange = this.updateAuth
    auth.login()
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            {this.state.loggedIn ? (
              <Link to="/logout">Log out</Link>
            ) : (
              <Link to="/login">Sign in</Link>
            )}
          </li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/dashboard">Dashboard</Link> (authenticated)</li>
          <li><Link to="/positions">Open Positions</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        {this.props.children || <p>You are {!this.state.loggedIn && 'not'} logged in.</p>}
      </div>
    )
  }
}

export default App;
