import { combineReducers } from "redux";
import { user } from "./User/user";

const rootReducer = combineReducers({
  user,
});
export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
