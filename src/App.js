import React from "react";

import Global from "./styles/global";
import Header from "./components/header"
import Banner from "./components/banner"
import StatusBar from './components/statusBar'
import Card from './components/cards'
import BoxEmail from './components/boxEmail'
import Footer from './components/footer'


const App = ()=> {
  return (
    <>
      <Global />
      <Header/>
      <Banner/>
      
      <StatusBar/>
      <Card/>
      <BoxEmail/>
      <Footer/>
      {/* <Home boxData={data} /> */}
    </>
  );
}

export default App;





