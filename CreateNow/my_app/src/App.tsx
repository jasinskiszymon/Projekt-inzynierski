import React, {FC} from 'react';
import Topnav from './components/topnav/topnav';
import Creator from './components/creator/creator';
import Offers from './components/offers/offers';
import About from './components/about/about';
import About_second from './components/about/about_second';
import Footer from './components/topnav/footer';
import LoginForm from './components/login/loginform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export const AppWrapper: FC = () => {
  return (
    <div>
   
     
      <div id="up-link"/>
       <Topnav />
      
       
         <About/>
         
         <About_second/>
      
         
      <Creator></Creator>
      <Offers/>
      <Footer/>
      
    
    </div>
  );
};

export default AppWrapper;
