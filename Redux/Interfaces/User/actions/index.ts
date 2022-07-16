import { USER_TYPE } from "../../../Types/User/user";
import { UserP } from "../index";
interface GetUserInfo {
  type: USER_TYPE.USER_INFO_TYPE;
  payload: UserP;
}

export type Action = GetUserInfo;
