import React from "react";
import Hero from "./Hero/Hero";
import home from "./home.module.scss";
import LastArticles from "./LastArticles/LastArticles";
import Programs from "./Programs/Programs";
import Students from "./Students/Students";

const HomePage = () => {
  return (
    <div className={home.mainContainer}>
      <Hero />
      <Programs />
      <Students />
      <LastArticles />
    </div>
  );
};

export default HomePage;
