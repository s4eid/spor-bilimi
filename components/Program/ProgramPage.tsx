import React from "react";
import program from "./program.module.scss";
import { Course } from "./interfaces/program.interface";
import TrainingProgram from "./TrainingProgram/TrainingProgram";
import MindsetProgram from "./MindsetProgram/MindsetProgram";

interface Props {
  course: Course;
}

const ProgramPage = ({ course }: Props) => {
  return (
    <>
      {course.category == "fitness" ? (
        <TrainingProgram course={course} />
      ) : course.category == "mindset" ? (
        <MindsetProgram course={course} />
      ) : (
        <p>its not</p>
      )}
    </>
  );
};

export default ProgramPage;
