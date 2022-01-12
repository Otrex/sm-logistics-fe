import logo from "@assets/img/logo-full-colored.png";
import { AccentButton } from "@ui-kit/ComponentTags";
import styled from "styled-components";

const NavBtns = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    display: inline-block;
  }

  ul li a {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1rem 3rem;
    position: relative;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.08em;
  }

  ul li a::after {
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }

  ul li a.active {
    color: #03045e;
  }

  ul li a:hover::after,
  ul li a:active::after,
  ul li a.active::after {
    content: " ";
    width: 2rem;
    height: 0.5rem;
    border-radius: 2px;
    background-color: #fab60b;
    position: absolute;
    bottom: 0px;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }

  .action-btn {
    padding: 1.6rem 1.3rem !important;
    font-family: Poppins;
    font-size: 16px !important;
    font-style: normal;
    font-weight: 500 !important;
    line-height: 24px !important;
    letter-spacing: 0.08em !important;
  }
`;

export const TopNav = ({ className, active }: any) => {
  return (
    <>
      <div
        className={`flex md:flex-row px-20 py-4 pt-9 justify-between ${className}`}
      >
        <div className="logo">
          <img src={logo} alt="logo" style={{ width: "148px" }} />
        </div>
        <NavBtns>
          <ul>
            <li>
              <a href="./" className={!active ? "active" : ""}>
                {" "}
                Home{" "}
              </a>
            </li>
            <li>
              <a
                href="./about"
                className={active === 1 ? "active" : ""}
              >
                {" "}
                About{" "}
              </a>
            </li>
            <li>
              <a href="./partner" className={active === 2 ? "active" : ""}> Partner </a>
            </li>
            <li>
              <a href="./client"> Login </a>
            </li>
            <li className="ml-12">
              <AccentButton className="action-btn">
                Request Delivery
              </AccentButton>
            </li>
          </ul>
        </NavBtns>
      </div>
    </>
  );
};
