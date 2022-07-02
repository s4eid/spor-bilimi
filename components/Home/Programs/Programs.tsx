import Image from "next/image";
import React from "react";
import programs from "./programs.module.scss";

const Programs = () => {
  return (
    <div className={programs.mainC}>
      <h2>Main Programs</h2>
      <div className={programs.holderC}>
        <div className={programs.program}>
          <Image src="/programB.png" layout="fill" />
        </div>
        <div className={programs.program}>
          <Image src="/programB.png" layout="fill" />
        </div>
        <div className={programs.program}>
          <Image src="/programB.png" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Programs;
