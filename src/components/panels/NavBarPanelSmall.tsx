import { WrapperWhite } from "@components/layouts/SideWapper";
import logo from "@assets/img/logo-white.png";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import UserShortDetails, {
  UserShortType,
} from "@components/utility/UserShortDetails";

type Props = {
  routes: {
    name: string;
    path: string;
    svg?: any;
  }[];
  url: (x: string) => string;
  settingsRoutes: {
    svg?: any;
    name: string;
    path: string;
  }[];
  logout?: () => void;
  show?: boolean;
  toggle?: () => void;
  userDetails: UserShortType;
};

const Nav = styled.div`
  height: 60vh;
  li {
    display: block;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: left;
  }

  .selected {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .selected svg {
    fill: #fff;
  }
`;

const NavClose = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  // background: blue;
  top: 0;
  left: 0;
`;

export default function NavBarPanelSmall(props: Props) {
  const { url, logout, show, toggle, userDetails } = props;
  const routes = props.routes.filter(
    (route) => route.name !== "Dashboard"
  );
  routes.push(props.settingsRoutes[0]);

  const settingsRoutes = props.settingsRoutes.filter(
    (route) => route.name !== "Settings"
  );

  return (
    <div
      className={`w-full block md:hidden bg-dark-transparent fixed z-max top-0 nav-slide ${
        show ? "nav-open" : ""
      }`}
    >
      <NavClose onClick={toggle}></NavClose>
      <div className="w-80p">
        <WrapperWhite padding="2.4rem" bgSize="100%">
          <div className="text-center my-24">
            <UserShortDetails {...userDetails} />
          </div>
          <Nav className="flex flex-col justify-between">
            <div className="">
              <ul className=" overflow-hidden nav-side">
                {routes.map((route, idx: number) => (
                  <li key={idx}>
                    <NavLink
                      activeClassName="selected"
                      className="mb-4 flex flex-row items-center py-4 px-8 rounded-2xl"
                      to={url(route.path)}
                    >
                      <div className="pr-4">{route.svg}</div>{" "}
                      {route.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="box">
              <div>
                <ul className="flex sm:flex-col overflow-hidden nav-side">
                  {settingsRoutes.map((route, idx: number) => (
                    <li key={idx}>
                      <NavLink
                        activeClassName="selected"
                        className="mb-4 flex flex-row items-center py-4 px-8 rounded-2xl"
                        onClick={
                          route.name.toLowerCase() === "logout"
                            ? logout
                            : undefined
                        }
                        to={url(route.path)}
                      >
                        <div className="pr-4">{route.svg}</div>
                        {route.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Nav>
        </WrapperWhite>
      </div>
    </div>
  );
}
