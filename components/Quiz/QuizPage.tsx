import Image from "next/image";
import React, { useState } from "react";
import quiz from "./quiz.module.scss";
import { useRouter } from "next/router";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux/Actions/Quiz/index";
import { useDispatch } from "react-redux";

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
  const path = router.pathname.split("/");
  const programRoute = router.query.program;
  const [checked, setChecked] = useState<string[]>([]);
  const dispatch = useDispatch();
  const { addGoal, addInterest, addBodyType, addWeak } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const exist = checked.find((t) => t == e.target.value);
    if (exist) {
      const find = checked.filter((t) => t !== e.target.value);
      setChecked(find);
    } else {
      setChecked([...checked, e.target.value]);
    }
  };
  return (
    <div className={quiz.mainContainer}>
      <div className={quiz.quizContainer}>
        <h2>{question}</h2>

        {nextPath != "height-weight" ? (
          <>
            {quizData.map((q, index) => (
              <label
                htmlFor={q.value}
                className={quiz.holder}
                key={index}
                onClick={() => {
                  console.log(q.name);
                  if (path[path.length - 1] == "quiz") {
                    addGoal(q.value);
                  }
                  if (path[path.length - 1] == "target") {
                    addInterest(q.value);
                  }
                  if (path[path.length - 1] == "bodyType") {
                    addBodyType(q.value);
                  }
                  router.push(`/programs/${programRoute}/quiz/${nextPath}`);
                }}
              >
                <p>{q.name}</p>
                <div className={quiz.imageHolder}>
                  <Image src={q.img} layout="fill" />
                </div>
                <input
                  id={q.value}
                  name={q.value}
                  type={"radio"}
                  value={q.value}
                />
              </label>
            ))}
          </>
        ) : (
          <>
            {quizData.map((q, index) => (
              <label
                htmlFor={q.value}
                className={
                  checked.includes(q.value) ? quiz.holderActive : quiz.holder
                }
                key={index}
                // onClick={() => router.push(`/quiz/${nextPath}`)}
              >
                <p>{q.name}</p>
                <div className={quiz.imageHolder}>
                  <Image src={q.img} layout="fill" />
                </div>
                <input
                  id={q.value}
                  type={"checkbox"}
                  name={q.value}
                  value={q.value}
                  onChange={(e) => onSelect(e)}
                />
              </label>
            ))}
            <button
              onClick={() => {
                console.log(checked);
                addWeak(checked);
                router.push(`/programs/${programRoute}/quiz/${nextPath}`);
              }}
            >
              Devam
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
