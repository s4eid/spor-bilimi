import React from "react";
import by from "./by.module.scss";
import Avatar from "@mui/material/Avatar";
import { Trainer } from "../../interfaces/program.interface";

const By = ({ first_name, image, last_name }: Trainer) => {
  return (
    <div className={by.container}>
      <div className={by.holder}>
        {/* <div className={by.profile}> */}
        <Avatar alt="saeid noormohammad" src={image} />
        {/* </div> */}
        <p>
          By {first_name} {last_name}
        </p>
      </div>
    </div>
  );
};

export default By;
