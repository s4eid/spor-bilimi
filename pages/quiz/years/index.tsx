import React, { ReactElement } from "react";
import YearsPage from "../../../components/Quiz/Years/YearsPage";
import QuizMain from "../../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../../_app";

const Years: NextPageWithLayout = () => {
  return <YearsPage />;
};
Years.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default Years;
