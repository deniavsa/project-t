import React from "react";

import {
  Container,
  Box,
  BoxTitle,
  BoxText,
  
  ContainerHeader,
  ItemHeader,
} from "./HomeStyles";
import  Header  from '../../components/header'

export default function Home({ boxData }) {
  return (
    <>
    {/* <Header/> */}
    </>
  );
}

// export default function Home({ boxData }) {
//   return (
//     <Container>
//       <Header/>
//       {boxData.map(box => (
//         <Box key={box.id} bgColor={box.bgColor}>
//           <BoxTitle>{box.title}</BoxTitle>
//           <BoxText>{box.text}</BoxText>
//         </Box>
//       ))}
//     </Container>
//   );
// }
