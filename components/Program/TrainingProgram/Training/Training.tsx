import Image from "next/image";
import React from "react";
import training from "./training.module.scss";

const Training = () => {
  return (
    <div className={training.mainC}>
      <h2>You Get Complate Diet And Training Program 💹</h2>
      <div className={training.holder}>
        <div className={training.textC}>
          <h4>Gym Workouts And Diet Programs</h4>
          <p>
            An accomplished endurance athlete, Goggins has completed over 60
            ultra-marathons, triathlons, and ultra-triathlons, setting new
            course records and regularly placing in the top five. He once held
            the Guinness World Record for pull-ups completing 4,030 in 17 hours,
            and he’s a sought after public speaker.
          </p>
        </div>
        <div className={training.banner}>
          <Image
            src="https://res.cloudinary.com/nuzem/image/upload/v1658825534/sb/david_goggins_about_si0vk7.png"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Training;
