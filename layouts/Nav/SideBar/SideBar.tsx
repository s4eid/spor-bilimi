import React from "react";
import sideBar from "./sideBar.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
interface Props {
  isOpen: boolean;
  navItems: Array<any>;
  setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}
export default function SideBar({ navItems, isOpen, setOpen }: Props) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className={isOpen ? sideBar.container : sideBar.containerClose}>
      <div className={sideBar.closeIcon}>
        <FontAwesomeIcon onClick={() => setOpen(false)} icon={faXmark} />
      </div>
      <ul className={sideBar.menuItems}>
        {navItems.map((n) => (
          <Link key={n.id} href={n.link}>
            <li>{n.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
