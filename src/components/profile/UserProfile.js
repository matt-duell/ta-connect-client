import React, {Component} from 'react';

class UserProfile extends Component{

  render(){

    return(
      <div>
        {this.props.user.given_name}
        {this.props.user.family_name}
      </div>
    );
  }

}


export default UserProfile