import React, { ReactElement } from "react";
import QuizMain from "../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../_app";
import QuizPage from "../../components/Quiz/QuizPage";

const Quiz: NextPageWithLayout = () => {
  return <QuizPage />;
};
Quiz.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default Quiz;
