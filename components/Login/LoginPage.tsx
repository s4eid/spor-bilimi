import {
  faBrain,
  faChevronLeft,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Therd from "./Therd/Therd";
import Link from "next/link";
import React from "react";
import login from "./login.module.scss";
import LoginForm from "./LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <div className={login.mainC}>
      <div className={login.loginC}>
        <LoginForm />
        <Therd />
      </div>
      <Link href="/">
        <div className={login.back}>
          <FontAwesomeIcon className={login.left} icon={faChevronLeft} />
          <p>Go Back</p>
          {/* <FontAwesomeIcon icon={faHouse} /> */}
        </div>
      </Link>
      <div className={login.header}>
        <h1>Spor Bilimi</h1>
        <p>Train Your Body , Mind</p>
        <div className={login.icons}>
          <FontAwesomeIcon className={login.icon} icon={faPerson} />
          <FontAwesomeIcon className={login.icon} icon={faBrain} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
