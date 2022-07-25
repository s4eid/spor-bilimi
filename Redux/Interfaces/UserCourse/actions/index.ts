import { USER_COURSE_TYPE } from "../../../Types/UserCourse/userCourse";
import { User } from "../../User";
import { UserAddress, UserCard, UserCourse } from "../index";
interface AddUserUser {
  type: USER_COURSE_TYPE.ADD_USER_USER_COURSE;
  payload: User;
}
interface AddUserCourse {
  type: USER_COURSE_TYPE.ADD_PLAN_USER_COURSE;
  payload: UserCourse;
}
interface AddUserAddress {
  type: USER_COURSE_TYPE.ADD_ADDRESS_USER_COURSE;
  payload: UserAddress;
}
interface AddUserPayment {
  type: USER_COURSE_TYPE.ADD_PAYMENT_USER_COURSE;
  payload: UserCard;
}

export type Action =
  | AddUserCourse
  | AddUserAddress
  | AddUserPayment
  | AddUserUser;
