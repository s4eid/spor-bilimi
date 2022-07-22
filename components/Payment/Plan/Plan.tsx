import React from "react";
import plan from "./plan.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Plan as PlanT } from "../interface/payment.interface";

interface Props {
  setProgress: (progress: number) => void;
  plans: PlanT[];
}
const Plan = ({ setProgress, plans }: Props) => {
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
          {plans.map((p, index) => (
            <label key={index} className={plan.holderO}>
              <FormControlLabel
                value={p.time}
                control={<Radio />}
                label={
                  p.time == "2ho"
                    ? "2 Hour Call"
                    : p.time == "1ho"
                    ? "1 Hour Call"
                    : p.time == "1y"
                    ? "1 Year Program"
                    : p.time == "1m"
                    ? "1 Month Program"
                    : "6 Month Program"
                }
              />
              <p>{p.price} TL</p>
            </label>
          ))}
        </RadioGroup>
        <button className={plan.planBtn} onClick={() => setProgress(1)}>
          Choose Plan
        </button>
      </FormControl>
    </div>
  );
};

export default Plan;
