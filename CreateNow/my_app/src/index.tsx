import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppWrapper from './App';
import reportWebVitals from './reportWebVitals';

import { LoginForm } from './components/login/loginform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Router>
  <Routes>
       <Route path="/login_form" element={<LoginForm/>}>
       </Route>
       <Route path="/" element={<AppWrapper/>}>
       </Route>
 </Routes>
  </Router>
  </React.StrictMode>
 
);

reportWebVitals();
