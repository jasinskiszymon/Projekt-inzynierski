import {Formik, Form, Field} from 'formik';
import { getAuth, signOut, } from 'firebase/auth';
import AuthRoute from '../login/authroute';
import { Divider } from "@material-ui/core";
import styled  from 'styled-components';
import { updateCurrentUser } from "firebase/auth";
import v from "../offers/arrayComponents"
import React, { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addHotel, hotelsCollection } from "../../config/controllers";

const Content = styled.div`


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
      height: 400px;
     
     }
     button{
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
    flex-wrap: wrap;
    justify-content: center;
    height: 440px;
    width: 70%;
    align-items: center;
    
    

 
    
  label {
    display: flex;
    align-items:left;
    justify-content: left;

    margin-top:6px;
    
  }
  }
  .box{
    
    width:100%;
    
  }
  .box-content{
    display:flex;
   
    height: 410px;

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
                  justify-content: space-around;
                  height: 410px;
                  
                }
                .right-form{
                  margin-top: 5px ;
                  display:flex; 
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: space-around;
                  height: 410px;
                  
                }
      .opis{
        
        height: 145px;
        display: flex;
        margin-bottom:20px ;
        

      }
      textarea {
      resize: none;
      }
`;

export function Three() {


    const auth = getAuth();
    

   
    const [nazwa, setTitle] = useState("");
    const [opis, setDescription] = useState("");
    const [zdjecia, setLocation] = useState("");
    const [kategoria, setCountry] = useState("");
    const [telefon, setReview] = useState("");
    const [cena, setTotalPrice] = useState("");
    const [miasto, setRegion] = useState("");
    const [autor] = useState(auth.currentUser?.uid);
    const navigate = useNavigate();
    
    const addNewHotel = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      addHotel({
        cena,
        kategoria,
        miasto,
        nazwa,
        opis,
        telefon,
        zdjecia,
        autor,
        
      });

      console.log("successfully added a new hotel");
      console.log(hotelsCollection.id);
      navigate("/");
    };
  return (
    <Content>

     
      <div className="box">

      
      <form className="box-content" onSubmit={(e) => addNewHotel(e)}>
      <div className="left-content">
      <div className="left-form">
      <label>Lokalizacja: </label>
      <select  value={miasto} onChange={(e) => setRegion(e.target.value)}>
      <option className="test"  value="Kraków">Kraków</option>
      <option  value="Warszawa">Warszawa</option>
      <option  value="Kalisz">Kalisz</option>
      <option  value="Wrocław">Wrocław</option>
      <option  value="Lublin">Lublin</option>
      <option  value="Poznań">Poznań</option>
      <option  value="Rzeszów">Rzeszów</option>
      <option  value="Opole">Opole</option>
      <option  value="Białystok">Białystok</option>
      <option  value="Zakopane">Zakopane</option>
      
    </select> 
      
    <label>Tytuł oferty:</label>
       <input type="text"  value={nazwa} onChange={(e) => setTitle(e.target.value)}
        ></input>
     
      
      <label>Kategoria:</label>
       <select form="carform" value={kategoria} onChange={(e) => setCountry(e.target.value)}>
      <option  value="lokale">Lokale</option>
      <option  value="samochody">Samochody</option>
      <option  value="catering">Catering</option>
      <option  value="muzyka">Muzyka</option>
      <option  value="fotografia">Fotograf</option>
      <option  value="kamerzysta ">Kamerzysta</option>
      <option  value="dodatki">Dodatki</option>
    
      
    </select> 
      
       
    <label>Cena(dzień lub wykonaną usługe):</label>
       <input type="number"  min="1"
          max="60000"
          value={cena} onChange={(e) => setTotalPrice(e.target.value)}></input> 
      </div>
      <div className="right-form">
      <label>Krótki opis:</label>
         <textarea  className="opis" value={opis}
          onChange={(e) => setDescription(e.target.value)} ></textarea>
  
     <label>Zdjęcie(URL, beta1.0)</label>
       <input type="text"
          value={zdjecia}
          onChange={(e) => setLocation(e.target.value)}></input>
      
     
      
      <label>Nr telefonu:</label>
      <input  type="number" value={telefon} onChange={(e) => setReview(e.target.value)}>
      </input>
      
      </div>
      </div>
      <div className="right-content">
      <div className="top-box"><h3>Dodaj oferte do bazy:</h3></div>
        <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
           Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
           Orci varius natoque penatibus et magnis</p>
        <button className="button_styled">Dodaj</button>
        
      </div>
      
      </form>
      
      </div>
    </Content>
  );
}

export default Three;