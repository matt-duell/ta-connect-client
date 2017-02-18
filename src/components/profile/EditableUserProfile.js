import React, {Component} from 'react';

class EditableUserProfile extends Component{

  constructor(props){
    super(props);

    this.state = {
      firstName:'',
      lastName:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const name = target.name;
    const value = target.value;

    var newState = {};
    newState[name]=value;
    this.setState(newState);
  }

  handleSubmit(event){
    console.log('handle submit yo');
    this.props.submit({
      firstName:this.state.firstName,
      lastName:this.state.lastName
    })
  }

  render(){
    if(this.props.user){
      return(
        <div>
          <div>FirstName</div><input type='text' name="firstName" value={this.state.firstName} onChange={this.handleInputChange}/>
          <div>Last Name</div><input type='text' name="lastName" value={this.state.lastName} onChange={this.handleInputChange}/>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      );
    }
    else{
      return (<div></div>);
    }
  }

}


export default EditableUserProfile