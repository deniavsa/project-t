import React from "react";

import {  
  Header,
  ContainerHeader,
  ItemHeader,
  ItemInput,
  LogoItem,
  ImgLogin,
  ItemMenu,
  ItemCart,
} from "./styles";
import logo from '../../assets/logo-pague-menos.svg';
import login from '../../assets/login.svg';
import menu from '../../assets/icon-menu.svg';
import cart from '../../assets/cart.svg';

 const HeaderFunc = () =>{
  return (
    <>
    <Header>

      <ContainerHeader>
        <LogoItem src={logo} />        
        <ItemHeader>
          <ImgLogin src={login}/>
          <h6>Entrar</h6>
        </ItemHeader>
      </ContainerHeader>

      <ContainerHeader>
        <ItemMenu src={menu} />
        <ItemInput placeholder="O que você procura?"/>
        <ItemCart src={cart} />
      </ContainerHeader>
    </Header>
    {/* <Text>asdfasdfasd</Text> */}
  </>
    
  );
}

export default HeaderFunc;