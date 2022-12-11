import React, { useState } from "react";
import plan from "./plan.module.scss";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  const plansS = [{ name: "Kilo Alma-Verme" }, { name: "Atletik performans" }];
  return (
    <div className={plan.mainHolder}>
      <div className={plan.innerHolder}>
        <div className={plan.title}>
          <h2>Paketlerimiz</h2>
          <p>
            Paketlerimiz hakkında bilgi edinmek için öncelikle inceleyebilir ve
            daha sonra size uygun olanı seçebilirsiniz.
          </p>
        </div>
        <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Kilo Alma-Verme Full Paket</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Haftada 1 gün online şekilde bire bir uzman spor psikologu ile
              zihinsel performans danışmanlığı Amacınıza yönelik (kilo alma,
              kilo verme, kas kütlesi arttırma, yağ yakımı) antrenman programı
              kişinin antropometrik özelliğine yönelik hazırlanacak bilimsel
              kanıta dayalı ve video destekli kişiye özel kuvet ve kardiyo
              antrenman programı Amacınıza yönelik (kilo alma, kilo verme, kas
              kütlesi arttirma, sabit kiloda kalma) detaylı bir şekilde bilimsel
              kanıta dayalı kişiye özel hazırlanmış beslenme programı Karın kası
              antrenman programı Postür düzeltici egzersiz reçetesi Haftanin her
              günü sınırsız iletişim Her hafta vücut kontrolü, vücudunuzun
              durumuna göre beslenme ve antrenman programında değişim
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Kilo alma verme demo paket </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Amacınıza yönelik (kilo alma, kilo verme, kas kütlesi arttırma,
              yağ yakımı) antrenman programı kişinin antropometrik özelliğine
              yönelik hazırlanacak bilimsel kanıta dayalı ve video destekli
              kişiye özel kuvet ve kardiyo antrenman programı Amacınıza yönelik
              (kilo alma, kilo verme, kas kütlesi arttırma, sabit kiloda kalma)
              detaylı bir şekilde bilimsel kanıta dayalı kişiye özel hazırlanmış
              beslenme programı Karın kası antrenman programı Postür düzeltici
              egzersiz reçetesi
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Atletik performans full paket</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Programa başlamadan önce branşınıza özel performans testleri
              uygulayacaksınız. Haftada 2 gün online şekilde bire bir uzman spor
              psikologu ile zihinsel performans danışmanlığı Spor branşınıza
              özgü bilimsel kanıta dayalı ve video destekli kişiye özel sürat,
              çeviklik, çabukluk, hız, kuvvet, güç, dayanıklılık, denge
              antrenman programları Spor branşınıza özgü mobilizasyon ve
              stabilizasyon antrenman programları Postür düzeltici eqzersiz
              reçetesi Core antrenman programı Amacınıza vönelik detaylı bir
              şekilde bilimsel kanıta dayalı kişiye özel hazırlanmış beslenme
              programı Haftanın her günü sınırsız iletişim kurabileceksiniz Her
              hafta sporcu analizi yapılacak ve performans durumunuza göre
              antrenman ve beslenme programında değişimler sağlanacaktır.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ backgroundColor: "#0081ef", color: "#fff" }}>
          <AccordionSummary
            expandIcon={
              <FontAwesomeIcon style={{ color: "#fff" }} icon={faArrowDown} />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Atletik performans demo paket</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Programa başlamadan önce branşınıza özel performans testleri
              uygulayacaksınız. Spor branşınıza özgü bilimsel kanıta dayalı ve
              video destekli kişiye özel sürat, çeviklik, çabukluk, hız, kuvvet,
              güç, dayanıklılık, denge antrenman programları Spor branşınıza
              özgü mobilizasyon ve stabilizasyon antrenman programları Postür
              düzeltici eqzersiz reçetesi Core antrenman programı Amacınıza
              yönelik detaylı bir şekilde bilimsel kanıta dayalı kişiye özel
              hazırlanmış beslenme programı
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
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
    </div>
  );
};

export default Plan;
