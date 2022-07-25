import { combineReducers } from "redux";
import userReducer from "./userSlice";
const reducers = combineReducers({
  userReducer,
});

export default reducers;
