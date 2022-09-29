import { NAVIGATION } from "../actions/types";

const initialState = {
  states: {
    name: "Home",
  },
};
export default function dashboard(state = initialState, action) {
  switch (action.type) {
    case NAVIGATION:
      return {
        ...state,
        states: action.payload,
      };
    default:
      return state;
  }
}
