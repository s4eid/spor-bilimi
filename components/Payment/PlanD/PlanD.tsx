import Link from "next/link";
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
          <Link href="https://iyzi.link/AIzM9g">
            <button className={planD.choseBtn}>
              1 Aylık Atletik Performans Full Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzNAQ">
            <button className={planD.choseBtn}>
              3 Aylık Atletik Performans Full Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzRgg">
            <button className={planD.choseBtn}>
              6 Aylık Atletik Performans Full Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzRhQ">
            <button className={planD.choseBtn}>
              1 Aylık Atletik Performans Demo Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzRhg">
            <button className={planD.choseBtn}>
              3 Aylık Atletik Performans Demo Paket
            </button>
          </Link>
          <Link href="https://iyzi.link/AIzRhw">
            <button className={planD.choseBtn}>
              6 Aylık Atletik Performans Demo Paket
            </button>
          </Link>
        </div>
      ) : (
        <div className={planD.container}>
          <Link href="https://iyzi.link/AIzRgw">
            <button className={planD.choseBtn}>
              1 Aylık Kilo Alma-Verme Full Paket
            </button>
          </Link>
          <Link href="https://iyzi.link/AIzRiQ">
            <button className={planD.choseBtn}>
              3 Aylık Kilo Alma-Verme Full Paket
            </button>
          </Link>
          <Link href="https://iyzi.link/AIzRjQ">
            <button className={planD.choseBtn}>
              6 Aylık Kilo Alma-Verme Full Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzRiw">
            <button className={planD.choseBtn}>
              1 Aylık Kilo Alma-Verme Demo Paket
            </button>
          </Link>

          <Link href="https://iyzi.link/AIzRkA">
            <button className={planD.choseBtn}>
              3 Aylık Kilo Alma-Verme Demo Paket
            </button>
          </Link>
          <Link href="https://iyzi.link/AIzRkw">
            <button className={planD.choseBtn}>
              6 Aylık Kilo Alma-Verme Demo Paket
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PlanD;
