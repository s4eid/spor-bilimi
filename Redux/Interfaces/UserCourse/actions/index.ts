import { USER_COURSE_TYPE } from "../../../Types/UserCourse/userCourse";
import { UserAddress, UserCard, UserCourse } from "../index";
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

export type Action = AddUserCourse | AddUserAddress | AddUserPayment;
