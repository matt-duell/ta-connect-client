import React, {Component} from 'react';
import UserProfile from './UserProfile';
import EditableUserProfile from './EditableUserProfile';

import {getProfile,updateProfile} from '../../services/user/UserService';

class ProfilePage extends Component{

  constructor(props){
    super(props);

    this.state={
      user:undefined,
      editMode:false
    };

    this.enableEdit = this.enableEdit.bind(this);
    this.submitEdit = this.submitEdit.bind(this);
  }
  componentDidMount(){
    getProfile().then((data) => {
      this.setState({
        user:data
      });
    });
  }

  enableEdit(event){
    this.setState({
      editMode:true
    });
  }
  submitEdit(newProfile){
    console.log('submit edit yo');
    console.log(this.state.user);

    var theUser = this.state.user;
    theUser.family_name = newProfile.lastName;
    theUser.given_name = newProfile.firstName;
    theUser.id = this.state.user.id;

    updateProfile(theUser);


    this.setState({
      editMode:false,
      user:theUser
    });



  }

  renderUserProfile(){
    if(this.state.editMode){
      return <EditableUserProfile user={this.state.user} submit={this.submitEdit}/>
    }else{
      return <UserProfile user={this.state.user} enableEdit={this.enableEdit}/>
    }
  }

  render(){
    
    return (
      <div>
        <h1>Profile</h1>
        {this.renderUserProfile()}
      </div>
    );
  }

}

export default ProfilePage;