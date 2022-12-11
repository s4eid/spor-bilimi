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
        {/* Eğer Zihinsel Ve Fiziksel Kendine Geliştirmek İstiyorsan Doğru Yerdesin */}
        Zihinsel ve Fiziksel olarak kendini geliştirmek istiyorsan doğru
        yerdesin, İncelemeye devam et.
      </h3>
    </div>
  );
};

export default Details;
