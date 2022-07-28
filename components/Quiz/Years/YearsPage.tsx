import React, { useState } from "react";
import years from "./years.module.scss";
import Slider from "@mui/material/Slider";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../Redux/Actions/Quiz";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import { useRouter } from "next/router";

const YearsPage = () => {
  const [valueYears, setValueYears] = useState<number>(0);
  const dispatch = useDispatch();
  const router = useRouter();
  const programRoute = router.query.program;
  const { addLevel } = bindActionCreators(actionCreators, dispatch);
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

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
        <button
          onClick={() => {
            addLevel(valueYears);
            router.push(`/programs/${programRoute}/metting`);
            // router.push(`/programs/${programId}/payment`)
            // handleClickOpen();
          }}
        >
          Next
        </button>
      </div>
      {/* <Dialog
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
            We Will Check Your Information And Send You Your Special Program Our
            Trainers Will Contact You On Whatsapp Or Your Email (Maximum It
            Takes One Day)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog> */}
    </div>
  );
};

export default YearsPage;
