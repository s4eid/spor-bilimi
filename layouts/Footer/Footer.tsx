import Image from "next/image";
import React from "react";
import footer from "./footer.module.scss";
import {
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
              <h2>Programlar</h2>
              <Link href={"/programs/1b4f3136-55e6-4b7e-aca6-8e2b73cd72d1"}>
                <p className={footer.linkChild}>
                  Zihinsel ve Fiziksel Programı
                </p>
              </Link>
            </div>
            <div className={footer.linksC}>
              <h2>Kurumsal</h2>
              <p>About Us</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={footer.social}>
            <Link href={"https://www.instagram.com/sporbilimii/"}>
              <div className={footer.IconHolder}>
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </Link>
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
