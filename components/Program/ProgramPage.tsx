import React from "react";
import { Course } from "./interfaces/program.interface";
import TrainingProgram from "./TrainingProgram/TrainingProgram";

interface Props {
  course: Course;
}

const ProgramPage = ({ course }: Props) => {
  return <TrainingProgram course={course} />;
};

export default ProgramPage;
