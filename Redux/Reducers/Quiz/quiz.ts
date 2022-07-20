import { QUIZ_TYPE } from "../../Types/Quiz/quiz";
import { Action } from "../../Interfaces/Quiz/actions/index";

const inisialState = {
  goal: null,
  interset_body: null,
  body_type: null,
  hW: {
    height: null,
    weight: null,
    target_weight: null,
    age: null,
  },
  weak: null,
  level: null,
};

export const quiz = (state = inisialState, action: Action) => {
  switch (action.type) {
    case QUIZ_TYPE.QUIZ_GOAL:
      return {
        ...state,
        goal: action.payload,
      };
    case QUIZ_TYPE.QUIZ_INTEREST:
      return {
        ...state,
        interset_body: action.payload,
      };
    case QUIZ_TYPE.QUIZ_BODY_TYPE:
      return {
        ...state,
        body_type: action.payload,
      };
    case QUIZ_TYPE.QUIZ_WEAK:
      return {
        ...state,
        weak: action.payload,
      };
    case QUIZ_TYPE.QUIZ_HEIGHT_WEIGHT:
      return {
        ...state,
        hW: action.payload,
      };
    case QUIZ_TYPE.QUIZ_LEVEL:
      return {
        ...state,
        level: action.payload,
      };
    // case USER_TYPE.USER_LOGOUT_TYPE:

    //   return action.payload;
    default:
      return state;
  }
};
