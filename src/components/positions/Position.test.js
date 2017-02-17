import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Position from './Position';



const position = {
  jobID:'csc148_fall_2017',
  courseName:'CSC148',
  courseLevel:'100',
  semester:'fall',
  year:'2017',
  shortDescription:'Some short description',
  longDescription:'A longer description of the course and what is entailed',
  requiredSkills:'Python, If Statements, Loops!, More Loops!',
  numberOfPositions:'300',
  classTimes:['Monday 08:00-10:00','Monday 17:00-20:00'],
  tutorialTimes:['Monday 11:00','Monday 21:00'],
};


it('displays the basic details by default',()=>{
  const tree = renderer.create(
    <Position position = {position} />
  ).toJSON();

  expect(tree).toMatchSnapshot();

});

xit('shows the expanded details when it is expanded',()=>{

  const component = shallow(
    <Position position = {position} />
  );

  component.find('button').simulate('click');


  // const component = renderer.create(
  //   <Position position = {position} />
  // );
  // let tree = component.toJSON();

  //before click
  // expect(tree).toMatchSnapshot();

  //after click
  // console.log(tree);
  // tree.props.onDetailsClick();
  // expect(tree).toMatchSnapshot();

});