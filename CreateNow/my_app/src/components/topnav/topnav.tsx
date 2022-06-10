import React, {FC} from 'react';
import {Link as Scroll} from 'react-scroll';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
import {Link} from "react-router-dom";
export const TopNav: FC = () => {
  return (
    
    <div id="flex-container">
      
      <div id="logo"><Scroll  to="up-link" spy={true} smooth={true}>
      <img src={logo} alt="" id="icon_logo"/>
      </Scroll>
      </div>
       <div id="item">
        <Scroll  to="creator" spy={true} smooth={true}>
          <a id="hover_effect">Kreator</a>
      </Scroll>
      </div>
      <div id="item">
        <Scroll  to="offerts" spy={true} smooth={true}>
          <a id="hover_effect">Oferta</a>
      </Scroll>
      </div>
      <div id="item">
        <Scroll  to="contacts" spy={true} smooth={true}>
          <a id="hover_effect">Kontakt</a>
      </Scroll>
      </div>
      <div id="loginbox">
      <span id="login_button"><Link to="login_form">Logowanie</Link></span>
      </div>
    </div>
      
  );
};

export default TopNav;