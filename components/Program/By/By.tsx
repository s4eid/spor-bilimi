import React from "react";
import by from "./by.module.scss";
import Avatar from "@mui/material/Avatar";

const By = () => {
  return (
    <div className={by.container}>
      <div className={by.holder}>
        {/* <div className={by.profile}> */}
        <Avatar alt="saeid noormohammad" src="/person.webp" />
        {/* </div> */}
        <p>By Saeid noormohammad</p>
      </div>
    </div>
  );
};

export default By;
