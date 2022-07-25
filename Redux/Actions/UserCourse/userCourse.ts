import { USER_COURSE_TYPE } from "../../Types/UserCourse/userCourse";
import { Dispatch } from "redux";
import { Action } from "../../Interfaces/UserCourse/actions/index";
import { UserAddress, UserCard, UserCourse } from "../../Interfaces/UserCourse";

export const addCourseInfos =
  (user_course: UserCourse) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: USER_COURSE_TYPE.ADD_PLAN_USER_COURSE,
        payload: user_course,
      });
    } catch (error) {
      // console.log(error);
    }
  };
export const addAddressInfos =
  (user_address: UserAddress) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: USER_COURSE_TYPE.ADD_ADDRESS_USER_COURSE,
        payload: user_address,
      });
    } catch (error) {
      // console.log(error);
    }
  };
export const addCardInfos =
  (user_card: UserCard) => async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: USER_COURSE_TYPE.ADD_PAYMENT_USER_COURSE,
        payload: user_card,
      });
    } catch (error) {
      // console.log(error);
    }
  };
