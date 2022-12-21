import React from "react";
import { FormDataProps } from "./Final";
import styled  from 'styled-components';
import success from '../../icon/creator_form_success.png';
const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
height: 100%;


`;
export function Five({formData, setFormData}: FormDataProps) {
  return (
    
    <Wrapper>
        <img src={success} alt=""></img>
        <h3>
         Dziekujemy za uzupełnienie formularza. Kliknij <i style={{color: "green"}}>"zatwierdz"</i> w celu potwierdzenia.
        </h3>
     
    </Wrapper>
  );
}

export default Five;