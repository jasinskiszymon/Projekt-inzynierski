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
      
    </select>
      <h3> Podaj odpowiadająca Ci date: </h3>
     
    </Wrapper>
  );
}

export default One;