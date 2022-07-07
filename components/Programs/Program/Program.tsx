import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import program from "./program.module.scss";
import { useRouter } from "next/router";

interface P {
  img: string;
  title: String;
  text: string;
}
interface Props {
  p: P;
}

const Program = ({ p }: Props) => {
  const router = useRouter();
  const [value, setValue] = React.useState<number | null>(5);
  return (
    <div className={program.programHolder}>
      <div className={program.imgC}>
        <Image src={p.img} layout="fill" />
      </div>
      <div className={program.detailsC}>
        <h2>{p.title}</h2>
        <p>{p.text}</p>
        <button onClick={() => router.push("/programs/1")}>Learn More</button>
      </div>
      <div className={program.startC}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
    </div>
  );
};

export default Program;
