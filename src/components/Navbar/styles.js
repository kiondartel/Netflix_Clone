import styled from 'styled-components';

export const Container = styled.div`

  &.nav-container-black{
    background-color: #111;
  }

  &.nav-container{
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    padding: 20px;

    transition-timing-function: ease-in;
    transition: all 0.5s;
  }
`;

export const Image = styled.img`

  &.nav-logo{
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
  }

  &.nav-avatar{
    position: fixed;
    right: 30px;
    width: 35px;
    object-fit: contain;
    border-radius: 0.3cm;
  }
  
`;