import React, {FC, useState} from 'react';
import styled  from 'styled-components';
import One from './step_one';
import Two from './step_two';
 import Three from "./step_three";
 import Four from "./step_four";
 import Five from "./step_five";
import { StringifyOptions } from 'querystring';
import { ShorthandPropertyAssignment } from 'typescript';
import { useWindowScroll } from 'react-use';
const Wrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 30px;
margin-bottom: 40px;
border: 2px solid #ececec ;
width: 92vh;
height: 44vh ;
background-color: #f8f8fc;

 .prev{
    
    width: 170px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #1D75B8;
    background-color: #1D75B8;
    font-size: 16px ;
    margin-left: 4px;
    color: #ffffff;
 }
 .next{
    
    font-size: 16px ;
    width: 170px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    border: 1px solid #009113;
    margin-left: 4px;
    background-color: #009113;
    color: #ffffff;
 }

  .next:hover {
  border: 2px solid #cecef1;
  font-size: 16px;
}
.prev:hover {
  border: 2px solid #cecef1;
  font-size: 16px;
}
.forms{
height: 31vh ;


}
 .content{
  width: 85vh;
  height: 40vh ;
 }
 .button-box{
  margin-top: 30px ;
  display: block;
  display: flex;
    flex-direction: row;
    align-items: center ;
justify-content: space-around;


float: bottom;


    
 }
`;

export interface FormProps{
  formData: {
    miasto: string
    samochod: string
    photo: boolean
    lokale: string
    cena: string
    band: string
    date: string
    bonus: string
    catering: boolean
    yourDataCorrect: boolean

  }
}
export interface CompleteFormState {
  miasto: string
  samochod: string
  photo: boolean
  lokale: string
  cena: string
  band: string
  date: string
  bonus: string
  catering: boolean
  yourDataCorrect: boolean

}

export interface FormDataProps extends FormProps{
  setFormData: React.Dispatch<React.SetStateAction<CompleteFormState>>
}
export const MyForm: FC = () => {
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    miasto: "",
    samochod: "",
    photo: false,
    lokale: "",
    cena: "",
    band: "",
    bonus: "",
    date: "",
    catering: false,
    yourDataCorrect: false,

  })
  const FormTitles=["One","Two", "Three", "Four", "Five"]

  const formDisplay = () =>{
    if(page === 0){
      return <One formData={formData} setFormData={setFormData}/>
    } else if (page === 1){
      return <Two formData={formData} setFormData={setFormData}/>
    }
    else if (page === 2){
      return <Three formData={formData} setFormData={setFormData}/>
    }
    else if (page === 3){
      return <Four formData={formData} setFormData={setFormData}/>
    }
    else if (page === 4){
      return <Five formData={formData} setFormData={setFormData}/>
    }

    }
    

  


  return (
    
      
         <Wrapper>
          <div className='content'>
            <div className='forms'>
          {formDisplay()}
          </div>
          <div className='button-box'>
          
          <button className='prev' disabled={page ===0} onClick={()=>setPage((currPage) => currPage - 1)}>Poprzednia strona</button>
          <button className='next' disabled={page ===5} onClick={()=>{if(page===FormTitles.length-1){
           
            console.log(formData);

            let miasto = formData.miasto;
            let cena = formData.cena;
            let zespol = formData.band;
            let bonus = formData.bonus;
            let lokale = formData.lokale;
            let data = formData.date;
            let catering = formData.catering;
            let fotograf = formData.photo;
            let samochod = formData.samochod;
            if(catering == true)
            {
              localStorage.setItem("catering", "Dostepny");
            }
            else{
              localStorage.setItem("catering", "Brak")
            }
            if(fotograf == true)
            {
              localStorage.setItem("fotograf", "Dostepny");
            }
            else{
              localStorage.setItem("fotograf", "Brak")
            }
            localStorage.setItem("miasto", miasto);
            localStorage.setItem("cena", cena);
            
            localStorage.setItem("zespol", zespol);
            localStorage.setItem("bonus", bonus);
          
            localStorage.setItem("lokale",lokale);
            localStorage.setItem("data", data);
          
            localStorage.setItem("samochod",samochod);

            window.location.reload();

            
          }
          else{
            setPage((currPage) => currPage + 1)
          }
          }}>
        {page===FormTitles.length- 1? "Zatwierdź!" : "Następna strona"}</button>
        </div>
        </div>
    </Wrapper>
 

          
   
   
  );

  }
  export default MyForm;