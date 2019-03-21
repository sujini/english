
import { combineReducers } from 'redux'
const getRand = (_ary,_len)=>{
	let num = Math.floor(Math.random() * _len)	
	if(_ary.indexOf(num) !== -1) {
		return getRand(_ary,_len)
    }else{
		return num;
    }
}
    
const shuffleAry = (_num,_len)=>{
  var ary=[];
    for (var j=0; j<_num; j++) {
        var randomNum = getRand(ary,_len);
        ary.push(randomNum);
        
    }  
    return ary;
}
const initState = {
  
  isChecked:[]
}

const enlist = (state = initState, action) => {
  switch (action.type){

    case 'LIST_REQUEST':

      console.log('LIST_REQUEST ');
      return state
    case 'LIST_REQUEST_SUCCESS':
      console.log('LIST_REQUEST_SUCCESS',state);

      let ary = action.payload.data.split(/\r?\n|\r/);

      let reformattedArray = ary.map(function(obj,i){ 
      
        var aryText = obj.split('$');
    
        var rObj = {};
        rObj.kr = aryText[0];
        rObj.en = aryText[1];
        //rObj.key = step+'_'+i;
        rObj.isChecked = state.isChecked.indexOf(rObj.key)>-1;
        return rObj;
     });

      return {     
        ...state,
        pending: false,
        data: action.payload.data,
        num:undefined
      };
    case 'SUFFLE':
      let newAry = state.data.split(/\r?\n|\r/);
      let newNumAry = shuffleAry(action.payload.num,newAry.length)
      console.log('SUFFLE',state);
      return {
        ...state,
        pending: false,
        num: action.payload.num,
        numAry:newNumAry
      };
    case 'ADD_CHECKED':
      let newChecked = [...state.isChecked,action.payload.data];
      return {
        ...state,
        pending: false,
        isChecked:newChecked
      };
      case 'REMOVE_CHECKED':
      let newPosts2 = state.isChecked.filter(chk=>{return chk!==action.payload.data})
      return {
        ...state,
        pending: false,
        isChecked:newPosts2
      };
    default:
      return state;

  }

}

const rootReducer = combineReducers({
  enlist,
})

export default rootReducer
