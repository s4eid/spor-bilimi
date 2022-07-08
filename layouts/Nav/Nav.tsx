import React, { useState, useEffect } from "react";
import nav from "./nav.module.scss";
import { navItems, navSItems } from "../../data/nav.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";
import Link from "next/link";

type Props = {
  children: JSX.Element;
};

const Nav = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    setNavOpen(false);
  }, [router]);
  return (
    <>
      <div className={nav.mainContainer}>
        <div className={nav.logoContainer} onClick={() => router.push("/")}>
          S B
        </div>
        <div className={nav.linksContainer}>
          <ul className={nav.linksHolder}>
            {navItems.map((n, index) => (
              <Link key={index} href={n.link}>
                <li>
                  <a href={n.link}>{n.name}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className={nav.loginHolder}>
          <div className={nav.loginContainer}>
            <Link href="/login">
              <button>Login/Register</button>
            </Link>
          </div>
        </div>
        <div className={nav.menuContainer} onClick={() => setNavOpen(!navOpen)}>
          <FontAwesomeIcon
            icon={faBars}
            className={!navOpen ? nav.burger : nav.burgerOpen}
          />
        </div>
        <SideBar setOpen={setNavOpen} navItems={navSItems} isOpen={navOpen} />
      </div>
      {children}
    </>
  );
};

export default Nav;
