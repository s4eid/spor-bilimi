import React, { useState, useEffect } from "react";
import nav from "./nav.module.scss";
import { navItems, navSItems } from "../../data/nav.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideBar from "./SideBar/SideBar";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../Redux/Reducers/rootReducer";
import { getUser } from "../../functions/User";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../Redux/Actions/User";
import { UserP } from "../../Redux/Interfaces/User";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

type Props = {
  children: JSX.Element;
};

const Nav = ({ children }: Props) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const { getUserInfo, logoutUser } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const user: UserP = useSelector((state: State) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    const getResult = async () => {
      const user = await getUser("account");
      if (user) {
        getUserInfo(user);
      }
    };
    getResult();
  }, []);
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
        {/* <div className={nav.loginHolder}>
          {!user.email ? (
            <div className={nav.loginContainer}>
              <Link href="/login">
                <button>Login/Register</button>
              </Link>
            </div>
          ) : (
            <div className={nav.profileHolder}>
              <IconButton
                onClick={handleClick}
                size="small"
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: "#111111",
                    fontWeight: "bold",
                  }}
                >
                  {user?.email?.charAt(0)}
                </Avatar>
              </IconButton>
              <Menu
                PaperProps={{
                  sx: {
                    backgroundColor: "#111111",
                  },
                }}
                id="basic-menu"
                disableScrollLock={true}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem
                  sx={{
                    fontSize: "14px",
                    color: "#fff",
                  }}
                  onClick={() => {
                    logoutUser(router);
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </div> */}
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
