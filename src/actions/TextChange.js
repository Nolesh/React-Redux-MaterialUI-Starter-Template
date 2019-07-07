import * as Types from "./ActionTypes";

const changeText = text => ({
    type: Types.CHANGE_TEXT,
    payload: text
});
  
export default {    
    changeText,
    Types    
};