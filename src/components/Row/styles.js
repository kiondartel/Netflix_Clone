import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  padding: 20px;
  margin-bottom: 30px;

  .row-container {
    margin-left: 20px;
    color: white;
  }

  .row-cards {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
  }

  &.row-cards::-webkit-scrollbar {
    display: flex;
  }
`;

export const Image = styled.img`
  margin-right: 9px;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.08);
  }
`;

export const H2 = styled.h2`
  &.row-header {
    margin-left: 10px;
    font-family: "Courier New", Courier, monospace;
    font-size: 2.3rem;
  }
`;
