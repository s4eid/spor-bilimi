import React from "react";
import by from "./by.module.scss";
import Avatar from "@mui/material/Avatar";
import { Trainer } from "../../interfaces/program.interface";

const By = ({ first_name, image, last_name }: Trainer) => {
  return (
    <div className={by.container}>
      <div className={by.holder}>
        {/* <div className={by.profile}> */}
        <Avatar alt="Faeid noormohammad" src={image} />
        {/* </div> */}
        {/* <p>
          By {first_name} {last_name}
        </p> */}
        <p>
          Hareket ve Antrenman Bilimleri Uzmanı Faruk Aksan Doç Dr. Okan
          Mi̇çooğullari
        </p>
        <Avatar alt="Oaeid noormohammad" src={image} />
      </div>
    </div>
  );
};

export default By;
