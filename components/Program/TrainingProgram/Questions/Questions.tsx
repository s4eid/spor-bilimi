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
      <h2>SSS ❔</h2>
      <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
        <AccordionSummary
          expandIcon={
            <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Antrenörler ile nasıl iletişim kuracağız?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Atletik performans full paket aldığınızda haftada 2 gün spor
            psikoloğumuz ile bire bir görüntülü görüşeceksiniz. Kilo alma-verme
            full paket aldığınızda haftada 1 gün spor psikoloğumuz ile bire bir
            görüntülü görüşeceksiniz. Hareket ve antrenman bilimleri uzmanımız
            ile haftanın 7 günü sınırsız bir şekilde Whatsapp üzerinden iletişim
            sağlayabilirsiniz.
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
          <Typography>
            Program içeriklerini ben oluşturabilecek miyim?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Tabiki. Antrenman programını hazırlamamız için göndereceğimiz test
            protokollerini inceleyerek zayıf ve güçlü yanlarınızı analiz
            edeceğiz. Daha sonrasında size göndereceğimiz soruları cevapladıktan
            sonra sizin tavsiyeleriniz ve isteklerinizi dikkate alarak size özel
            program hazırlayacağız.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
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
      </Accordion> */}
    </div>
  );
};

export default Questions;
