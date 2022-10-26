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
    border: 2px solid black ;
    border-radius: 14px;
}
input.catering{
  height: 50px;
  width: 18px ;
  font-size:20px ;
  margin-top:-20px;
  border: 2px solid black ;
}

`;
export function Three({formData, setFormData}: FormDataProps) {
  return (
    
    <Wrapper>
        <h3>
          Jaki typ lokum Cie interesuje? 
        </h3>
      <select  onChange={(e)=> setFormData({...formData, lokale: e.target.value})}  form="carform">
      
      <option  value="Bar"><p>Bar</p></option>
      <option  value="Sala">Sala Konferencyjna</option>
      <option  value="Restauracja">Restauracja</option>
      <option  value="Kawiarnia">Kawiarnia</option>
      <option  value="Dom Weselny">Dom Weselny</option>
       </select>
       <h3>
          Czy będziesz potrzebował kateringu/jedzenia? 
        </h3>
      <input className="catering" onChange={(e)=> setFormData({...formData, catering: !formData.catering})} checked={formData.catering}type="checkbox"></input>
      <h3>
        Czy potrzebujesz fotografa?
      </h3>
      <input className="catering" onChange={(e)=> setFormData({...formData, photo: !formData.photo})} checked={formData.photo}type="checkbox"></input>
    </Wrapper>
  );
}

export default Three;