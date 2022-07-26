import React from "react";
import By from "./By/By";
import Details from "./Details/Details";
import Header from "./Header/Header";
import Questions from "./Questions/Questions";
import YouGet from "./YouGet/YouGet";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import trainingProgram from "./trainingProgram.module.scss";
import { Course } from "../interfaces/program.interface";

interface Props {
  course: Course;
}
const TrainingProgram = ({ course }: Props) => {
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
    <div className={trainingProgram.mainContainer}>
      <Header name={course.name} image={course.image} />
      <By
        first_name={course.trainer.first_name}
        last_name={course.trainer.last_name}
        image={course.trainer.image}
      />
      <Details details={course.details} />
      <YouGet learn={course.learn} />
      <Questions />
      <div className={trainingProgram.planC}>
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
      </div>
    </div>
  );
};

export default TrainingProgram;
