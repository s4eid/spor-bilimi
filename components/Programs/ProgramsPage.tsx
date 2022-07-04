import React from "react";
import programs from "./programs.module.scss";
import Filter from "./Filter/Filter";
import { programsItem } from "../../data/programs";
import Program from "./Program/Program";

const ProgramsPage = () => {
  return (
    <div className={programs.container}>
      <div className={programs.mainC}>
        <div className={programs.title}>
          <h2>Programs</h2>
        </div>
        <Filter />
      </div>
      <div className={programs.programMainC}>
        {programsItem.map((p, index) => (
          <>
            {/* <div className={programs.programContainer} key={index}> */}
            <Program p={p} />
          </>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramsPage;
