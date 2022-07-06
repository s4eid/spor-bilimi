import React from "react";
import quizNav from "./quizNav.module.scss";
import { useRouter } from "next/router";

interface Props {
  children: JSX.Element;
}

const QuizNav = ({ children }: Props) => {
  const width = 10;
  const router = useRouter();
  // const path = "/quiz/k";
  const path = router.route;
  console.log(path.split("/"));
  console.log(router.route);
  return (
    <>
      <div className={quizNav.mainC}>
        <div className={quizNav.logoC}>
          <h1>S B</h1>
        </div>
        <div className={quizNav.barC}>
          <p>{width}%</p>
          <div className={quizNav.barHolder}>
            <div className={quizNav.bar} style={{ width: `${width}%` }}></div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default QuizNav;
