import React from "react";
import logo from '../logo.svg';
import Title from "./Title"
import Description from "./Description"

const header = () =>{
  return(
    <header>
      <img src={logo} className="App-logo" alt="logo"/>
      <Title data="Welcome to React Ironhacker"/>
      <Description data="You are ready to take this to the next level :)!"/>
    </header>
  )
}

export default header;