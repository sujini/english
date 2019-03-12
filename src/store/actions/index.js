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

