import React from 'react';
import EnList from './EnList';
import {  withRouter } from "react-router-dom"; 
 
const Homework = (props) =>{
  return(

      <EnList urlParams={props.match.params || {id:1}}/>

  )
}
 
export default withRouter(Homework)