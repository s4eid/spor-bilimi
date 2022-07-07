import React, { ReactElement } from "react";
import QuizMain from "../../../layouts/Quiz/QuizMain/QuizMain";
import QuizNav from "../../../layouts/Quiz/QuizNav/QuizNav";
import { NextPageWithLayout } from "../../_app";
import HW from "../../../components/Quiz/height_weight/HW";

const HeightWeight: NextPageWithLayout = () => {
  return <HW />;
};
HeightWeight.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <QuizNav>{page}</QuizNav>
    </QuizMain>
  );
};
export default HeightWeight;
