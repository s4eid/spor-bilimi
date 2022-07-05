import {
  faBrain,
  faCarrot,
  faDumbbell,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import filter from "./filter.module.scss";

const Filter = () => {
  return (
    <div className={filter.mainContainer}>
      <div className={filter.holder}>
        <FontAwesomeIcon icon={faCarrot} />
      </div>
      <div className={filter.holder}>
        <FontAwesomeIcon icon={faBrain} />
      </div>
      <div className={filter.holder}>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
    </div>
  );
};

export default Filter;
