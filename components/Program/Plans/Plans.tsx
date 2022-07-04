import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import plans from "./plans.module.scss";

interface Props {
  name: string;
  price: number;
  option_1: string;
  option_2: string;
  option_3: string;
  option_4: string;
  option_5: string;
}

const Plans = ({
  name,
  price,
  option_1,
  option_2,
  option_3,
  option_4,
  option_5,
}: Props) => {
  return (
    <>
      <div className={plans.title}>
        <h2>{name}</h2>
      </div>
      <div className={plans.priceC}>
        <p className={plans.price}>{price}TL/</p>
        <p className={plans.time}>month</p>
      </div>
      <div className={plans.options}>
        <div className={plans.option}>
          <FontAwesomeIcon className={plans.icon} icon={faCircle} />
          <p>{option_1}</p>
        </div>
        <div className={plans.option}>
          <FontAwesomeIcon className={plans.icon} icon={faCircle} />
          <p>{option_2}</p>
        </div>
        <div className={plans.option}>
          <FontAwesomeIcon className={plans.icon} icon={faCircle} />
          <p>{option_3}</p>
        </div>
        <div className={plans.option}>
          <FontAwesomeIcon className={plans.icon} icon={faCircle} />
          <p>{option_4}</p>
        </div>
        <div className={plans.option}>
          <FontAwesomeIcon className={plans.icon} icon={faCircle} />
          <p>{option_5}</p>
        </div>
      </div>
      <div className={plans.enroll}>
        <button>Enroll</button>
      </div>
    </>
  );
};

export default Plans;
