import * as Types from "./ActionTypes";

const requestDog = () => {
  return { 
    type: Types.REQUEST_DOG 
  }
};

const requestDogSuccess = (data) => {
  return { 
    type: Types.REQUEST_DOG_SUCCEEDED, 
    payload: data.message 
  }
};

const requestDogError = () => {
  return { 
    type: Types.REQUEST_DOG_FAILED 
  }
};

const fetchDog = () => {
  return (dispatch) => {
    dispatch(requestDog());
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        data => dispatch(requestDogSuccess(data)),
        err => dispatch(requestDogError())
      );
  }
};
  
  export default {
    requestDog,
    requestDogSuccess,  
    requestDogError,
    fetchDog,
    Types    
  };