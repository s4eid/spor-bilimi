import React from "react";
import quizNav from "./quizNav.module.scss";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
  children: JSX.Element;
}

const QuizNav = ({ children }: Props) => {
  const width = 20;
  const router = useRouter();
  // const path = "/quiz/k";
  // const path = router.route;
  // console.log(path.split("/"));
  // console.log(router.route);
  return (
    <>
      <div className={quizNav.mainC}>
        <div className={quizNav.logoC}>
          <Link href="/">
            <h1>S B</h1>
          </Link>
        </div>
        <div className={quizNav.barC}>
          <p>{width}%</p>
          {width > 10 ? (
            <div onClick={() => router.back()} className={quizNav.back}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
          ) : (
            <></>
          )}
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
