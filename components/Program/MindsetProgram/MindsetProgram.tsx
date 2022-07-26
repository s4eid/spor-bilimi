import React from "react";
import { Course } from "../interfaces/program.interface";
import By from "./By/By";
import Details from "./Details/Details";
import Header from "./Header/Header";
import mindset from "./mindsetProgram.module.scss";
import Story from "./Story/Story";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import Questions from "./Questions/Questions";

interface Props {
  course: Course;
}
const MindsetProgram = ({ course }: Props) => {
  const router = useRouter();
  const route = router.query;
  return (
    <div className={mindset.mainContainer}>
      <Header name={course.name} image={course.image} />
      <By
        first_name={course.trainer.first_name}
        last_name={course.trainer.last_name}
        image={course.trainer.image}
      />
      <Details details={course.details} />
      <Story />
      <Questions />
      <Button
        onClick={() => {
          router.push(`/programs/${route.program}/metting`);
        }}
        color="primary"
        size="large"
        variant="contained"
      >
        Change Your Mind Now
      </Button>
    </div>
  );
};

export default MindsetProgram;
