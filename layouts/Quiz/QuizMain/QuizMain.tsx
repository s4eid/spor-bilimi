import React from "react";
import quizMain from "./quizMain.module.scss";
type Props = {
  children: JSX.Element;
};
const QuizMain = ({ children }: Props) => {
  return (
    <div className={quizMain.mainC}>
      {/* <p>fdfsdjfdskfj</p> */}
      {children}
    </div>
  );
};

export default QuizMain;
