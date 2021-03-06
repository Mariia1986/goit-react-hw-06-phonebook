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
import logger from "redux-logger";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const contactsPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

const contactsReducers = combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducers),
});

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export default { store, persistor };
