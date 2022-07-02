import Image from "next/image";
import React, { useState } from "react";
import hero from "./hero.module.scss";
import { AnimatePresence } from "framer-motion";
import { heroItems } from "../../../data/hero.data";
import { wrap } from "popmotion";
import Slide from "./Slide/Slide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, heroItems.length, page);

  const paginate = (newDirection: number): void => {
    setPage([page + newDirection, newDirection]);
  };
  return (
    <div className={hero.mainC}>
      <AnimatePresence
        initial={false}
        // className={hero.container}
        custom={direction}
      >
        <Slide
          person={heroItems[imageIndex]}
          direction={direction}
          page={page}
          paginate={paginate}
        />
      </AnimatePresence>
      <div className={hero.left} onClick={() => paginate(1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <div className={hero.right} onClick={() => paginate(-1)}>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className={hero.waveC}>
        <Image src="/wave.png" layout="fill" />
      </div>
    </div>
  );
};

export default Hero;
