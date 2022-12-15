import React, {FC, useEffect, useState} from 'react';
import styled  from 'styled-components';
import One from './step_one';
import Two from './step_two';
 import Three from "./step_three";
 import Four from "./step_four";
 import Five from "./step_five";
import { getAuth } from 'firebase/auth';
import { addEvent, eventsCollection } from '../../config/controllers';
import Swal from 'sweetalert2';
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from 'firebase/firestore';
import { NewEventType } from '../../config/types/event';
import { map } from '@firebase/util';


const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 30px;
margin-bottom: 40px;
border: 2px solid #ececec ;
width: 970px;
height: 450px ;
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
height: 300px ;


}
 .content{
  width: 950px;
  height: 400px ;
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
    
    autor: string;
    catering: string;
    miasto: string;
    dodatki: string;
    fotografia: string;
    kamerzysta: string;
    lokale: string;
    muzyka: string;
    samochody: string;
    cena: string;
  }
}
export interface AddEventType {
    
  autor: string;
  catering: string;
  miasto: string;
  dodatki: string;
  fotografia: string;
  kamerzysta: string;
  lokale: string;
  muzyka: string;
  samochody: string;
  cena: string;
  
}


export interface FormDataProps extends FormProps{
  setFormData: React.Dispatch<React.SetStateAction<AddEventType>>
}

export const MyForm: FC = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser?.uid;
 
  const currentusers = (auth.currentUser?.uid);
 const [event, setEvent] = useState<NewEventType[]>([]);
 const [loading, setLoading] = useState(true);
 const dbwquery = query(eventsCollection, where("autor", "==", currentusers==null? "":currentUser));
  useEffect(
    () =>
    onSnapshot(dbwquery, (snapshot: QuerySnapshot<DocumentData>) => {
      setEvent(
       snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            
          };
        })
      );
      setLoading(false)
    }),
  []
  );
  


 


  
  const [page, setPage] = useState(0)
  const [formData, setFormData] = useState({
    miasto:"",
    autor: currentUser?currentUser:"",
    catering:"",
    lokale:"",
    dodatki:"",
    fotografia:"",
    kamerzysta:"",
    samochody:"",
    muzyka:"",
    cena:"",
  })
  const newEvent = () =>{
    if(currentUser?.length!=null&&event.length<1){
    addEvent(formData);
    console.log("sukces z new finalka!");
  }
    else{
      const Toast = Swal.mixin({
        position: 'center',
        timer: 3000,
        timerProgressBar: true,
      })
      Toast.fire({
        icon: 'error',
        title: 'Ups, niestety cos poszło nie tak...',
        text: 'Prawdopodobnie nie jestes zalogowany, bądz już masz utworzone jedno wydarzenie. Usuń je i...try again!',
        confirmButtonColor: '#ff5353',
        confirmButtonText: 'Ok!',

      })
    
    }
  }
  
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
    

  

    if (loading) return <p></p>
   
    return (
    
      
         <Wrapper>
          <div className='content'>
          <div className='forms'>
          {currentUser!=null? formDisplay():<div>asd</div>}
          
          </div>
          <div className='button-box'>
          
          <button className='prev' disabled={page ===0&&currentUser==null} onClick={()=>setPage((currPage) => currPage - 1)}>Poprzednia strona</button>
          <button className='next' disabled={page ===5&&currentUser==null} onClick={()=>{if(page===FormTitles.length-1){
           
            
            newEvent();
            console.log(formData);



            
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