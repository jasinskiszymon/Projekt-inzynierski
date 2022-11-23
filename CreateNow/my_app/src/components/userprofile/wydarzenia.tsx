import React from "react";
import {Formik, Form, Field} from 'formik';

import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { updateCurrentUser } from "firebase/auth";
import formdata from "../creator/Final";
const Wrapper = styled.div`
  display: flex ;
 
  flex-direction:column;  
  width: 100%;
  margin: 0 auto;
  height: 50vh;
.top-box{
  display: flex ;
  align-items:center;
  justify-content:center ;
  width:70%;

  
}
.box-content{
  display: flex ;
  align-items:center ;
  justify-content: center; 
  margin-left:30px;
  flex-direction:row;  
}
  .form1{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 20px ;
width: 440px;
 
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
    border: 2px solid #ff4848;
     color:white;
    background-color: #f73e3e;

   

     }
     .left-content{
     
      width:70% ;
     }
     .right-content{
      border-left: 2px solid lightgray;
      width:30%;
      height:90%;
      padding-left: 30px ;
      display:flex;
      align-items: end;
      flex-direction:column;
      justify-content:flex-end;
     }
`;



let miasto = localStorage.getItem('miasto');
let zespol = localStorage.getItem('zespol');
let bonus = localStorage.getItem('bonus');
let date = localStorage.getItem('data');
let cena = localStorage.getItem('cena');
let catering = localStorage.getItem('catering');
let lokale = localStorage.getItem('lokale');
let samochod = localStorage.getItem('samochod');
let fotograf = localStorage.getItem('fotograf');


function clear(){
  
  window.localStorage.clear();
  window.location.reload();
}
export function Two() {
  
  return (
    
    <Wrapper>
      <div className="top-box"><h4>Twoje wydarzenie:</h4></div>
      <div className="box-content">
        
      <div className="left-content">
      <div className="form1">
      

     <p>Zespół:  <i>{zespol}</i> </p>
      
    
     <p>Dodatkowo:  <i>{bonus}</i></p>
      </div>
      <div className="form1">
      
      <p>Fotograf:  <i>{fotograf}</i></p>
       
      
      <p>Samochód:  <i>{samochod}</i> </p>
       </div>
      <div className="form1">
      
      <p>Katering:  <i>{catering}</i></p>
      
     
      <p>Cena w zakresie:  <i>{cena} zł</i></p>
      </div>
      <div className="form1">
      
      <p>Data:  <i>{date}</i></p>
      <p>Lokal:  <i>{lokale}</i></p>
      </div>
      <div className="form1">
      
      <p>Miasto: <i>{miasto}</i></p>
      
      
    
      </div>
      </div>
      <div className="right-content">
        <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
           Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
           Orci varius natoque penatibus et magnis</p>
        <span className="button_styled" onClick={clear}>Usuń</span>
      </div>
      </div>
    </Wrapper>
    
  );
}

export default Two;