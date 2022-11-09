/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react';
import {Link as Scroll} from 'react-scroll';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
import {Link, useNavigate} from "react-router-dom";
import { getAuth, signOut, } from 'firebase/auth';
import AuthRoute from '../login/authroute';
import { useWindowScroll } from 'react-use';

export interface IHomePageProps {}

export const TopNav: React.FunctionComponent<IHomePageProps> = () => {
  const auth = getAuth();
  const currentusers = (auth.currentUser?.displayName);
  const navigate = useNavigate();
  const Logout = () =>{
    console.log(auth.currentUser)
    signOut(auth);
    window.location.reload();
    localStorage.removeItem('name');
   
  }
  
  
  const b = localStorage.getItem("name");

    
 
    
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
      <span id="item" onClick={()=>{
        if(b == null && currentusers == null ){
            
        }
        else {
          
         navigate('userprofile');
        }}}
        
        > {currentusers}{localStorage.getItem("name")}</span>
      
      <div id="loginbox">
      <span id="login_button" onClick={()=>{
        if(b == null && currentusers == null){
          navigate('login_form');
        }
        else {
          Logout();
        }}}>
        {b == null && currentusers == null? "Logowanie" : "Wyloguj"}
        </span>
      
     
     
      </div>
    </div>
   
    
      
     
    
      
    </AuthRoute>
  );
};

export default TopNav;


