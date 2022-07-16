import { USER_TYPE } from "../../Types/User/user";
import { getUser } from "../../../functions/User/index";
import { Dispatch } from "redux";
import { Action } from "../../Interfaces/User/actions";
import { UserP } from "../../Interfaces/User";

export const getUserInfo =
  (user: UserP) => async (dispatch: Dispatch<Action>) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({ type: USER_TYPE.USER_INFO_TYPE, payload: user });
      // dispatch({ type: USER_TYPE.LOADING_OFF_USER, payload: false });
    } catch (error) {
      // console.log(error);
    }
  };

// export const logoutUser = (router) => async (dispatch) => {
//   try {
//     signOut(router);
//     dispatch({ type: USER_TYPE.USER_LOGOUT_TYPE, payload: null });
//   } catch (error) {
//     // console.log(error);
//   }
// };
