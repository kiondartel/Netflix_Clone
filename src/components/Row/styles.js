import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 850px;
  padding: 20px;
  margin-bottom: 150px;
  
  .row-container {
    margin-left: 20px;
    color: white;
    
  }

  .row-cards {
    display: flex;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 20px;
    width: 100%;
    
  }
`;

export const H2 = styled.h2`
  
`;

export const Image = styled.img`
  padding: 2px;
  transition: transform 450ms;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.08);
  } 
`;