import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import slide from "./slide.module.scss";
interface Persons {
  img: string;
  title: string;
  text: string;
}
interface Props {
  person: Persons;
  direction: number;
  page: number;
  paginate: (newDirection: number) => void;
}
const Slide = ({ person, direction, page, paginate }: Props) => {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  return (
    <motion.div
      className={slide.childs}
      key={page}
      variants={variants}
      custom={direction}
      initial="enter"
      animate="center"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 },
      }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className={slide.imageC}>
        <Image src={person.img} layout="fill" />
      </div>
      <div className={slide.textC}>
        <h2 className={slide.title}>{person.title}</h2>
        <p className={slide.details}>{person.text}</p>
        <button>Courses</button>
      </div>
    </motion.div>
  );
};

export default Slide;
