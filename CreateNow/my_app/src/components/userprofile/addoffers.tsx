import React, { useContext, useState } from "react";
import {Formik, Form, Field} from 'formik';

import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { updateCurrentUser } from "firebase/auth";
import v from "../offers/arrayComponents"

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
  width:65%;

  
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
width: 580px;
    
.plik{
      
      width: 190px;
      border: none;
      height:22px ;
    }
    .check{
      width:20px;
    
    }

    }
  input{
    width: 188px ;
    height:20px ;
    border: 1px solid gray;
    
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
    border: 2px solid #1ec01e;
     color:white;
    background-color: #1aa01a;

   

     }
     .left-content{
     
      width:70% ;
     }
     .right-content{
      border-left: 2px solid lightgray;
      width:30%;
      height:90%;
      padding-left: 30px ;
      padding-top: 100px ;
      display:flex;
      align-items: end;
      flex-direction:column;
      justify-content:flex-end;
     }
`;

export function Three() {


    const [name, setName] = useState('');
    const [desc, setDesc] = useState([v]);
    const [category, setCategory] = useState('');
  return (
    <Wrapper>
      <div className="top-box"><h4>Dodaj oferte do bazy:</h4></div>
      <div className="box-content">
        
      <div className="left-content">
      <div className="form1">
      

     <p>Lokalizacja: <select form="carform">
      <option className="test"  value="Kraków"><p>Kraków</p></option>
      <option  value="Warszawa">Warszawa</option>
      <option  value="Kalisz">Kalisz</option>
      <option  value="Wrocław">Wrocław</option>
      <option  value="Lublin">Lublin</option>
      <option  value="Poznań">Poznań</option>
      <option  value="Rzeszów">Rzeszów</option>
      <option  value="Opole">Opole</option>
      <option  value="Białystok">Białystok</option>
      <option  value="Zakopane">Zakopane</option>
      
    </select> </p>
      
    
     <p>Tytuł oferty:  <input type="text"></input></p>
      </div>
      <div className="form1">
      
      <p>Kategoria: <select form="carform">
      <option className="test"  value="Lokale"><p>Lokale</p></option>
      <option  value="Samochody">Samochody</option>
      <option  value="Catering">Catering</option>
      <option  value="Muzyka">Muzyka</option>
      <option  value="Fotografia">Fotograf</option>
      <option  value="Kamerzysta ">Kamerzysta</option>
      <option  value="Dodatki">Dodatki</option>
    
      
    </select> </p>
      
       
      
      <p>Cena:  <input type="number"></input> </p>
       </div>
      <div className="form1">
      
      <p>Krótki opis: <input type="text" className="opis"></input></p>
      
     
      <p>Zdjęcie:  <input type="file" className="plik"></input> </p>
      </div>
      <div className="form1">
      
      <p>Nr telefonu: <input type="number" ></input></p>
      <p>Potwierdz swój wybór: <input className="check" type="checkbox"></input></p>
     
     
      
  
      </div>

      </div>
      <div className="right-content">
     
        <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
           Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
           Orci varius natoque penatibus et magnis</p>
        <span className="button_styled">Dodaj</span>
      </div>
      </div>
    </Wrapper>
  );
}

export default Three;