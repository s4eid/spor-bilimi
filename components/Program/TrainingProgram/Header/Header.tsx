import React from "react";
import header from "./header.module.scss";
import Image from "next/image";
import Video from "./Video/Video";

interface Props {
  image: string;
  name: string;
}

const Header = ({ image, name }: Props) => {
  return (
    <div className={header.header}>
      <div className={header.title}>
        <h2>Atletik performans Ve Kilo Alma/Verme Programı</h2>
      </div>
      {/* <Video /> */}
      <div className={header.waveC}>
        <Image src="/wave.png" layout="fill" />
      </div>
    </div>
  );
};

export default Header;
