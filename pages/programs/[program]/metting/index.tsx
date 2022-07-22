import React, { ReactElement } from "react";
import QuizMain from "../../../../layouts/Quiz/QuizMain/QuizMain";
import { NextPageWithLayout } from "../../../_app";
import MettingPage from "../../../../components/Metting/MettingPage";
import MettingNav from "../../../../layouts/Metting/MettingNav/MettingNav";

const Metting: NextPageWithLayout = () => {
  return <MettingPage />;
};
Metting.getLayout = function getLayout(page: ReactElement) {
  return (
    <QuizMain>
      <MettingNav>{page}</MettingNav>
    </QuizMain>
  );
};
export default Metting;
