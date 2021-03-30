import { createStore, combineReducers } from "redux";
import filterReducer from "./reducers/filterReducer";
import contactsReducer from "./reducers/contactsReducer";

const contactsReducers=combineReducers({
    items: contactsReducer,
    filter: filterReducer,
})


const rootReducer = combineReducers({
  contacts:contactsReducers
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
