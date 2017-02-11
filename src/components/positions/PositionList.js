import React, {Component} from 'react';
import Position from './Position';

class PositionList extends Component{

  renderNoOpenPositions(){
    return <h2>No Open Positions</h2>; 
  }

  hasPositions(){
    return this.props.positions && this.props.positions.length > 0;
  }

  renderPositions(){
    return this.props.positions.map( (position) => {
      return (
        <li key={position.jobID}>
          <Position position={position} applyForPosition={this.props.applyForPosition} />
        </li>
      );
    });
  }

  render(){
      
    if (this.hasPositions()){
      return (<ul>{this.renderPositions()}</ul>);
    }
    else{
      return this.renderNoOpenPositions();
    }
  }

}

export default PositionList;