import { combineReducers } from "redux";
import { user } from "./User/user";
import { quiz } from "./Quiz/quiz";

const rootReducer = combineReducers({
  user,
  quiz,
});
export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
