import types from "../actions/actionsTypes";

const { filter } = types;

const filterReducer = (state = "", action) => {
  const { type, payload } = action;
  switch (type) {
    case filter:
      return payload;
    default:
      return state;
  }
}

export default filterReducer