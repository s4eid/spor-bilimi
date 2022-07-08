import React from "react";
import mettingNav from "./mettingNav.module.scss";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Props {
  children: JSX.Element;
}

const MettingNav = ({ children }: Props) => {
  const width = 20;
  const router = useRouter();
  return (
    <>
      <div className={mettingNav.mainC}>
        <div className={mettingNav.logoC}>
          <Link href="/">
            <h1>S B</h1>
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default MettingNav;
