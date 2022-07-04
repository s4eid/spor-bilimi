import React from "react";
import program from "./program.module.scss";
import Header from "./Header/Header";
import By from "./By/By";
import YouGet from "./YouGet/YouGet";
import Plans from "./Plans/Plans";
import { planItems } from "../../data/plans.data";

const ProgramPage = () => {
  return (
    <div className={program.mainContainer}>
      <Header />
      <By />
      <YouGet />
      <div className={program.planC}>
        {planItems.map((plan, index) => (
          <div className={program.planHolder} key={index}>
            <Plans
              name={plan.name}
              price={plan.price}
              option_1={plan.option_1}
              option_2={plan.option_2}
              option_3={plan.option_3}
              option_4={plan.option_4}
              option_5={plan.option_5}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramPage;
