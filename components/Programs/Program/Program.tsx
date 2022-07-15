import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import program from "./program.module.scss";
import { useRouter } from "next/router";
import { Course } from "../Interfaces/programs.interface";

interface Props {
  p: Course;
}

const Program = ({ p }: Props) => {
  const router = useRouter();
  const [value, setValue] = React.useState<number | null>(5);
  return (
    <div className={program.programHolder}>
      <div className={program.imgC}>
        <Image src={p.image} layout="fill" />
      </div>
      <div className={program.detailsC}>
        <h2>{p.name}</h2>
        <p>{p.title}</p>
        <button onClick={() => router.push(`/programs/${p.course_id}`)}>
          Learn More
        </button>
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
