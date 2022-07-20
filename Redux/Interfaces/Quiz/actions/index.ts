import { QUIZ_TYPE } from "../../../Types/Quiz/quiz";
import { HeightWeight } from "../index";
interface AddGoal {
  type: QUIZ_TYPE.QUIZ_GOAL;
  payload: string;
}
interface AddInterest {
  type: QUIZ_TYPE.QUIZ_INTEREST;
  payload: string;
}
interface AddBodyType {
  type: QUIZ_TYPE.QUIZ_BODY_TYPE;
  payload: string;
}
interface AddWeak {
  type: QUIZ_TYPE.QUIZ_WEAK;
  payload: string[];
}
interface AddHeightWeight {
  type: QUIZ_TYPE.QUIZ_HEIGHT_WEIGHT;
  payload: HeightWeight;
}
interface AddLevel {
  type: QUIZ_TYPE.QUIZ_LEVEL;
  payload: number;
}

export type Action =
  | AddGoal
  | AddInterest
  | AddBodyType
  | AddWeak
  | AddHeightWeight
  | AddLevel;
