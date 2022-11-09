import React from "react";
import { FormDataProps } from "./userprofile";
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
        
      <h2>twoje wydarzenie</h2>
      </div>
      <div className="box">
        
      
       Brak. Zrobie na next zajecia bo koleszka od bazy trzyma mnie ;c
      

     </div>
    
     
    </Wraps>
  );
}

export default Two