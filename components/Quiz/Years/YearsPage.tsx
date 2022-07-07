import React, { useState } from "react";
import years from "./years.module.scss";
import Slider from "@mui/material/Slider";

const YearsPage = () => {
  const [valueYears, setValueYears] = useState<number>();
  function valuetext(value: number) {
    setValueYears(value);
    return "done";
  }
  return (
    <div className={years.mainContainer}>
      <div className={years.quizContainer}>
        <h2>What Is Your Current Level Of Fitness?</h2>
        <div className={years.rangeC}>
          <Slider
            aria-label="Temperature"
            defaultValue={0}
            color="secondary"
            size="medium"
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={5}
          />
        </div>
        <div className={years.holder}>
          {valueYears == 0 ? (
            <p>I Did Not Do Any Training At All 😞</p>
          ) : valueYears == 1 ? (
            <p>I Have Been Worked Less Then 1 Year 🍎</p>
          ) : valueYears == 2 ? (
            <p>I Have Been Worked More Then 1 Years 👊</p>
          ) : valueYears == 3 ? (
            <p>I Have Been Worked More Then 2 Years 🥉</p>
          ) : valueYears == 4 ? (
            <p>I Have Been Worked More Then 3 Years 🥈</p>
          ) : (
            <p>Professional Just Need To Get Better 🥇</p>
          )}
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default YearsPage;
