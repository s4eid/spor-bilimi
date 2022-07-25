import React, { useState } from "react";
import plan from "./plan.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Plan as PlanT } from "../interface/payment.interface";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../Redux/Actions/UserCourse/index";
import { bindActionCreators } from "redux";

interface Props {
  setProgress: (progress: number) => void;
  plans: PlanT[];
  courseName: string;
  courseCategory: string;
  courseId: string;
}
const Plan = ({
  setProgress,
  plans,
  courseName,
  courseId,
  courseCategory,
}: Props) => {
  const [planS, setPlanS] = useState<string>();
  const [priceS, setPriceS] = useState<number>();
  const [planId, setPlanId] = useState<string>();
  const dispatch = useDispatch();
  const { addCourseInfos } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className={plan.mainC}>
      <FormControl className={plan.container}>
        <div className={plan.title}>
          <h2>Choose Your Plan</h2>
        </div>
        <RadioGroup
          onChange={(e) => {
            setPlanS(e.target.value);
            const price = plans.find((p) => p.time == e.target.value);
            setPriceS(price?.price);
            setPlanId(price?.plan_id);
          }}
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
                    : p.time == "3ho"
                    ? "3 Hour Call"
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
        <button
          type="submit"
          className={plan.planBtn}
          onClick={() => {
            if (planS) {
              let userCourse = {
                id: courseId,
                name: courseName,
                price: priceS,
                category: courseCategory,
                plan_id: planId,
              };
              addCourseInfos(userCourse);
              setProgress(1);
            }
          }}
        >
          Choose Plan
        </button>
      </FormControl>
    </div>
  );
};

export default Plan;
