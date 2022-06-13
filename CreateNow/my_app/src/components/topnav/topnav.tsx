/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react';
import {Link as Scroll} from 'react-scroll';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
import {Link} from "react-router-dom";
import { getAuth, signOut, } from 'firebase/auth';
import AuthRoute from '../login/authroute';
export interface IHomePageProps {}

export const TopNav: React.FunctionComponent<IHomePageProps> = () => {
  const auth = getAuth();
  const currentusers = (auth.currentUser?.displayName);
  
  const Logout = () =>{
    console.log(auth.currentUser)
    signOut(auth);
    window.location.reload();
    localStorage.removeItem('name');
   
  }
  return (
    <AuthRoute>
    <div id="flex-container">
      
      <div id="logo"><Scroll  to="up-link" spy={true} smooth={true}>
      <img src={logo} alt="" id="icon_logo"/>
      </Scroll>
      </div>
      <div id="item">
        
          <a id="hover_effect"></a>
          
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
      <div id="item"> {currentusers}{localStorage.getItem("name")}</div>
      <div id="loginbox">
      <span id="login_button" onClick={Logout}><a className='log_text'>Logout</a></span>
      
     
      <span id="login_button"><Link to="login_form"><a className='log_text'>Logowanie</a></Link></span>
      </div>
    </div>
    
    </AuthRoute>
  );
};

export default TopNav;


