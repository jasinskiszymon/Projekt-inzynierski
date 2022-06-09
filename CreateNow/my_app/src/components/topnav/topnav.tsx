import React, {FC} from 'react';
import {Link} from 'react-scroll';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
export const TopNav: FC = () => {
  return (
    
    <div id="flex-container">
      
      <div id="logo"><Link  to="up-link" spy={true} smooth={true}>
      <img src={logo} alt="" id="icon_logo"/>
      </Link>
      </div>
       <div id="item">
        <Link  to="creator" spy={true} smooth={true}>
          <a id="hover_effect">Kreator</a>
      </Link>
      </div>
      <div id="item">
        <Link  to="offerts" spy={true} smooth={true}>
          <a id="hover_effect">Oferta</a>
      </Link>
      </div>
      <div id="item">
        <Link  to="contacts" spy={true} smooth={true}>
          <a id="hover_effect">Kontakt</a>
      </Link>
      </div>
      <div id="loginbox">
        <span id="login_button">Logowanie</span>
      </div>
    </div>
      
  );
};

export default TopNav;