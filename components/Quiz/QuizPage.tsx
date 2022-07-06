import Image from "next/image";
import React from "react";
import quiz from "./quiz.module.scss";
import { quizDataGoal } from "../../data/quiz.data";
import { useRouter } from "next/router";

const QuizPage = () => {
  const router = useRouter();
  return (
    <div className={quiz.mainContainer}>
      <div className={quiz.quizContainer}>
        <h2>What Is Your Goal?</h2>
        {quizDataGoal.map((q, index) => (
          <label
            className={quiz.holder}
            key={index}
            onClick={() => router.push("/quiz/goal")}
          >
            <p>{q.name}</p>
            <div className={quiz.imageHolder}>
              <Image src={q.img} layout="fill" />
            </div>
            <input type={"radio"} value={q.value} />
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
