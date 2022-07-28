import React, { useState } from "react";
import Pay from "./Pay/Pay";
import payment from "./payment.module.scss";
import Address from "./Address/Address";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Plan from "./Plan/Plan";
import { Course } from "./interface/payment.interface";
import Image from "next/image";

interface Props {
  course: Course;
}

const Paymentpage = ({ course }: Props) => {
  const [progress, setProgress] = useState(0);
  const steps = ["Select Your Plan", "Address And Contact Infos", "Payment"];
  console.log(course);
  return (
    <div className={payment.mainC}>
      <div className={payment.progress}>
        <Stepper activeStep={progress} alternativeLabel>
          {steps.map((label, index) => (
            <Step
              className={payment.step}
              onClick={() => {
                if (progress > index) {
                  setProgress(index);
                }
              }}
              key={label}
            >
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
      <div className={payment.programC}>
        <div className={payment.programHolder}>
          <Image
            src={course.course.image}
            layout="fixed"
            width={150}
            height={100}
          />
          <p>{course.course.name}</p>
        </div>
      </div>
      {progress == 0 ? (
        <Plan
          plans={course.course.plans}
          courseName={course.course.name}
          courseCategory={course.course.category}
          courseId={course.course.course_id}
          setProgress={setProgress}
        />
      ) : progress == 1 ? (
        <Address setProgress={setProgress} />
      ) : (
        <Pay />
      )}
    </div>
  );
};

export default Paymentpage;
