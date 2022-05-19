import React, {FC} from 'react';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
export const TopNav: FC = () => {
  return (
    
    <div id="flex-container">
      <div id="logo">
      <img src={logo} alt="" id="icon_logo"/>
      </div>
      <div id="item">
        Kreator
      </div>
      <div id="item">Oferta</div>
      <div id="item">Kontakt</div>
      <div id="item">Logowanie</div>
    </div>
      
  );
};

export default TopNav;