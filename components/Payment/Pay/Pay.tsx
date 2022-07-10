import Image from "next/image";
import React from "react";
import pay from "./pay.module.scss";
import PayForm from "./PayForm/PayForm";

const Pay = () => {
  return (
    <div className={pay.mainC}>
      <PayForm />
      <div className={pay.iyziC}>
        <div className={pay.iyzi}>
          <Image src="/iyzicoOde.svg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Pay;
