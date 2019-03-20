
import { combineReducers } from 'redux'

const initState = {
  
  isChecked:[]
}

const enlist = (state = initState, action) => {
  switch (action.type){

    case 'LIST_REQUEST':

      console.log('LIST_REQUEST ');
      return state
    case 'LIST_REQUEST_SUCCESS':
      console.log('LIST_REQUEST_SUCCESS');
      return {     
        ...state,
        pending: false,
        data: action.payload.data,
        num:undefined
      };
    case 'SUFFLE':
      console.log('SUFFLE');
      return {
        ...state,
        pending: false,
        num: action.payload.num
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
