import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import quesions from "./questions.module.scss";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Questions = () => {
  return (
    <div className={quesions.mainC}>
      <h2>Frequently Asked Questions ❔</h2>
      <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is this too advanced for me?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Starting out it’s great to have a base level of strength, like
            performing 10 push-ups and 5 chin ups. That said, we’ve had many
            clients join that couldn’t perform a chin-up and after the first
            month, managed to bang out 5.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>What equipment do I need?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adjustable Bench, Dumbbells, Barbells, Rack & Pull Up is the minimal
            equipment necessary – most things which one can find at their local
            gym.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Is there any special diet I need to follow?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have an incredibly effective diet protocol to follow. That said,
            this approach revolves around intermittent fasting (until lunch each
            day) and hitting the appropriate number of calories and protein.
            Therefore, you can eat your favorite foods and meals while leaning
            down. Steak and potatoes, chocolate for dessert and lots of fruit
            fit the bill perfectly. That said, we also have some vegans that
            have adapted the diet to their needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Questions;
