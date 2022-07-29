import Image from "next/image";
import React from "react";
import { Quiz } from "../../../Redux/Interfaces/Quiz";
import { User } from "../../../Redux/Interfaces/User";
import pay from "./pay.module.scss";
import PayForm from "./PayForm/PayForm";

interface Props {
  user: User;
  quiz: Quiz;
  metting: number;
}

const Pay = ({ user, quiz, metting }: Props) => {
  return (
    <div className={pay.mainC}>
      <PayForm user={user} quiz={quiz} metting={metting} />
      <div className={pay.iyziC}>
        <div className={pay.iyzi}>
          <Image src="/iyzicoOde.svg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Pay;
