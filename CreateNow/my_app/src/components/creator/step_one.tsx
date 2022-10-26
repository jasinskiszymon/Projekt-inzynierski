import React from "react";
import {Formik, Form, Field} from 'formik';
import { FormDataProps } from "./Final";
import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
const Wrapper = styled.div`
  display: flex ;
  align-items:center ;
  flex-direction: column;

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
    border-radius: 14px;
    border: 2px solid black ;
    
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

     <select   onChange={(e)=> setFormData({...formData, miasto: e.target.value})}  form="carform">
      <option className="test"  value="Volvo"><p>Kraków</p></option>
      <option  value="Saab">Warszawa</option>
      <option  value="Volvo">Kalisz</option>
      <option  value="Saab">Wrocław</option>
      <option  value="Volvo">Lublin</option>
      <option  value="Saab">Poznań</option>
      <option  value="Volvo">Rzeszów</option>
      <option  value="Saab">Opole</option>
      <option  value="Saab">Białystok</option>
      <option  value="Saab">Zakopane</option>
      
    </select>
      <h3> Podaj odpowiadająca Ci date: </h3>
      <input className="test1" onChange={(e)=> setFormData({...formData, date: e.target.value})} value={formData.date} type="date"></input> 
    </Wrapper>
  );
}

export default One;