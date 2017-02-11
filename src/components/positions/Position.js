import React, {Component} from 'react';
import './positions.css';

class Position extends Component{

  constructor(props){
    super(props);

    this.state ={
      showDetails:false
    };

    this.onDetailsClick = this.onDetailsClick.bind(this);
    this.onApplyClick = this.onApplyClick.bind(this);
  }

  onDetailsClick(event){    
    var newShowDetails = ! this.state.showDetails;
    this.setState({showDetails: newShowDetails});

    console.log('toggling showDetails');
  }

  onApplyClick(event){
    this.props.applyForPosition(this.props.position);
  }

  renderDetails(){
    if(this.state.showDetails){
      var position = this.props.position;
      return (
        <div>
          <p>{position.longDescription}</p>
          <p>{position.requiredSkills}</p>
        </div>
      );
    }
    return;
  }

  renderBasePosition(){
    var position = this.props.position;
    return(
      <div>
        <h2>{position.courseName}</h2>
        <p>{position.shortDescription}</p>
      </div>
    );
  }

  render(){
    return(
      <div className='jobPosition' >
        {this.renderBasePosition()}
        {this.renderDetails()}
        <button onClick={this.onDetailsClick}>Toggle Details</button>
        <button onClick={this.onApplyClick}>Apply For Position</button>
      </div>
    );
  }
  
}

export default Position;