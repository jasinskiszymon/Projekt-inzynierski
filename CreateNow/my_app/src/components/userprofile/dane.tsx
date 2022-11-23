import React from "react";
import {Formik, Form, Field} from 'formik';

import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { updateCurrentUser } from "firebase/auth";
const Wrapper = styled.div`
  display: flex ;
  align-items:center ;
  flex-direction: column;
  justify-content: center; 

width: 100%;
margin: 0 auto;
height: 50vh;
.form0{display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
width: 840px;

  input{
    width: 300px ;
    
    margin-left:10px ;
  }}
  .form1{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 50px ;
width: 840px;
 
  input{
    width: 300px ;
    
    margin-left:10px ;
  }
  }
  .form2{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 50px ;
width: 840px;
input{
    width: 300px ;
    
    margin-left:10px ;
  }
  }
  .form3{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 50px ;
width: 840px;
input{
    width: 300px ;
   
    margin-left:10px ;
  }
  }
  input{
      width: 280px;
      height: 41px;
      margin: 1px 0;
      border:none;
      border-bottom:1px solid black;
      font-size: 17px;
       }
       input:focus{
       outline: none;
      }
     .button_styled{
    font-weight: 600;
    width: 300px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 3px;
    border: 2px solid #1D75B8;
    color: white;   
    background-color: #1D75B8;

   

     }
`;

export function One() {
  return (
    <Wrapper>
      <div className="form0">
      
      <input  type="text"   placeholder="Imię"></input> 
      
     
      <input type="password"   placeholder="Ustaw nowe hasło"></input> 
      </div>
      <div className="form1">
      
      <input  type="text"   placeholder="Nazwisko"></input> 
      
     
      <input type="password"   placeholder="Ponownie wpisz nowe hasło"></input> 
      </div>
      <div className="form2">
      
      <input type="text"  placeholder="Nazwa użytkownika "></input> 
      <input type="password"   placeholder="Potwierdz zmiany wpisując hasło"></input> 
      </div>
      <div className="form3">
      
      <input type="date" placeholder="Data urodzenia" value="1999-07-22"></input> 
      
      
      <button className="button_styled">Zatwierdz zmiany</button>
      </div>
    </Wrapper>
  );
}

export default One;