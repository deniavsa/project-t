import styled from "styled-components";

export const Section = styled.section`
 width: 100vw;
 height:40vh;
 background:aquamarine;  
 display:flex;
 justify-content: space-around;

 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;

export const ArticleLeft = styled.article`
 width: 40vw;
 height:40vh;
 background:violet;  
 display:flex;


 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;

export const ArticleRight = styled.article`
 width: 40vw;
 height:40vh;


 @media (min-width: 768px) {
  background:silver;  
  display:block;
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;