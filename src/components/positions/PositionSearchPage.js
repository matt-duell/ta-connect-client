import React, {Component} from 'react';

import ApplicationService from '../../services/application/ApplicationService';

import PositionList from './PositionList';

import  './positions.css';


class PositionSearchPage extends Component{

  constructor(props){
    super(props);

    this.state = {
      positions:[],
      showSubmittedSuccess:false
    };

    this.applyForPosition = this.applyForPosition.bind(this);
    this.onClickNotification = this.onClickNotification.bind(this);
  }

  componentDidMount(){

    console.log('PositionSearchPage didMount');

    //putting into state here because is not available in constructor
    var applicationService = new ApplicationService(); 
    this.setState({applicationService:applicationService});

    applicationService.getJobPositions(null).then(response =>{
      console.log('Did retrieve job positions');
      this.setState({
        positions: response.openPositions
      });
    });

  }


  // addPositionToCart(position){

    
  // }

  applyForPosition(position){

    console.log('PositionSearchPage applyForPosition');
    console.log('position = '+JSON.stringify(position));

    this.state.applicationService.submitApplication([position],null)
      .then(response => {
        this.setState({
          showSubmittedSuccess:true
        });
      });
  }

  onClickNotification(){
    this.setState({
      showSubmittedSuccess:false
    });
  }

  renderSubmittedSuccess(){
    if(this.state.showSubmittedSuccess){
      return <div className='successSubmit' onClick={this.onClickNotification} >Application Submitted successfully!</div>
    }
    return;
  }

  render(){
    return (
      <div>
        {this.renderSubmittedSuccess()}
        <PositionList positions={this.state.positions} applyForPosition={this.applyForPosition} />
      </div>
    );
  }


}

export default PositionSearchPage;