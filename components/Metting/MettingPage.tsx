import React, { useState } from "react";
import metting from "./metting.module.scss";
import Image from "next/image";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { CREATE_MEMBERSHIP } from "../../graphql/userCourse/mutation/createMembership";
import { UserCourseInfos } from "../../Redux/Interfaces/UserCourse";
import { useSelector } from "react-redux";
import { State } from "../../Redux/Reducers/rootReducer";
import { Quiz } from "../../Redux/Interfaces/Quiz";

const MettingPage = () => {
  const today = moment();
  const router = useRouter();
  const [createMembership, { data }] = useMutation(CREATE_MEMBERSHIP);
  const programRouter = router.query.program;
  const [date, setDate] = useState<moment.Moment | any>(today);
  const { quiz }: { quiz: Quiz } = useSelector((state: State) => state);
  return (
    <div className={metting.mainC}>
      <div className={metting.personC}>
        <Image src="/other.jpeg" height={100} width={100} layout="fixed" />
        <h2>Dr. Okan Mi̇çooğullari ile Görüşme</h2>
        <p>görüşme süresi 45 dakikadır ve zoom üzerinden yapılacaktır.</p>
      </div>
      <div className={metting.mettingC}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Zaman Belirleyin"
            maxDate={moment().clone().endOf("year")}
            minDate={moment()}
            //     minTime={date}
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
          />
        </LocalizationProvider>
      </div>
      <button
        className={metting.setMetting}
        onClick={() => {
          const metting = moment(date).valueOf();
          const _metting = JSON.stringify(metting);

          localStorage.setItem("metting", _metting);
          // createMembership({
          //   variables: {
          //     createMembership: {
          //       quiz: quiz,
          //       time: _metting,
          //     },
          //   },
          // });
          router.push(`/programs/${programRouter}/payment`);
        }}
      >
        Tamam
      </button>
    </div>
  );
};

export default MettingPage;
