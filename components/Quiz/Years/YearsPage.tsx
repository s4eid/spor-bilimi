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
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_MEMBERSHIP } from "../../../graphql/userCourse/mutation/createMembership";
import { Quiz } from "../../../Redux/Interfaces/Quiz";
import { useSelector } from "react-redux";
import { State } from "../../../Redux/Reducers/rootReducer";

const YearsPage = () => {
  const [valueYears, setValueYears] = useState<number>(0);
  const [createMembership, { data }] = useMutation(CREATE_MEMBERSHIP);
  const { quiz }: { quiz: Quiz } = useSelector((state: State) => state);
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
        <h2>Mevcut Fitness Düzeyiniz Nedir?</h2>
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
            <p>Hiç Antrenman Yapmadım 😞</p>
          ) : valueYears == 1 ? (
            <p>1 Yıldan Az Çalıştım 🍎</p>
          ) : valueYears == 2 ? (
            <p>1 Yıldan Fazla Çalıştım 👊</p>
          ) : valueYears == 3 ? (
            <p>2 Yıldan Fazla Çalıştım 🥉</p>
          ) : valueYears == 4 ? (
            <p>3 Yıldan Fazla Çalıştım 🥈</p>
          ) : (
            <p>Profesyonelim Sadece Daha Iyi Olmak Istiyorum 🥇</p>
          )}
        </div>
        <button
          onClick={() => {
            addLevel(valueYears);
            // router.push(`/programs/${programRoute}/metting`);
            // createMembership({
            //   variables: {
            //     createMembership: {
            //       quiz: quiz,
            //       // time: _metting,
            //     },
            //   },
            // });
            fetch("/api/sendEmail", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(quiz),
            });
            router.push(`/programs/${programRoute}/payment`);
            // handleClickOpen();
          }}
        >
          Devam
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
