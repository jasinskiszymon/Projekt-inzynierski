import React, { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';

import { LoginForm } from './components/login/loginform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import UserProfile from './components/userprofile/userprofile';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/config';
import AuthRoute from './components/login/authroute';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  

  
);


root.render(


  
 
   
  <Router>
  <Routes>
  
      
      <Route path="/userprofile" element={
        <AuthRoute>
      <UserProfile/>
      </AuthRoute>
      }>
      
       </Route>
       <Route path="/login_form" element={<LoginForm/>}>
       </Route>
       <Route path="/" element={
       <AuthRoute>
       <AppWrapper/>
       </AuthRoute>
       
       }>
        
       </Route>
      
      
 </Routes>
  </Router>
 
 
);

reportWebVitals();
