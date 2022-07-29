import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import filter from "./filter.module.scss";
import { LazyQueryExecFunction, OperationVariables } from "@apollo/client";

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<null | string>>;
  getFilterBlogs: LazyQueryExecFunction<any, OperationVariables>;
  _filter: string | null;
}

const Filter = ({ setFilter, getFilterBlogs, _filter }: Props) => {
  return (
    <div className={filter.mainC}>
      <FormControl
        onChange={async (e: any) => {
          if (e.target.value == "all") {
            setFilter(null);
            return;
          }
          setFilter(e.target.value);
          await getFilterBlogs({ variables: { filter: e.target.value } });
        }}
      >
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="diet" control={<Radio />} label="Diet" />
          <FormControlLabel
            value="training"
            control={<Radio />}
            label="Training Tips"
          />
          <FormControlLabel
            value="minset"
            control={<Radio />}
            label="Mindset"
          />
          <FormControlLabel value="all" control={<Radio />} label="All" />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Filter;
