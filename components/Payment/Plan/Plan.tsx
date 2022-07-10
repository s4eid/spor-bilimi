import React from "react";
import plan from "./plan.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

interface Props {
  setProgress: (progress: number) => void;
}
const Plan = ({ setProgress }: Props) => {
  return (
    <div className={plan.mainC}>
      <FormControl className={plan.container}>
        <div className={plan.title}>
          <h2>Choose Your Plan</h2>
        </div>
        <RadioGroup
          //   row
          className={plan.plansHolder}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <label className={plan.holderO}>
            <FormControlLabel
              value="week"
              control={<Radio />}
              label="One Week Plan"
            />
            <p>1500 TL</p>
          </label>
          <label className={plan.holderT}>
            <FormControlLabel
              value="month"
              control={<Radio />}
              label="6 months Plan"
            />
            <div className={plan.price}>
              {/* <strike> */}
              <p>8500 TL</p>
              {/* </strike> */}
              <p>7000 TL</p>
            </div>
          </label>
          <label className={plan.holderE}>
            <FormControlLabel
              value="year"
              control={<Radio />}
              label="One Year Plan"
            />
            <div className={plan.price}>
              {/* <strike> */}
              <p>10500 TL</p>
              {/* </strike> */}
              <p>9500 TL</p>
            </div>
          </label>
        </RadioGroup>
        <button className={plan.planBtn} onClick={() => setProgress(1)}>
          Choose Plan
        </button>
      </FormControl>
    </div>
  );
};

export default Plan;
