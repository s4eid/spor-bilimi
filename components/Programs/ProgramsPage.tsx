import React from "react";
import programs from "./programs.module.scss";
import Filter from "./Filter/Filter";
import Program from "./Program/Program";
import Search from "../Blogs/Search/Search";
import { Course } from "./Interfaces/programs.interface";

interface Props {
  courses: Course[];
}
const changeBlog = (text: string) => {
  console.log(text);
};

const ProgramsPage = ({ courses }: Props) => {
  return (
    <div className={programs.container}>
      <div className={programs.mainC}>
        {/* <div className={programs.title}>
          <h2>Programs</h2>
        </div> */}
        <Filter />
        <Search changeBlog={changeBlog} />
      </div>
      <div className={programs.programMainC}>
        {courses.map((p, index) => (
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
