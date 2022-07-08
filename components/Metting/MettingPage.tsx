import React, { useState } from "react";
import metting from "./metting.module.scss";
import Image from "next/image";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import moment from "moment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const MettingPage = () => {
  const today = moment();
  const [date, setDate] = useState<moment.Moment | any>(today);
  return (
    <div className={metting.mainC}>
      <div className={metting.personC}>
        <Image src="/person.webp" height={100} width={100} layout="fixed" />
        <h2>Metting Call With Ahmed</h2>
        <p>
          This is a 45 minute call to see whether you're a good fit to join the
          upper echelon of agency owners inside of Copy Paste Agency. We'll
          either phone you or the call will be hosted on Zoom, based on your
          preference in the survey.
        </p>
      </div>
      <div className={metting.mettingC}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
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
    </div>
  );
};

export default MettingPage;
