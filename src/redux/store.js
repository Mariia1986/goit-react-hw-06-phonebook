// ===========Redux===============
// import { createStore, combineReducers } from "redux";
// import filterReducer from "./reducers/filterReducer";
// import contactsReducer from "./reducers/contactsReducer";

// const contactsReducers=combineReducers({
//     items: contactsReducer,
//     filter: filterReducer,
// })

// const rootReducer = combineReducers({
//   contacts:contactsReducers
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// ===========Redux Toolkit===============
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import filterReducer from "./reducers/filterReducer";
import contactsReducer from "./reducers/contactsReducer";
import logger from "redux-logger"


const contactsReducers=combineReducers({
    items: contactsReducer,
    filter: filterReducer,
})

const rootReducer = combineReducers({
  contacts:contactsReducers
});

const middleware=[... getDefaultMiddleware(), logger]

const store=configureStore({
    reducer:rootReducer,
    middleware,
    devTools: process.env.NODE_ENV ==="development"
})

export default store;
