import React from "react";
import program from "./program.module.scss";
import Header from "./Header/Header";
import By from "./By/By";
import YouGet from "./YouGet/YouGet";
// import Plans from "./Plans/Plans";
import { Course } from "./interfaces/program.interface";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Details from "./Details/Details";
import { useRouter } from "next/router";
import Questions from "./Questions/Questions";

interface Props {
  course: Course;
}

const ProgramPage = ({ course }: Props) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const route = router.query;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (course.category == "fitness") {
      router.push(`/programs/${route.program}/quiz`);
    } else if (course.category == "mindset") {
      router.push(`/programs/${route.program}/metting`);
    }
  };
  return (
    <div className={program.mainContainer}>
      <Header name={course.name} image={course.image} />
      <By
        first_name={course.trainer.first_name}
        last_name={course.trainer.last_name}
        image={course.trainer.image}
      />
      <Details details={course.details} />
      <YouGet learn={course.learn} />
      <Questions />
      <div className={program.planC}>
        {course.category == "fitness" ? (
          <Button
            onClick={handleClickOpen}
            color="primary"
            size="large"
            variant="contained"
          >
            Enroll Now And Join Us
          </Button>
        ) : (
          <Button
            onClick={() => {
              router.push(`/programs/${route.program}/metting`);
            }}
            color="primary"
            size="large"
            variant="contained"
          >
            Make A Call
          </Button>
        )}
        {course.category == "fitness" ? (
          <Dialog
            disableScrollLock={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Congrats Your Program Is On Process 👏"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Wee Will Get You To A 10 min Quiz To Get You Know Better And
                Prepar A Program For You.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Ok</Button>
            </DialogActions>
          </Dialog>
        ) : (
          <></>
        )}
        {/* {course.plans.map((plan, index) => (
          <div className={program.planHolder} key={index}> */}
        {/* <Plans
              name={plan.time}
              price={plan.price}
              // option_1={plan.option_1}
              // option_2={plan.option_2}
              // option_3={plan.option_3}
              // option_4={plan.option_4}
              // option_5={plan.option_5}
            /> */}
        {/* </div> */}
        {/* // ))} */}
      </div>
    </div>
  );
};

export default ProgramPage;
