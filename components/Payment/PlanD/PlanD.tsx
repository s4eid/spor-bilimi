import React from "react";
import planD from "./planD.module.scss";

interface Props {
  planSelected: string;
}

const PlanD = ({ planSelected }: Props) => {
  return (
    <div>
      {planSelected == "Performans" ? (
        <div className={planD.container}>
          <button className={planD.choseBtn}>
            1 Aylık Atletik Performans Demo Paket
          </button>
          <button className={planD.choseBtn}>
            1 Aylık Atletik Performans Full Paket
          </button>
          <button className={planD.choseBtn}>
            3 Aylık Atletik Performans Full Paket
          </button>
          <button className={planD.choseBtn}>
            6 Aylık Atletik Performans Full Paket
          </button>
          <button className={planD.choseBtn}>
            Atletik Performans Demo Paket
          </button>
          <button className={planD.choseBtn}>
            3 Aylık Atletik Performans Demo Paket
          </button>
          <button className={planD.choseBtn}>
            6 Aylık Atletik Performans Demo Paket
          </button>
        </div>
      ) : (
        <div className={planD.container}>
          <button className={planD.choseBtn}>
            1 Aylık Kilo Alma-Verme Full Paket
          </button>
          <button className={planD.choseBtn}>
            3 Aylık Kilo Alma-Verme Full Paket
          </button>
          <button className={planD.choseBtn}>
            6 Aylık Kilo Alma-Verme Full Paket
          </button>
          <button className={planD.choseBtn}>
            1 Aylık Kilo Alma-Verme Demo Paket
          </button>
          <button className={planD.choseBtn}>
            3 Aylık Kilo Alma-Verme Demo Paket
          </button>
          <button className={planD.choseBtn}>
            6 Aylık Kilo Alma-Verme Demo Paket
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanD;
