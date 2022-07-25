import { USER_COURSE_TYPE } from "../../Types/UserCourse/userCourse";
import { Action } from "../../Interfaces/UserCourse/actions/index";

const inisialState = {
  courseInfos: {
    id: null,
    name: null,
    category: null,
    time: null,
    price: null,
    plan_id: null,
  },
  addressInfos: {
    address: null,
    city: null,
    zip_code: null,
    phone_number: null,
  },
  cardInfos: {
    card_number: null,
    owner: null,
    cvv: null,
    expire_y: null,
    expire_m: null,
    threeD: null,
  },
  userInfos: {
    first_name: null,
    last_name: null,
    email: null,
  },
};

export const userCourse = (state = inisialState, action: Action) => {
  switch (action.type) {
    case USER_COURSE_TYPE.ADD_PLAN_USER_COURSE:
      return { ...state, courseInfos: action.payload };
    case USER_COURSE_TYPE.ADD_ADDRESS_USER_COURSE:
      return { ...state, addressInfos: action.payload };
    case USER_COURSE_TYPE.ADD_PAYMENT_USER_COURSE:
      return { ...state, cardInfos: action.payload };
    case USER_COURSE_TYPE.ADD_USER_USER_COURSE:
      return { ...state, userInfos: action.payload };
    default:
      return state;
  }
};
