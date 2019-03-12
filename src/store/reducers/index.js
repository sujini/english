
import { combineReducers } from 'redux'

const enlist = (state = {}, action) => {
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
  
    default:
      return state;

  }

}

const rootReducer = combineReducers({
  enlist,
})

export default rootReducer
