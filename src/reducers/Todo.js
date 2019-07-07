import ACTIONS from "../actions/Todo";
import * as utils from '../utils';

const defaultState = {
  items: [],  
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {      
      let newState = utils.deepClone(state);
      newState.items.push({ id: state.items.length + 1, description: action.payload });
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {    
      let newState = utils.deepClone(state); 
      let index = newState.items.findIndex(item => item.id === action.payload);
      newState.items.splice(index, 1); 
      return newState;
    }
    
    default:
      return state;
  }
};

export default todoReducer;