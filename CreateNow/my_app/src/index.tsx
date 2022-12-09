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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  

  
);


root.render(


  
  <React.StrictMode>
   
  <Router>
  <Routes>
  
      
      <Route path="/userprofile" element={<UserProfile/>}>
      
       </Route>
       <Route path="/login_form" element={<LoginForm/>}>
       </Route>
       <Route path="/" element={<AppWrapper/>}>
        
       </Route>
      
      
 </Routes>
  </Router>
  </React.StrictMode>
 
);

reportWebVitals();
