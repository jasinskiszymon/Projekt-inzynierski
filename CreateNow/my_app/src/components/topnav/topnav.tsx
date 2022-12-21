/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, ReactNode, useEffect, useState} from 'react';
import {Link as Scroll} from 'react-scroll';
import logo from '../../icon/logo.png'
import '../../css/topnav.css';
import {Link, useNavigate} from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut, } from 'firebase/auth';


import AuthRoute, { IAuthRouteProps } from '../login/authroute';

export const TopNav: React.FunctionComponent<IAuthRouteProps> = () => {
  const navigate = useNavigate();
  const auth = getAuth();

const currentusers = (auth.currentUser?.displayName);
const currentusers_by_mail = (auth.currentUser?.email);
const Logout = () =>{
  console.log(auth.currentUser)
  signOut(auth);
  window.location.reload();

}
 
  return (
   
    <div id="flex-container">
      <AuthRoute></AuthRoute>
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
          <a id="hover_effect">Oferta </a>
      </Scroll>
      </div>
      <div id="item">
        <Scroll  to="contacts" spy={true} smooth={true}>
          <a id="hover_effect">Kontakt</a>
      </Scroll>
      </div>
      <span id="item" onClick={()=>{
        if(currentusers_by_mail == null && currentusers == null ){
            
        }
        else {
          
         navigate('userprofile');
        }}}
        
        > 
         {currentusers != null?   currentusers: currentusers_by_mail} 
        
       
      
        
        </span>
      
      <div id="loginbox">
      <span id="login_button" onClick={()=>{
        if(currentusers_by_mail == null && currentusers == null){
          navigate('login_form');
        }
        else {
          Logout();
        }}}>
        {currentusers_by_mail == null && currentusers == null? "Logowanie" : "Wyloguj"}
        </span>
      
     
     
      </div>
    </div>
   
    
      
     
    
      
   
  );
};

export default TopNav;


