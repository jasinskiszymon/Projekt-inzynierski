import React from "react";
import { FormDataProps } from "./Final";
import styled  from 'styled-components';


const Wraps = styled.div`
  display: flex ;
  align-items:center ;
  flex-direction: column;
  select{
  width: 320px;
    height: 60px;
    font-size: 20px ;
    font-weight: 600 ;
    border: 2px solid black ;
    border-radius: 14px;
  }

  input:focus{
        outline: none;
        
    }
  .scroll{
    width: 570px;
    
  }
  .showbox{
    height: 30px;
    width: 150px;
    font-size: 18px;
    background:#f8f8fc ;
    border: 1px solid #f8f8fc;
    border-bottom: 2px solid black ;
    text-align: center;
  }
  .box{
    display:flex ;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    width: 600px;
    
    
  
  }
  .check{

  }
  
  `;
  export function Two({formData, setFormData}:FormDataProps){
  return (
    <Wraps>
      
      <div>
        
      <h2>Jaki jest twój budżet? </h2>
      </div>
      <div className="box">
        
      <input  type="range"className="scroll" name="amountRange" min="500" max="40000" value={formData.cena} onChange={(e) => {
          setFormData({ ...formData, cena: e.target.value });
        }}/>
		  <input step="10000" className="showbox"type="number" name="amountInput" min="500" max="40000" value={formData.cena} onChange={(e) => {
          setFormData({ ...formData, cena: e.target.value });
        }} />
      

     </div>
     <h3>Czy będziesz będziesz potrzebował samochodu?</h3>
     <select   onChange={(e)=> setFormData({...formData, samochod: e.target.value})}  form="carform"> 
     <option  value=""><p>Nie potrzebuje</p></option>
      <option  value="Terenowe">Terenowe</option>
      <option  value="Sportowy">Sportowy</option>
      <option  value="Limuzyna">Limuzyna</option>
      <option  value="Sedan">Sedan</option>
      <option  value="Kombi">Kombi</option>
      <option  value="Bus">Bus</option>
      <option  value="Hatchback">Hatchback</option>
    </select>
     
    
    
    </Wraps>
  );
}

export default Two