import Image from "next/image";
import React from "react";
import footer from "./footer.module.scss";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: JSX.Element;
}

const Footer = ({ children }: Props) => {
  return (
    <>
      {children}
      <div className={footer.mainContainer}>
        <div className={footer.holder}>
          <div className={footer.linksHolder}>
            <div className={footer.linksC}>
              <h2>Policy</h2>
              <p>Distance And Sales</p>
              <p>Privacy And Policy</p>
            </div>
            <div className={footer.linksC}>
              <h2>Programs</h2>
              <p>12 Week Program</p>
            </div>
            <div className={footer.linksC}>
              <h2>Coporate</h2>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={footer.social}>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faTelegram} />
            </div>
            <div className={footer.IconHolder}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
          </div>
        </div>
        <div className={footer.container}>
          <div className={footer.copy}>
            <h2>S B</h2>
            <p>Copyright © 2022 7bc. All rights reserved.</p>
          </div>
          <div className={footer.payProviders}>
            <Image src="/pay.svg" layout="fixed" width={400} height={32} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
