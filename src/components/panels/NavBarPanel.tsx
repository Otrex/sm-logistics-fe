import { Wrapper } from "@components/layouts/SideWapper";
import logo from "@assets/img/logo-white.png";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

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
};

const Nav = styled.div`
  height: 72vh;
  li {
    display: block;
    color: #fff;
    //styleName: PlaceHolder/Label Text;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.08em;
    text-align: left;
  }

  // li > * {
  //   padding:
  // }
  .selected {
    background-color: rgba(255, 255, 255, 0.3);
  }

  .selected svg {
    fill: #fff;
  }
`;
export default function NavBarPanel(props: Props) {
  const { routes, url, settingsRoutes, logout } = props;
  return (
    <div className="w-96 md:block hidden">
      <Wrapper padding="1.2rem" bgSize="auto">
        <div className="text-center mb-24">
          <img src={logo} alt="logo" className="inline-block" />
        </div>
        <Nav className="flex flex-col justify-between">
          <div className="">
            <ul className="flex sm:flex-col overflow-hidden">
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
          <div className="">
            <div>
              <ul className="flex sm:flex-col overflow-hidden">
                {settingsRoutes.map((route, idx: number) => (
                  <li key={idx}>
                    <NavLink
                      activeClassName="selected"
                      onClick={
                        route.name.toLowerCase() === "logout"
                          ? logout
                          : undefined
                      }
                      className="mb-4 flex flex-row items-center py-4 px-8 rounded-2xl"
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
      </Wrapper>
    </div>
  );
}
