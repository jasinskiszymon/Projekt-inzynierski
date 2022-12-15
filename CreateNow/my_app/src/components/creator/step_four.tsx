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

select{
  width: 280px;
    height: 35px;
    font-size: 20px ;
    font-weight: 600 ;
    border-radius: 14px;
    border: 2px solid black;
}
input.catering{
  height: 50px;
  width: 18px ;
  font-size:20px ;
  margin-top:-20px;
}
p{
  font-style: oblique;
}
`;
export function Four({formData, setFormData}: FormDataProps) {
  return (
    
    <Wrapper>
        <h3>
         Jaki rodzaj muzyki Cie interesuje?
        </h3>
      <select  onChange={(e)=> setFormData({...formData, muzyka: e.target.value})}  form="carform">
      <option  value=""><p>Nie potrzebuje</p></option>
      <option  value="Pop"><p>Pop</p></option>
      <option  value="Biesiadne">Biesiadne</option>
      <option  value="Disco">Disco-polo</option>
      <option  value="Goralskie">Góralskie</option>
      <option  value="Dj">Muzyka Elektroniczna(DJ)</option>
       </select>
       <h3>
           Jesli interesuja sie dodatki wybierz z listy poniżej:
        </h3>
        <select  onChange={(e)=> setFormData({...formData, dodatki: e.target.value})}  form="carform">
      <option  value=""><p>Nie potrzebuje</p></option>
      <option  value="Fotobudka">Fotobudka</option>
      <option  value="Fajerwerki">Fajerwerki</option>
      <option  value="Wlodzirej">Włodzirej</option>
      <option  value="Boxer">Boxer</option>
      <option  value="Tablica">Tablica</option>
       </select>
      <p>
        Potwierdz swój wybór!
      </p>
      <input type="checkbox"></input>
    </Wrapper>
  );
}

export default Four;