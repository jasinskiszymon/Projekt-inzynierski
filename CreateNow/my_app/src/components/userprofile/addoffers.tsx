import React, { useContext, useState } from "react";
import {Formik, Form, Field} from 'formik';

import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { updateCurrentUser } from "firebase/auth";
import v from "../offers/arrayComponents"

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
    font-size: 17px;
    width: 300px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 3px;
    border: 2px solid #279e1c;
    color: white;   
    background-color: #1eb332;

   

     }
`;

export function Three() {

    
    const [name, setName] = useState('');
    const [desc, setDesc] = useState([v]);
    const [category, setCategory] = useState('');
  return (
    <Wrapper>
      <div className="form0">
      <input type="text" placeholder="nazwa"  value={name} onChange={(e) => setName(e.target.value)} required/>

     <p>add offerts component</p>
     
      
      <button className="button_styled" >Dodaj do offert</button>
      </div>
    </Wrapper>
  );
}

export default Three;