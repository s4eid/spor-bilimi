import React, { ReactElement } from "react";
import QuizMain from "../../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../../_app";
import QuizPage from "../../../components/Quiz/QuizPage";
import { quizDataBodyType } from "../../../data/quiz.data";

const BodyType: NextPageWithLayout = () => {
  return (
    <QuizPage
      nextPath="/"
      question="What Is Your Body Type"
      quizData={quizDataBodyType}
    />
  );
};
BodyType.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default BodyType;
