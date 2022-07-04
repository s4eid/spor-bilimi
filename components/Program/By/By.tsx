import React from "react";
import by from "./by.module.scss";

const By = () => {
  return (
    <div className={by.container}>
      <div className={by.holder}>
        <div className={by.profile}></div>
        <p>By Saeid noormohammad</p>
      </div>
    </div>
  );
};

export default By;
