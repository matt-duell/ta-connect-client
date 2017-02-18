import React, {Component} from 'react';

class UserProfile extends Component{

  render(){
    if(this.props.user){
      return(
        <div>
          <div>FirstName</div><span>{this.props.user.given_name}</span>
          
          <div>Last Name</div><span>{this.props.user.family_name}</span>
          <button onClick={this.props.enableEdit}>Edit</button>
        </div>
      );
    }
    else{
      return (<div></div>);
    }
  }

}


export default UserProfile