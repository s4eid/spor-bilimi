import React, { useState } from "react";
import plan from "./plan.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// import { Plan as PlanT } from "../interface/payment.interface";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../../../Redux/Actions/UserCourse/index";
// import { bindActionCreators } from "redux";

interface Props {
  setProgress: (progress: number) => void;
  planSelected: string;
  setPlanSelected: (plan: string) => void;
  // plans: PlanT[];
  // courseName: string;
  // courseCategory: string;
  // courseId: string;
}
const Plan = ({
  setProgress,
  setPlanSelected,
}: // plans,
// courseName,
// courseId,
// courseCategory,
Props) => {
  const [planS, setPlanS] = useState<string>();
  // const [priceS, setPriceS] = useState<number>();
  // const [planId, setPlanId] = useState<string>();
  // const dispatch = useDispatch();
  // const { addCourseInfos } = bindActionCreators(actionCreators, dispatch);
  const plansS = [{ name: "Kilo Alma-Verme" }, { name: "Performans" }];
  return (
    <div className={plan.mainC}>
      <FormControl className={plan.container}>
        <div className={plan.title}>
          <h2>Paket Türü Seçin</h2>
        </div>
        <RadioGroup
          onChange={(e) => {
            setPlanS(e.target.value);
            // const price = plans.find((p) => p.time == e.target.value);
            // setPriceS(price?.price);
            // setPlanId(price?.plan_id);
          }}
          //   row
          className={plan.plansHolder}
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          {plansS.map((p, index) => (
            <label key={index} className={plan.holderO}>
              <FormControlLabel
                value={p.name}
                control={<Radio />}
                label={p.name}
              />
              {/* <p>{p.name} TL</p> */}
            </label>
          ))}
        </RadioGroup>
        <button
          type="submit"
          className={plan.planBtn}
          onClick={() => {
            if (planS) {
              setPlanSelected(planS);

              // let userCourse = {
              //   id: courseId,
              //   name: courseName,
              //   price: priceS,
              //   category: courseCategory,
              //   plan_id: planId,
              // };
              // addCourseInfos(userCourse);
              setProgress(1);
            }
          }}
        >
          Devam
        </button>
      </FormControl>
    </div>
  );
};

export default Plan;
