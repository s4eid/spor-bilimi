import React from "react";
import youGet from "./youGet.module.scss";

const YouGet = () => {
  return (
    <div className={youGet.mainC}>
      <div className={youGet.title}>
        <h2>What You Will Learn</h2>
      </div>
      <div className={youGet.detailsC}>
        <div className={youGet.detail}>
          <p className={youGet.main}>1</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
        </div>
        <div className={youGet.detail}>
          <p className={youGet.main}>2</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
        </div>
        <div className={youGet.detail}>
          <p className={youGet.main}>3</p>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page
          </p>
        </div>
      </div>
    </div>
  );
};

export default YouGet;
