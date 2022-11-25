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
import Topics from "./Topics/Topics";
import Story from "./Story/Story";
import Training from "./Training/Training";

interface Props {
  course: Course;
}
const TrainingProgram = ({ course }: Props) => {
  const [open, setOpen] = React.useState(false);
  const youGet = [
    "Bizimle çalışmaya başladıktan sonra hayat kaliten artacak",
    "Atletik performansın gelişecek",
    "Fiziksel ve zihinsel olarak daha iyi hissedeceksin",
    "Psikolojik ve mental sağlık parametrelerin gelişecek",
    "Hayata bakış açın değişecek",
  ];
  const router = useRouter();
  const route = router.query;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (course.category == "fitness") {
      router.push(`/programs/${route.program}/quiz`);
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
      <Topics />
      <Story />
      <Training />
      <YouGet learn={youGet} />
      <Questions />
      <div className={trainingProgram.planC}>
        <Button
          onClick={handleClickOpen}
          color="primary"
          size="large"
          variant="contained"
        >
          Bize Katıl
        </Button>
        <Dialog
          disableScrollLock={true}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Tebrikler Programınız İşlemde 👏"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Sizi Daha İyi Tanımak ve Size Özel Bir Program Hazırlamak İçin 10
              Dakikalık Bir Sınava Getireceğiz.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Tamam</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default TrainingProgram;
