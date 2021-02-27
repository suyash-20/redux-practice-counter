import counterReduecer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReduecer,
  isLogged: loggedReducer,
});

export default rootReducer;
