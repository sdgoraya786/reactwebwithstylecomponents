import React from "react";
import { useGloabalContext } from "../ContextAPI/Context";
import styled from "styled-components";
import { Button } from "./../styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
      }
      &:hover::after {
        width: 100%;
      }
      img {
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }
      &:hover img {
        transform: scale(1.2);
      }
    }
    .card-data {
      padding: 0 2rem;
      h3 {
        margin: 2rem 0;
        font-weight: 300;
        font-size: 2.4rem;
      }
      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(98 84 243);
        font-size: 1.4rem;
        &:hover {
          background-color: rgb(98 84 243);
          color: #fff;
        }
      }
    }
  }
`;

const Services = () => {
  // const {services} = useGloabalContext();
  return (
    <Wrapper className="section">
      <h2 className="common-heading">Our Services</h2>
      <div className="container grid grid-three-column">
        <div className="card">
          <figure>
            <img src="./images/s1.jpg" alt="" />
          </figure>
          <div className="card-data">
            <h3>MSD</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              veniam fugiat consequatur a vero.
            </p>
            <NavLink to="/services">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <figure>
            <img src="./images/s1.jpg" alt="" />
          </figure>
          <div className="card-data">
            <h3>MSD</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              veniam fugiat consequatur a vero.
            </p>
            <NavLink to="/services">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <figure>
            <img src="./images/s1.jpg" alt="" />
          </figure>
          <div className="card-data">
            <h3>MSD</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              veniam fugiat consequatur a vero.
            </p>
            <NavLink to="/services">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
        {/*  */}
        <div className="card">
          <figure>
            <img src="./images/s1.jpg" alt="" />
          </figure>
          <div className="card-data">
            <h3>MSD</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              veniam fugiat consequatur a vero.
            </p>
            <NavLink to="/services">
              <Button className="btn">Read More</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
