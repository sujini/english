
import { combineReducers } from 'redux'

const initState = {
  
  checkedAry:[],
  checkedAction:false
}

const enlist = (state = initState, action) => {
  switch (action.type){

    case 'LIST_REQUEST':

      console.log('LIST_REQUEST ',action.payload.step);
      return {     
        ...state,
        checkedAction:false
      };
    case 'LIST_REQUEST_SUCCESS':
      console.log('LIST_REQUEST_SUCCESS',action.meta.previousAction.payload.step);

      let ary = action.payload.data.split(/\r?\n|\r/);

      let reformattedArray = ary.map(function(obj,i){ 
      
        var aryText = obj.split('$');
    
        var rObj = {};
        rObj.kr = aryText[0];
        rObj.en = aryText[1];
        rObj.id = action.meta.previousAction.payload.step+'_'+i;
        return rObj;
     });

      return {     
        ...state,
        pending: false,
        data2: reformattedArray,
        num:undefined,
        step:action.meta.previousAction.payload.step,
        checkedAction:false
      };
  
  
    default:
      return state;

  }

}


const checkList = (state = initState, action) => {
  switch (action.type){

    case 'ADD_CHECKED':
      let newChecked = [...state.checkedAry,action.payload.data];
      return {
        ...state,
        checkedAry:newChecked,
        checkedAction:true
      };
      case 'REMOVE_CHECKED':
      let newPosts2 = state.checkedAry.filter(chk=>{return chk!==action.payload.data})
      return {
        ...state,
        checkedAry:newPosts2,
        checkedAction:true
      };
    default:
      return state;

  }

}
const rootReducer = combineReducers({
  enlist,
  checkList
})

export default rootReducer
