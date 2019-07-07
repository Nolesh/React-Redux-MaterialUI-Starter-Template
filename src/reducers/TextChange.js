import ACTIONS from "../actions/TextChange";

const defaultState = {  
  text: "",
};

const textChangeReducer = (state = defaultState, action) => {
  switch (action.type) {    
    case ACTIONS.Types.CHANGE_TEXT: {           
        return {
          text: action.payload
        }       
      }

    default:
      return state;
  }
};

export default textChangeReducer;