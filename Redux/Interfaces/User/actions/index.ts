import { USER_COURSE_TYPE } from "../../../Types/UserCourse/userCourse";
import { UserP } from "../index";
interface GetUserInfo {
  type: USER_COURSE_TYPE.ADD_PLAN_USER_COURSE;
  payload: UserP;
}

export type Action = GetUserInfo;
