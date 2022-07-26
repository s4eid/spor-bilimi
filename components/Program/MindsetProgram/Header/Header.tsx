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
        <h2>12 Week Training Program</h2>
      </div>
      <Video />
      <div className={header.waveC}>
        <Image src="/wave.png" layout="fill" />
      </div>
    </div>
  );
};

export default Header;
