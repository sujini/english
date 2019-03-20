export function listRequest(step){

    return {
  
      type:'LIST_REQUEST',
      payload:{
  
        request:{
            method: 'get', 
            type:'csv',
            url:'./homework'+step+'.csv',
            onComplete: () => { console.log('complete') },
            onSuccess: () => { console.log('success') },
            onError: () => {console.log('error')},
        }
  
      }
      
    }
  
}

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

