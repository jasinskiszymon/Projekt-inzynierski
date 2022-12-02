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

const Wrapper = styled.div`
  display: flex ;
 
  flex-direction:column;  
  width: 100%;
  margin: 0 auto;
  height: 50vh;
.top-box{
  display: flex ;
  align-items:center;
  justify-content:center ;
  width:65%;

  
}
.box-content{
  display: flex ;
  align-items:center ;
  justify-content: center; 
  margin-left:30px;
  flex-direction:row;  
}
  
  .form1{
    display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
margin-top: 20px ;
width: 580px;
    
.plik{
      
      width: 190px;
      border: none;
      height:22px ;
    }
    .check{
      width:20px;
    
    }

    }
  input{
    width: 188px ;
    height:20px ;
    border: 1px solid gray;
    
  }
 
       input:focus{
       outline: none;
      }
     .button_styled{
    font-size: 17px;
    width: 300px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 3px;
    border: 2px solid #1ec01e;
     color:white;
    background-color: #1aa01a;

   

     }
     .left-content{
     
      width:70% ;
     }
     .right-content{
      border-left: 2px solid lightgray;
      width:30%;
      height:90%;
      padding-left: 30px ;
      padding-top: 100px ;
      display:flex;
      align-items: end;
      flex-direction:column;
      justify-content:flex-end;
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
    <Wrapper>

      <div className="top-box"><h4>Dodaj oferte do bazy:</h4></div>
      <div className="box-content">


      <form className="box-content" onSubmit={(e) => addNewHotel(e)
      
      }>
        
      <div className="left-content">
      <div className="form1">
      
      
     <p>Lokalizacja: <select form="carform"  value={miasto} onChange={(e) => setRegion(e.target.value)}>
      <option className="test"  value="Kraków"><p>Kraków</p></option>
      <option  value="Warszawa">Warszawa</option>
      <option  value="Kalisz">Kalisz</option>
      <option  value="Wrocław">Wrocław</option>
      <option  value="Lublin">Lublin</option>
      <option  value="Poznań">Poznań</option>
      <option  value="Rzeszów">Rzeszów</option>
      <option  value="Opole">Opole</option>
      <option  value="Białystok">Białystok</option>
      <option  value="Zakopane">Zakopane</option>
      
    </select> </p>
      
    
     <p>Tytuł oferty:  <input type="text"  value={nazwa} onChange={(e) => setTitle(e.target.value)}
        ></input></p>
      </div>
      <div className="form1">
      
      <p>Kategoria: <select form="carform" value={kategoria} onChange={(e) => setCountry(e.target.value)}>
      <option className="test"  value="lokale">Lokale</option>
      <option  value="samochody">Samochody</option>
      <option  value="catering">Catering</option>
      <option  value="muzyka">Muzyka</option>
      <option  value="fotografia">Fotograf</option>
      <option  value="kamerzysta ">Kamerzysta</option>
      <option  value="dodatki">Dodatki</option>
    
      
    </select> </p>
      
       
      
      <p>Cena:  <input type="number"  min="1"
          max="60000"
          value={cena} onChange={(e) => setTotalPrice(e.target.value)}></input> </p>
       </div>
      <div className="form1">
      
      <p>Krótki opis: <input type="text" className="opis" value={opis}
          onChange={(e) => setDescription(e.target.value)}
        ></input></p>
      
     
      <p>Zdjęcie:  <input type="text"
          value={zdjecia}
          onChange={(e) => setLocation(e.target.value)}></input> </p>
      </div>
      <div className="form1">
      
      <p>Nr telefonu: <input type="number" 
          value={telefon} onChange={(e) => setReview(e.target.value)}></input></p>
    
     
     
      
  
      </div>
      {/* <input type="text" value={id} onChange={(e) => setRegion(e.target.value)}></input> */}
      </div>
      <div className="right-content">
     
        <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
           Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
           Orci varius natoque penatibus et magnis</p>
        <button className="button_styled">Dodaj</button>
        
      </div>
      </form>
      </div>
    </Wrapper>
  );
}

export default Three;