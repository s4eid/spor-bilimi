import React from "react";
import detailsS from "./details.module.scss";

interface Props {
  details: string;
}
const Details = ({ details }: Props) => {
  return (
    <div className={detailsS.mainC}>
      {/* <h3>{details}</h3> */}
      <h3>
        Eğer Zihinsel Ve Fiziksel Kendine Geliştirmek Istiyorsan Doğru Yerdesin
      </h3>
    </div>
  );
};

export default Details;
