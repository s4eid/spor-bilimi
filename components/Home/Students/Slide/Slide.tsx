import Image from "next/image";
import React from "react";
import slide from "./slide.module.scss";
interface Images {
  img: string;
}
interface Props {
  c: Images;
}
const Slide = ({ c }: Props) => {
  return (
    <div className={slide.mainHolder}>
      <Image src={c.img} layout="fill" />
    </div>
  );
};

export default Slide;
