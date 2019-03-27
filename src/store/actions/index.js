
export function listRequest(step){

    return {
  
      type:'LIST_REQUEST',
      payload:{
  
        request:{
            method: 'get', 
            url:'./homework'+step+'.csv',
            onComplete: () => { console.log('complete') },
            onSuccess: () => { console.log('success') },
            onError: () => {console.log('error')},
        },
        step:step
  
      }
      
    }
  
}
/*
import axios from 'axios';
export const listRequest = step => {
  return async dispatch => {
    const request = axios.get('./homework'+step+'.csv');
    try {
      if (response && response.ok) {
        await dispatch({
          type: 'LIST_REQUEST',
          payload: request
        })
      } 
    }catch(err) {
      await dispatch({
        type: 'LIST_REQUEST',
        payload: err.toString()
      })
    }
  }
}


*/

export function suffle(num){
  return{
    type:'SUFFLE',
    payload:{
      num:num

    }
  }
}


export function addCheck(data){
  return{
    type:'ADD_CHECKED',
    payload:{
      
      data:data

    }
  }
}
export function removeCheck(data){
  return{
    type:'REMOVE_CHECKED',
    payload:{
      
      data:data

    }
  }
}

