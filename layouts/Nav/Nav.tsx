import React, { useState } from "react";
import nav from "./nav.module.scss";
import { navItems } from "../../data/nav.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";

type Props = {
  children: JSX.Element;
};

const Nav = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <>
      <div className={nav.mainContainer}>
        <div className={nav.logoContainer}>S B</div>
        <div className={nav.linksContainer}>
          <ul className={nav.linksHolder}>
            {navItems.map((n, index) => (
              <li key={index}>{n.name}</li>
            ))}
          </ul>
        </div>
        <div className={nav.loginHolder}>
          <div className={nav.loginContainer}>
            <button>Login/Register</button>
          </div>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            className={!navOpen ? nav.burger : nav.burgerOpen}
          />
        </div>
        <SideBar setOpen={setNavOpen} navItems={navItems} isOpen={navOpen} />
      </div>
      {children}
    </>
  );
};

export default Nav;
