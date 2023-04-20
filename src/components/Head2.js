import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavBar2 } from "./NavBar";

// This header for scroll down
const MainHeader = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.footer_bg};
  transform: translateY(10);
  transition: transform 6s ease;
  animation: myanimation 3s;
  z-index: 2;

  .logo {
    height: 3rem;
  }
`;

const Head2 = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/shahzad2.png" alt="logo" className="logo" />
      </NavLink>
      <NavBar2 />
    </MainHeader>
  );
};

export default Head2;
