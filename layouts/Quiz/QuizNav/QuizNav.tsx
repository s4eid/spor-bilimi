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
  const router = useRouter();
  const path = router.pathname.split("/");
  const last = path.length - 1;
  const lastPath = path[last];
  const width =
    lastPath == "quiz"
      ? 0
      : lastPath == "target"
      ? 15
      : lastPath == "bodyType"
      ? 30
      : lastPath == "problem"
      ? 40
      : lastPath == "height-weight"
      ? 60
      : 100;
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
          {width > 0 ? (
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
