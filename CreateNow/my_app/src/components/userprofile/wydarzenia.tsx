import React, { useEffect, useState } from "react";
import { deleteEvent, eventsCollection } from "../../config/controllers";
import alert from '../../icon/alert.png'
import styled  from 'styled-components';
import { getAuth} from "firebase/auth";
import { NewEventType } from "../../config/types/event";
import { DocumentData, onSnapshot, query, QuerySnapshot, where } from "firebase/firestore";
import {Link, useNavigate} from "react-router-dom";
import form_icon from "../../icon/creator_form_success.png";
import { isArrayTypeNode } from "typescript";
const Content = styled.div`

height: 420px;
display:flex;
flex-direction:column ;
   
     span{
    display:flex ;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border:none;
    color:white;
   
  }
  .left-content{
    display: flex;
    flex-direction:column;
    justify-content: center;
    height: 410px;
    width: 100%;
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
          display: flex;
          flex-wrap:wrap ;
          align-items:center ;
          text-align: center; 
          height: 330px;
        
          .alert{
          
            width: 95%;
            display: flex;
            flex-wrap:wrap ;
            justify-content: space-around;
            text-align: center;
            
            .alert-content{
              
              width: 60%;
              display: flex;
              flex-wrap:wrap ;
              justify-content: space-around;
              text-align: center;
              


              
            }
          }
        }

        .wrapper-box{
          width: 100%;
          
          display: flex;
          align-items: center;
          .position-box{
            display: flex;
           
           
            width: 100%;

          }
          .left-side{
            border-right: 2px solid #d1d0d0; 
            width: 100%;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: flex-start;  
          }
          .right-side{
           
            width: 100%;
            height: 320px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            align-content: flex-start;  
            
              .button_styled{
                height: 35px;
                width: 155px;
                font-size: 15px;
                background-color: #fd4141;
              }
            
          }
          p{
            font-size: 16px;
            width: 97%;
            
            display: flex;
            
            flex-wrap: wrap;
            
            align-items: center;
            align-content: flex-start;  
            margin-left: 3px;
          }
          .del-button{
            height: 100px;
            width: 100%;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #d1d0d0 ;
            justify-content: space-around;

          }
          .testtt{
            
            font-size: 15px;
            width: 60%;
          }
         .icon{
          border-bottom: 2px solid #d1d0d0 ;
          width: 100%;
          height: 100px;
         }
         b{
          margin-right: 2px;
          color: #666666;
         }
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
  
    
  
    
    
    
    <div className="left-content">
      <div className="left-left-content"> 
    
    <h3>Twoje wydarzenie  </h3>
    </div>
      <div className="right-left-content">
       {event.length>0? 
       <div className="wrapper-box"> 
        
      {event.map((array) => 

      
        



      <div className="position-box">
        <div className="left-side">
          <div className="icon">
      <img src={form_icon} alt=""></img>
      </div>
      <p> <b> Numer wydarzenia:</b>  {array.id}</p>
      
     

      <p><b>Wybrany lokal:</b> {array.lokale}</p>
      <p><b>Samochód: </b>{array.samochody}</p>
      <p><b>Catering:</b> {array.catering}</p>
      </div>
      
      <div className="right-side">

      <div className="del-button">
      <div className="testtt">
        <h3>Uwaga!</h3>
        <i>Usunięcie wydarzenia jest nieodwracalne!Vivamus dictum nulla et</i>
      </div>
      <span className="button_styled" onClick={() => deleteEvent(array.id, navigate)}> Usuń wydarzenie!</span>
      </div>
      <p><b>Muzyka:</b> {array.muzyka}</p>
      <p><b>Fotograf:</b> {array.fotografia}</p>
        
      <p><b>Kamerzysta: </b>{array.kamerzysta}</p>
      <p><b>Dodatki: </b>{array.dodatki}</p>
      </div>
      </div>
      
        )}
        
     </div>
        :
        
        <div className="alert">
          <div className="alert-content">
        <img style={{width:"100px"}} src={alert} alt=""/>
        <h3>Ups, niestety w bazie danych nie znaleziono zadnego przypisanego do ciebie wydarzeni :( </h3>
        
        <p>
          Niestety nie masz jeszcze żadnego utworzonego wydarzenia. Aby utworzyć wydarzenie skorzystaj z naszego kreatora na stronie głownej.

        </p>
        </div>
        </div>
         
        
       } 
    </div>
    
    </div>
    
    
    
    
    </div>
   
  </Content>
    
  );
}

export default Two;






