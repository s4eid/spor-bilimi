import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Course } from "../interfaces/home.interface";
import programs from "./programs.module.scss";

interface Props {
  courses: Course[];
}

const Programs = ({ courses }: Props) => {
  const router = useRouter();
  return (
    <div className={programs.mainC}>
      <h2>Main Programs</h2>
      <div className={programs.holderC}>
        {courses.map((p) => (
          <div key={p.course_id} className={programs.programHolder}>
            <div className={programs.imgC}>
              <Image src={p.image} layout="fill" />
            </div>
            <div className={programs.detailsC}>
              <h2>{p.name}</h2>
              <p>{p.title}</p>
              <button onClick={() => router.push(`/programs/${p.course_id}`)}>
                Learn More
              </button>
            </div>
            <div className={programs.startC}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
