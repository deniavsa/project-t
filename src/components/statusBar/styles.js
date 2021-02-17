import styled from "styled-components";

export const Section = styled.section`
 width: 100vw;
 height:50vh;
 background:gold;  
 display:flex;
 justify-content: space-around;

 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;

export const Article = styled.article`
 width: 40vw;
 height:50vh;
 background:gray;  
 display:flex;


 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;
