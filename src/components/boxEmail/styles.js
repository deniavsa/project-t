import styled from "styled-components";

export const Section = styled.section`
 width: 100vw;
 height:50vh;
 background:white;  
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
 background:black;  
 /* display:flex; */
 box-shadow: 2px 5px 10px 3px rgba(0,0,0,0.75);
 


 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;
