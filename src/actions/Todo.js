import * as Types from "./ActionTypes";

const createItem = task => ({
    type: Types.CREATE_ITEM,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  export default {
    createItem,
    deleteItem,   
    Types    
  };