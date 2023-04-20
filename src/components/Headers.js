import React from "react";
import { NavLink } from "react-router-dom";
import { NavBar1, NavBar2 } from "./NavBar";
import styled from "styled-components";

const MainHeader1 = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 0 4.8rem;
  height: 8rem;
  /* for fixed header */
  /* position: fixed;
  width: 100%;
  z-index: 1; */
  .logo {
    /* max-width: 30%; */
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.heading};
  }
`;

const MainHeader2 = styled(MainHeader1)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /* background-color: ${({ theme }) => theme.colors.footer_bg}; */
  background-color: gray;
  transform: translateY(10);
  transition: transform 6s ease;
  animation: myanimation 3s;
  @keyframes myanimation {
    0% {
      background-color: transparent;
    }
    35% {
      background-color: gray;
    }
    100% {
      background-color: gray;
    }
  }
  z-index: 2;
  .logo {
    background-color: transparent;
  }
`;

export const Header1 = () => {
  return (
    <MainHeader1>
      <NavLink to="/">
        <img src="./images/shahzad2.png" alt="logo" className="logo" />
      </NavLink>
      <NavBar1 />
    </MainHeader1>
  );
};

export const Header2 = () => {
  return (
    <MainHeader2>
      <NavLink to="/">
        <img src="./images/shahzad2.png" alt="logo" className="logo" />
      </NavLink>
      <NavBar2 />
    </MainHeader2>
  );
};
