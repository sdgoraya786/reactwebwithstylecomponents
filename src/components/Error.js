import React from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { NavLink } from "react-router-dom";

const Wrapper = styled.section`
  padding: 9rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 50%;
  }
  .btn {
    font-size: 1.8rem;
    margin-top: 3rem;
  }
`;
const Error = () => {
  return (
    <Wrapper>
      <img src="./images/error.svg" alt="eror" />
      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default Error;
