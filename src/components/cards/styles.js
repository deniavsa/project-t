import styled from "styled-components";

export const Section = styled.section`
 width: 100vw;
 height:50vh;
 background:black;  
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;

 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;

export const Container = styled.article`
 width: 58vw;
 height:37vh;
 background:white;  
 /* display:flex; */
 


 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;
