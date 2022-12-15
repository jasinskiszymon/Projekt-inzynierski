import React, { useEffect, useState } from "react";
import { deleteEvent, eventsCollection } from "../../config/controllers";
import alert from '../../icon/alert.png'
import styled  from 'styled-components';
import { getAuth} from "firebase/auth";
import { NewEventType } from "../../config/types/event";
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import UserProfile from "./userprofile";
const Content = styled.div`

height: 420px;
display:flex;
flex-direction:column ;
     .right-content{
      border-left: 2px solid lightgray;
      width:30%;
      display:flex;
      align-items: center;
      flex-direction: column;
      justify-content: end;
      padding-left: 15px;
      padding-right: 5px ;
     
     }
     span{
     font-size: 17px;
    width: 300px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 3px;
    border:none;
    color:white;
    background-color: #1aa01a;
  }
  .left-content{
    display: flex;
    flex-direction:column;
    justify-content: center;
    height: 400px;
    width: 70%;
    
    align-items: center;
    
    

 
    
  label {
    display: flex;
    align-items:left;
    justify-content: left;
    margin-left:3%;
    margin-bottom:2px ;
    
    
  }
  }
  .box{
    
    height: 400px;
    width:100%;
    
  }
  .box-content{
    display:flex;
   
    height: 400px;

  }
  .top-box{
    
    display:flex;
    align-items: center;
    width: 100%;
    height: 20px;
    
    
  }
  input{
        height:35px;
        width: 290px;
        border: 1px solid gray; 
        margin-bottom:25px ;
        font-size: 14px;
        border-radius:2px ;


       
      }

      select{
        height:39px;
        width: 293px;
        border: 1px solid gray; 
        margin-bottom:25px ;
        

        font-size: 14px;
        border-radius:2px ;
      }
      input:focus{
                    outline: none;
                }
                .left-form{
                  margin-top: 5px ;
                  display:flex; 
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: center;
                  height: 430px;
                  
                }
                .right-form{
                  margin-top: 5px ;
                  display:flex; 
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: space-around;
                  height: 430px;
                  
                }
                .test{
                width: 165px;
                border: none;
                margin-bottom: -10px ;
                
        }
        h4{
          text-align:center;
        }
        .left-left-content{
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 90%;
          height: 50px;
          display:flex ;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          background-color:#f2f3fc ;
          border: 2px solid #c7cfff;
         
          
        }
        .right-left-content{
          background-color: #f9fafd ;
          width: 90%;
          height: 300px;
          display: flex;
          flex-wrap:wrap ;
          justify-content: space-around;
          text-align: center;
          .alert{
            width: 80%;
            display: flex;
            flex-wrap:wrap ;
            justify-content: space-around;
            text-align: center;
          }
        }

        .loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
`;








export function Two() {
  const [event, setEvent] = useState<NewEventType[]>([]);
  
  const navigate = useNavigate();
  const auth = getAuth();
  const currentusers = (auth.currentUser?.uid);
  console.log(currentusers)
  const dbwquery = query(eventsCollection, where("autor", "==", currentusers));

  const [loading, setLoading] = useState(true);
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
if (loading) return <p></p>


console.log(event)
  return (
    
    <Content>
  

    <div className="box">
  
    
  
    
    
    <div className="box-content" >
    <div className="left-content">
      <div className="left-left-content"> 
    
    <h3>Twoje wydarzenie:          </h3>
    </div>
      <div className="right-left-content">
       {event.length>0? <div> 
        
      {event.map((array) => 

      
        



      <h1>
      TEST:
      {array.miasto}
      Dodatki:
      {array.dodatki}
      <span className="button_styled" onClick={() => deleteEvent(array.id, navigate)}> Usuń wydarzenie!</span>
      </h1>
      
        )}
     </div>
        :
        
        <div className="alert">
        <img src={alert} alt=""/>
        <h3>Ups, niestety w bazie danych nie znaleziono zadnego przypisanego do ciebie wydarzeni :( </h3>
        
        <p>
          Niestety nie masz jeszcze żadnego utworzonego wydarzenia. Aby utworzyć wydarzenie skorzystaj z naszego kreatora na stronie głownej.

        </p>
        </div>
         
        
       } 
    </div>
    
    </div>
    <div className="right-content">
    <div className="top-box"><h3>Usuń wydarzenie!</h3></div>
      <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
         Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
         Orci varius natoque penatibus et magnis</p>
    
      
    </div>
    
    </div>
    
    </div>
   
  </Content>
    
  );
}

export default Two;





{/* <div className="top-box"><h4>Twoje wydarzenie:</h4></div>
<div className="box-content">
  
<div className="left-content">
<div className="form1">


<p>Zespół:  <i>{zespol}</i> </p>


<p>Dodatkowo:  <i>{bonus}</i></p>
</div>
<div className="form1">

<p>Fotograf:  <i>{fotograf}</i></p>
 

<p>Samochód:  <i>{samochod}</i>  </p>
 </div>
<div className="form1">

<p>Katering:  <i>{catering}</i></p>


<p>Cena w zakresie:  <i>{cena} zł</i></p>
</div>
<div className="form1">

<p>Data:  <i>{date}</i></p>
<p>Lokal:  <i>{lokale} </i></p>
</div>
<div className="form1">

<p>Miasto: <i>{miasto}</i></p>



</div>
</div>
<div className="right-content">
  <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
     Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
     Orci varius natoque penatibus et magnis</p>
  <span className="button_styled" onClick={clear}>Usuń</span>
</div>
</div> */}