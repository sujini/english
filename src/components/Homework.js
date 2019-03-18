import React from 'react';
import EnList from './EnList';
 
const Homework = (props) =>{
  return(

      <EnList urlParams={props.match.params || {id:1}}/>

  )
}
 
export default Homework