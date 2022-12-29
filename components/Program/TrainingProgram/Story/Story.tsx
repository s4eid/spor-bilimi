import Image from "next/image";
import React from "react";
import story from "./story.module.scss";

const Story = () => {
  return (
    <div className={story.mainC}>
      <h2>Zihinsel Performans Koçu 🧠</h2>
      <div className={story.holder}>
        <div className={story.textC}>
          {/* <h4>Zihinsel Performans Koçu</h4> */}
          <p>
            Doç. Dr. Okan MİÇOOĞULLARI: Zihinsel performans koçuyum. Devlet
            üniversitesinde akademisyen olarak görev yapıyorum. Her yıl yüzlerce
            öğretmen yetiştiriyorum. Uzmanlık alanım sporcunun psikolojik
            becerilerini( Müsabaka ve Antrenman öncesi, sonrası psikolojik
            destek, zihinsel dayanıklılık, motivasyon, liderlik özelliği,
            özgüven vb.) geliştirmek. Bireysel olarak, biz bir damlayız.
            Birlikte okyanusuz. Bu okyanusta seninle birlikte olmak istiyoruz.
          </p>
        </div>
        <div className={story.banner}>
          <Image src="/other.jpeg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Story;
