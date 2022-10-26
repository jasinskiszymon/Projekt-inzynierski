import React from "react";
import { FormDataProps } from "./Final";
import styled  from 'styled-components';

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
        <h3>
         Dziekujemy za utworzenie formularza. Wejdz na swój profil by sprawdzic jak wygląda!
        </h3>
     
    </Wrapper>
  );
}

export default Five;