import { QUIZ_TYPE } from "../../Types/Quiz/quiz";
import { Dispatch } from "redux";
import { Action } from "../../Interfaces/Quiz/actions";
// import { Goal } from "../../Interfaces/Quiz";
import { State } from "../../Reducers/rootReducer";
// import { HeightWeight } from "../../Interfaces/Quiz";

export const addGoal =
  (goal: string) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({ type: QUIZ_TYPE.QUIZ_GOAL, payload: goal });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {
      // console.log(error);
    }
  };
export const addInterest =
  (interest: string) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({ type: QUIZ_TYPE.QUIZ_INTEREST, payload: interest });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {
      // console.log(error);
    }
  };
export const addBodyType =
  (body_type: string) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({ type: QUIZ_TYPE.QUIZ_BODY_TYPE, payload: body_type });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {
      // console.log(error);
    }
  };
export const addWeak =
  (weak: string[]) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      console.log(weak);
      dispatch({ type: QUIZ_TYPE.QUIZ_WEAK, payload: weak });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {
      // console.log(error);
    }
  };
export const addHeightWeight =
  (height?: number, weight?: number, target_weight?: number, age?: number) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({
        type: QUIZ_TYPE.QUIZ_HEIGHT_WEIGHT,
        payload: {
          height: height,
          weight: weight,
          target_weight: target_weight,
          age: age,
        },
      });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {}
  };
export const addLevel =
  (level: number) =>
  async (dispatch: Dispatch<Action>, getState: () => State) => {
    try {
      // dispatch({ type: USER_TYPE.LOADING_ON_USER, payload: true });
      dispatch({
        type: QUIZ_TYPE.QUIZ_LEVEL,
        payload: level,
      });
      const existData = getState().quiz;
      const existDataString = JSON.stringify(existData);
      localStorage.setItem("quiz", existDataString);
    } catch (error) {
      // console.log(error);
    }
  };
