import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Nav = styled.nav`
  .navbar-list {
    display: flex;
    gap: 4.8rem;
    .navbar-link {
      display: inline-block;
      font-size: 1.8rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.black};
      transition: color 0.3s linear;

      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
    .active {
      color: ${({ theme }) => theme.colors.helper};
    }
  }
  /*  */
  .mobile-navbar-btn {
    display: none;
    .close-outline {
      display: none;
    }
  }
  .mobile-navbar-btn[name="close-outline"] {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .mobile-navbar-btn {
      display: inline-block;
      z-index: 999;
      border: ${({ theme }) => theme.colors.black};
      .mobile-nav-icon {
        cursor: pointer;
        font-size: 4.2rem;
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .navbar-list {
      width: 100vw;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      transform: translateX(100%);
      visibility: hidden;
      opacity: 0;
      .navbar-link {
        font-size: 4.2rem;
      }
    }
    .active .mobile-nav-icon {
      display: none;
      font-size: 4.2rem;
      position: absolute;
      top: 3%;
      right: 10%;
      color: ${({ theme }) => theme.colors.black};
      z-index: 9999;
    }
    .active .close-outline {
      display: inline-block;
    }
    .active .navbar-list {
      visibility: visible;
      opacity: 1;
      transform: translateX(0);
      transition: transform 1s ease;
      z-index: 999;
    }
  }
`;

const Nav2 = styled(Nav)`
  .navbar-link {
    li {
      padding: 5px;
    }
    color: white !important;
    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.helper} !important;
    }
  }
  .active {
    background-color: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.helper} !important;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .mobile-nav-icon {
      color: ${({ theme }) => theme.colors.white} !important;
    }
    .navbar-list {
      background-color: gray !important;
    }
  }
`;

export const NavBar1 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <Nav>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {/*  */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav>
  );
};

export const NavBar2 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const gotobtn = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <Nav2>
      <div className={openMenu ? "menuIcon active" : "menuIcon"}>
        <ul className="navbar-list">
          <NavLink
            className="navbar-link"
            onClick={() => {
              setOpenMenu(false);
              gotobtn();
            }}
            to="/"
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className="navbar-link"
            onClick={() => {
              setOpenMenu(false);
              gotobtn();
            }}
            to="/about"
          >
            <li>About</li>
          </NavLink>
          <NavLink
            className="navbar-link"
            onClick={() => {
              setOpenMenu(false);
              gotobtn();
            }}
            to="/services"
          >
            <li>Services</li>
          </NavLink>
          <NavLink
            className="navbar-link"
            onClick={() => {
              setOpenMenu(false);
              gotobtn();
            }}
            to="/contact"
          >
            <li>Contact</li>
          </NavLink>
        </ul>
        {/*  */}
        <div className="mobile-navbar-btn">
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setOpenMenu(true)}
          />
          <CgCloseR
            name="close-outline"
            className="close-outline mobile-nav-icon"
            onClick={() => setOpenMenu(false)}
          />
        </div>
      </div>
    </Nav2>
  );
};
