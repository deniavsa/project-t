import styled from "styled-components";


export const Header = styled.header`
 width: 100vw;
 height:13.78vh;
 /* background:red;   */
 display:flex;
 justify-content:center;
 flex-direction:column;

 @media (min-width: 768px) {
  background:silver;  
  }

  @media (min-width: 1024px) {
  background:blue;  
  }
`;

export const ContainerHeader = styled.nav`
 min-width:90vw; 
 height:5vh;
 margin-top:1vh;
 /* background:gold; */
 display:flex;
 justify-content:space-around;
 /* align-items:center; */

`;

export const LogoItem = styled.img`
 min-width:24vw; 
 height:2.5vh;
 margin-top:1vh;
`;

export const ItemHeader = styled.div`
 min-width:24vw; 
 height:2.5vh;
 margin-top:1vh;
 /* background:green; */
 display:flex;
 align-items:center;
 
`;

export const ImgLogin = styled.img`
 /* min-width:24vw;  */
 height:2.5vh;
 /* margin-top:1vh; */
 /* background:green; */
 /* display:flex; */
 
`;


export const ItemMenu = styled.img`
 min-width:24vw; 
 height:2.5vh;
 margin-top:1vh;
 /* background:black; */
 display:flex;
 align-items:center;
 
`;


export const ItemInput = styled.input`
 min-width:29,14147521160822; 
 height:2.5vh;
 margin-top:1vh;
 border: 2px solid #CACBCC;
 /* background:green; */
 /* display:flex; */
 
`;

export const ItemCart = styled.img`
 /* min-width:24vw;  */
 height:3.5vh;
 /* margin-top:1vh; */
 /* background:black; */
 /* display:flex; */
 /* align-items:center; */
 
`;
















// export const Text = styled.p`
//  font-size:1.2rem;
//  /* display:flex; */

//  @media (min-width: 375px) {
//   font-size:0.8rem 
//   }

 
// `;