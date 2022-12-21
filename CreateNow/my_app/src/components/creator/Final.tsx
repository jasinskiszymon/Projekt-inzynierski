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
import alert from '../../icon/alert.png'
import { Link } from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";
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

.alert{
            width: 70%;
            display: flex;
            flex-wrap:wrap ;
            justify-content: space-around;
            text-align: center;
          }
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
  border: 2px solid #fdfdfd;
  font-size: 16px;
}
.prev:hover {
  border: 2px solid #fdfdfd;
  font-size: 16px;
}
.forms{
height: 300px ;

display: flex;
align-items: center;
justify-content: center;

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
 .login-nav-btn{
  display: flex;
  align-items: center;
  justify-content: center;

  button{

    
  }
 }
 .displaybox{
  width: 550px;
  height: 300px;

.barCompleted {
  background-color: lightblue;
  width: 30px;
  transition: width 1s;
}
.barCompleted2 {
  background-color: lightblue;
  width: 25%;
  transition: width 1s;
}
.barCompleted3 {
  background-color: lightblue;
  width: 50%;
  transition: width 1s;
}
.barCompleted4 {
  background-color: lightblue;
  width: 75%;
  transition: width 1s;
}
.barCompleted5 {
  background-color: lightblue;
  width: 100%;
  transition: width 1s;
}
.test2{
 
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;

}
.finish-box{

  height: 300px;
}
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
    const Toast = Swal.mixin({
      position: 'center',
      timer: 3000,
      timerProgressBar: true,
    })
    Toast.fire({
      icon: 'success',
      title: 'Brawo, twoje wydarzenie zostało utworzone...',
      text: 'Wejdz na panel użytkownika, kilkając na swoje imie i nazwisko a nastepnie sprawdz swoje wydarznie!',
      confirmButtonColor: '#00a700',
      confirmButtonText: 'Ok!',

    })
  

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
      return <div className='displaybox'><ProgressBar  completedClassName="barCompleted" completed={0}></ProgressBar><div className='test2'><One formData={formData} setFormData={setFormData}/></div></div>
    } else if (page === 1){
      return <div className='displaybox'><ProgressBar completedClassName="barCompleted2"completed={25}></ProgressBar><div className='finish-box'><Two formData={formData} setFormData={setFormData}/></div></div>
    }
    else if (page === 2){
      return <div className='displaybox'><ProgressBar completedClassName="barCompleted3" completed={50}></ProgressBar><div className='finish-box'><Three formData={formData} setFormData={setFormData}/></div></div>
    }
    else if (page === 3){
      return <div className='displaybox'><ProgressBar completedClassName="barCompleted4"completed={75}></ProgressBar><div className='finish-box'><Four formData={formData} setFormData={setFormData}/></div></div>
    }
    else if (page === 4){
      return  <div className='displaybox'><ProgressBar completedClassName="barCompleted5"completed={100}></ProgressBar><div className='finish-box'><Five formData={formData} setFormData={setFormData}/></div></div>
    }

    }
    

  

    if (loading) return <p></p>
   
    return (
    
      
         <Wrapper>
          <div className='content'>
          <div className='forms'>
          {currentUser!=null? formDisplay():<div className="alert">
        <img src={alert} alt=""/>
        <h3>Ups, niestety kreator jest dostępny tylko dla zalogowanych urzytkowników :] </h3>
        
        <p>
          Stwórz konto, bądz zaloguj sie za pomocą konta <b style={{color: "#fd4a4a"}}>Google</b> w celu uzyskania dostepu do wszystkich funkcji.

        </p>
        </div>
}
          
          </div>
          {currentUser!=null? 
          <div className='button-box'>
          
          <button className='prev' disabled={page===0} onClick={()=>setPage((currPage) => currPage - 1)}>Poprzednia strona</button>
          <button className='next' disabled={page===5||formData.miasto.length<2} onClick={()=>{if(page===FormTitles.length-1){
           
            
            newEvent();
            console.log(formData);



            
          }
          else{
            setPage((currPage) => currPage + 1)
          }
          }}>
        {page===FormTitles.length- 1? "Zatwierdź!" : "Następna strona"}</button>
        
        </div>
        :  <div className='login-nav-btn'><Link to="login_form"><button className='next'>Zaloguj sie</button></Link></div>}
        </div>
    </Wrapper>
 

          
   
   
  );

  }
  export default MyForm;