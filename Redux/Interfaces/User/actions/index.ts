import { USER_TYPE } from "../../../Types/User/user";
import { UserP } from "../index";
interface GetUserInfo {
  type: USER_TYPE.USER_INFO_TYPE;
  payload: UserP;
}
interface LogOutUser {
  type: USER_TYPE.USER_LOGOUT_TYPE;
  payload: any;
}
export type Action = GetUserInfo | LogOutUser;
