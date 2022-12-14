import styled from "styled-components";

export const Div = styled.div`
  &.banner-container {
    color: white;
    height: 800px;
    background-size: cover;
    background-repeat: no-repeat;

    // border: 1px solid red;
  }
`;

export const Container = styled.div``;

export const H1 = styled.h1`
  font-size: 3rem;
  font-weight: 800px;
  padding-top: 8rem;
  padding-left: 2rem;
`;

export const P = styled.p`
  width: 45rem;
  line-height: 1.3rem;
  padding-top: 1rem;
  font-size: 1rem;
  max-width: 360px;
  height: 80px;
  margin-left: 2rem;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-left: 3.5rem;
  background-color: rgba(51, 51, 51, 0.5);

  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: 0.2s;
  }
`;
