import React, { useState, useEffect, useRef } from "react";
import students from "./students.module.scss";
import { motion } from "framer-motion";
import { slideItems } from "../../../data/slide.data";
import Slide from "./Slide/Slide";
const Students = () => {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<any>();
  useEffect(() => {
    if (carousel) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <div className={students.studentMainContainer}>
      <div className={students.title}>
        <h2>Öğrenciler</h2>
      </div>
      <div className={students.studentHolder}>
        <motion.div ref={carousel} className={students.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={students.innerCarousel}
          >
            {slideItems.map((s, index) => (
              <motion.div key={index} className={students.item}>
                <Slide c={s} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Students;
