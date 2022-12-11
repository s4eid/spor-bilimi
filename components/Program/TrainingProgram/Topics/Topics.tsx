import {
  faBrain,
  faDumbbell,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import topic from "./topics.module.scss";

const Topics = () => {
  return (
    <div className={topic.mainC}>
      <div className={topic.holder}>
        <p>Zihinsel Antrenman</p>
        <FontAwesomeIcon icon={faBrain} />
      </div>
      <div className={topic.line}>
        <FontAwesomeIcon icon={faRepeat} />
      </div>
      <div className={topic.holder}>
        <p>Fiziksel Antrenman</p>
        <FontAwesomeIcon icon={faDumbbell} />
      </div>
    </div>
  );
};

export default Topics;
