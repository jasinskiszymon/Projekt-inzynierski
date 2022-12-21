import React, {FC, ReactNode, useEffect, useState} from 'react';
import Topnav from './components/topnav/topnav';
import Creator from './components/creator/creator';
import Offers from './components/offers/offers';
import About from './components/about/about';
import About_second from './components/about/about_second';
import Footer from './components/topnav/footer';
import {config} from './config/config';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AuthRoute from './components/login/authroute';


initializeApp(config);
export interface IApplicationProps {}



function AppWrapper() {
  return (
    <AuthRoute>
    
      <Topnav />
      <About />
      <About_second />
      <Creator></Creator>

      <Offers/>
      <Footer />



    
    </AuthRoute>
  );
}

export default AppWrapper;
