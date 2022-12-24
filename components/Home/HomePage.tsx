import React from "react";
import Hero from "./Hero/Hero";
import home from "./home.module.scss";
import { Course } from "./interfaces/home.interface";
import LastArticles from "./LastArticles/LastArticles";
import Programs from "./Programs/Programs";
import Students from "./Students/Students";

interface Props {
  courses: Course[];
}
const HomePage = ({ courses }: Props) => {
  return (
    <div className={home.mainContainer}>
      <Hero />
      <Programs courses={courses} />
      <Students />
      {/* <LastArticles /> */}
    </div>
  );
};

export default HomePage;
