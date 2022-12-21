import React, { useEffect, useState } from "react";

import { FormDataProps } from "./Final";
import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import { NewHotelType } from "../../config/types/hotel";
import { hotelsCollection } from "../../config/controllers";
import ProgressBar from "@ramonak/react-progress-bar";

const Wrapper = styled.div`
  display: flex ;
  align-items:center ;
  flex-direction: column;
  width: 100%;
  
  .progressbar{
      width: 300px;

    }
    .label {
  font-size: 17px;
  
}
    .container {
  background-color: #d1cacb;
}
  .top{
    border: 1px solid red;
    
  }
  input{
    width: 320px;
    height: 54px;
    border-radius: 14px;
    border: 2px solid black ;
  }

select{
  width: 320px;
    height: 57px;
    font-size: 20px ;
    font-weight: 600 ;
    border: 2px solid #acabab ;
    border-radius: 10px;
    
  span{
    width: 300px;
    height: 40px;
  }
    option{
      padding:5px 0;
    width: 300px;
    height: 40px;
    
    
    
    }
    .test1{
      font-size: 20px ;
    font-weight: 600 ;
    
      
    }
    
}

`;

export function One({formData, setFormData}: FormDataProps) {

 



  return (
   
    <Wrapper>
      
      <h3>Podaj miasto, które Cie interesuje: </h3>
      {/* <ProgressBar completed="33" className="progressbar"  labelClassName="label"  barContainerClassName="container" /> */}
      <select className="selectpicker" onChange={(e)=> setFormData({...formData, miasto: e.target.value})}  >
      
      <option value="" disabled selected><p className="demo-2">Wybierz z listy...</p></option>
      <option  value="Kraków">Kraków</option>
      <option  value="Warszawa">Warszawa</option>
      <option  value="Kalisz">Kalisz</option>
      <option  value="Wrocław">Wrocław</option>
      <option  value="Lublin">Lublin</option>
      <option  value="Poznań">Poznań</option>
      <option  value="Rzeszów">Rzeszów</option>
      <option  value="Opole">Opole</option>
      <option  value="Białystok">Białystok</option>
      <option  value="Zakopane">Zakopane</option>
      </select>
      
    </Wrapper>
  );
}

export default One;