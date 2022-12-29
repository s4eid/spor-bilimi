import Image from "next/image";
import React from "react";
import training from "./training.module.scss";

const Training = () => {
  return (
    <div className={training.mainC}>
      <h2>Hareket ve Antrenman Bilimleri Uzmanı 💹</h2>
      <div className={training.holder}>
        <div className={training.textC}>
          {/* <h4>Hareket ve Antrenman</h4> */}
          <p>
            Hareket ve Antrenman Bilimleri Uzmanı Faruk AKSAN: Milli sporcuyum.
            Sporcularımızın antrenman (kuvvet, güç, hız, çeviklik, çabukluk,
            denge, stabilite, mobilite, sakatlık önleyici egzersizler) ve
            beslenmesini kişiye özel branşının ihtiyaçlarını karşılayacak
            şekilde hazırlıyorum. Rekreatif amaçlı egzersiz yapan kişiler için
            hedeflerine yönelik yağ yakımı ve kas kütlesi arttırmaya yönelik
            program dizaynı yapıyorum. Dünya üzerinde en güçlü silah, ateşlenmiş
            insan ruhudur.Ruhunu harekete geçirmek için seni aramızda görmek
            istiyoruz.
          </p>
        </div>
        <div className={training.banner}>
          <Image src="/farukHocam.jpeg" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Training;
