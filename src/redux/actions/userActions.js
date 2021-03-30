import types from "./actionsTypes";
import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const { add, deleteUsers, filter } = types;
// ===========Redux===============
// const addContact=(contactObj)=>{
//     return{
//         type:add,
//         payload:{
//             id:  uuidv4(),
//             name:contactObj.name,
//             number:contactObj.number,
//         }
//     }
// }

// const deleteContact=(id)=>{
//     return{
//         type:deleteUsers,
//         payload:id
//     }
// }

// const filterContacts=(value)=>{
//     return{
//         type:filter,
//         payload:value,
//     }

// }
// ===========Redux Toolkit===============
const addContact = createAction(add, ({ id, name, number }) => {
  return {
    payload: {
      id: uuidv4(),
      name: name,
      number: number,
    },
  };
});

const deleteContact= createAction(deleteUsers)
const filterContacts=createAction(filter)


export default { addContact, deleteContact, filterContacts };
