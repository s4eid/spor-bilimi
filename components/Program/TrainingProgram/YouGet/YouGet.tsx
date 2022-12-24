import React from "react";
import youGet from "./youGet.module.scss";

interface Props {
  learn: string[];
}

const YouGet = ({ learn }: Props) => {
  return (
    <div className={youGet.mainC}>
      <div className={youGet.title}>
        <h2>Bizimle çalışmaya başladıktan sonra neler kazanacaksın?</h2>
      </div>
      <div className={youGet.detailsC}>
        {learn.map((l, index) => (
          <div className={youGet.detail} key={index}>
            <p className={youGet.main}>{index + 1}</p>
            <p>{l} ✅</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouGet;
