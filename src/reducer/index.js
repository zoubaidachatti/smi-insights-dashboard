import { combineReducers } from "redux";

import navigateReducer from "./navigate";
export default combineReducers({
  navigate: navigateReducer,
});
