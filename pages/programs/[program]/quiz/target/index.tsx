import React, { ReactElement } from "react";
import QuizMain from "../../../../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../../../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../../../../_app";
import QuizPage from "../../../../../components/Quiz/QuizPage";
import { quizDataTarget } from "../../../../../data/quiz.data";

const Target: NextPageWithLayout = () => {
  return (
    <QuizPage
      nextPath="bodyType"
      question="Choose The Body You Are Interest"
      quizData={quizDataTarget}
    />
  );
};
Target.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default Target;
