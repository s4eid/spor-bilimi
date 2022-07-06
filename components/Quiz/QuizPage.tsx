import Image from "next/image";
import React from "react";
import quiz from "./quiz.module.scss";
import { quizDataGoal } from "../../data/quiz.data";
import { useRouter } from "next/router";

interface quizData {
  img: string;
  name: string;
  value: string;
}

interface Props {
  quizData: quizData[];
  nextPath: string;
  question: string;
}

const QuizPage = ({ quizData, nextPath, question }: Props) => {
  const router = useRouter();
  return (
    <div className={quiz.mainContainer}>
      <div className={quiz.quizContainer}>
        <h2>{question}</h2>
        {quizData.map((q, index) => (
          <label
            className={quiz.holder}
            key={index}
            onClick={() => router.push(`/quiz/${nextPath}`)}
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
