import { combineReducers } from "redux";
import { user } from "./User/user";
import { quiz } from "./Quiz/quiz";
import { userCourse } from "./UserCourse/userCourse";

const rootReducer = combineReducers({
  user,
  quiz,
  userCourse,
});
export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
