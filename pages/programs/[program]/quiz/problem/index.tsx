import React, { ReactElement } from "react";
import QuizMain from "../../../../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../../../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../../../../_app";
import QuizPage from "../../../../../components/Quiz/QuizPage";
import { quizDataProblems } from "../../../../../data/quiz.data";

const Problem: NextPageWithLayout = () => {
  return (
    <QuizPage
      nextPath="height-weight"
      question="Zayıf Alanlarınız??"
      quizData={quizDataProblems}
    />
  );
};
Problem.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default Problem;
