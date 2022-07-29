import { USER_TYPE } from "../../Types/User/user";
import { Action } from "../../Interfaces/User/actions";

const inisialState = {
  email: null,
  user_id: null,
  first_name: null,
  last_name: null,
  loading: true,
  // exp: null,
};

export const user = (state = inisialState, action: Action) => {
  switch (action.type) {
    // case USER_TYPE.LOADING_OFF_USER:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    // case USER_TYPE.LOADING_ON_USER:
    //   return {
    //     ...state,
    //     loading: action.payload,
    //   };
    case USER_TYPE.USER_INFO_TYPE:
      return action.payload;
    case USER_TYPE.USER_LOGOUT_TYPE:
      return action.payload;
    // case USER_TYPE.USER_LOGOUT_TYPE:
    //   return action.payload;
    default:
      return state;
  }
};
