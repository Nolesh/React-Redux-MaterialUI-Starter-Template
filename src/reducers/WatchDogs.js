import ACTIONS from "../actions/WatchDogs";

const defaultState = {
  url: '',
  loading: false,
  error: false 
};

const watchDogsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.REQUEST_DOG:
      return {
        url: '',
        loading: true,
        error: false       
      };
    case ACTIONS.Types.REQUEST_DOG_SUCCEEDED:
      return {
        url: action.payload,
        loading: false,
        error: false        
      };
    case ACTIONS.Types.REQUEST_DOG_FAILED:
      return {
        url: '',
        loading: false,
        error: true        
      };
    default:
      return state;
  }
};

export default watchDogsReducer;