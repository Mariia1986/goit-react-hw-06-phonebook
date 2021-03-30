import types from "./actionsTypes";
import { v4 as uuidv4 } from "uuid";

const{add, deleteUsers, filter}=types

const addContact=(contactObj)=>{
    return{
        type:add,
        payload:{
            id:  uuidv4(),
            name:contactObj.name,
            number:contactObj.number,
        }
    }
}

const deleteContact=(id)=>{
    return{
        type:deleteUsers, 
        payload:id  
    }
}

const filterContacts=(value)=>{
    return{
        type:filter,
        payload:value,
    }

}

export default {addContact, deleteContact,filterContacts}