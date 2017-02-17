import React, {Component} from 'react';
import UserProfile from './UserProfile';
import {getProfile} from '../../services/user/UserService';

class ProfilePage extends Component{

  constructor(props){
    super(props);

    this.state={
      user:{
        family_name:"Wayne",
        given_name:"Bruce"
      }
    };
  }
  componentDidMount(){
    getProfile().then((result) => {
      this.setState({
        user:{
          family_name:result.family_name,
          given_name:result.given_name
        }
      });
    });
  }

  render(){
    // const user = {
    //   family_name:"Wayne",
    //   given_name:"Bruce"
    // }
    return (
      <div>
        <h1>Profile</h1>
        <UserProfile user={this.state.user} />
      </div>
    );
  }

}

export default ProfilePage;