import {createReducer} from "@reduxjs/toolkit"
import actions from "../actions/userActions"
const{ filterContacts}=actions;
// ===========Redux===============
// const { filter } = types;

// const filterReducer = (state = "", action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case filter:
//       return payload;
//     default:
//       return state;
//   }
// }


// ===========Redux Toolkit===============

const filterReducer=createReducer("",{
  [filterContacts]:((_,{payload})=> {return payload})
})

export default filterReducer