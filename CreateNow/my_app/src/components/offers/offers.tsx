
import React, {FC, useEffect, useState,} from 'react';
import {DocumentData, onSnapshot, QuerySnapshot} from "firebase/firestore";
import styled  from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import {hotelsCollection, deleteHotel } from '../../config/controllers';
import v from "./arrayComponents";
import {NewHotelType} from '../../config/types/hotel';

import { getAuth} from 'firebase/auth';
import AuthRoute from '../login/authroute';
import { useNavigate } from 'react-router-dom';
const Box = styled.div`
   
   #title{
    font-size: 17px;
    text-align:center ;
   }
   #desc{
       text-align: center ;
       display: flex;
       justify-content: center;
       align-content: center;
       margin-bottom: 50px ;
   }
   #t_desc{
    font-size: 15px;
    text-align:center ;
    width: 700px ;
    font-style: italic;
    
   }

`;
const Wrapper = styled.div`
    
    margin: auto ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    #pagin{
      margin-top:20px ;
      margin-left: 300px;
    }

   #category{
     margin-left: -37px ;
     width: 205px ;
     height: 50px ;
     opacity: 0.6;
     transition: 0.2s;
     display:flex ;
     text-align: center;
     align-items: center ;
     color: black;
     justify-content: center ;
     
    
   }
   #category:hover{
      opacity: 1;
      border-radius: 5px ;
      background-color: #e4e4e4 ;
      
      
     
     
   }
`;

const Content = styled.div`
    justify-content: center;
    width: 1300px;
    height:890px;
    #mainbox{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    input{
            border-radius: 5px; 
            text-align: center;
            border: 1px solid gray;
            height: 35px;
            width: 100%;
            
    }
    #left{
      width: 200px;
      margin-right:20px ;
      
    }
   ul{
    list-style-type:none
   }
  li {
    height: 40px;
    margin-left: 10px ;
    
  }
  #desc_li{
    border-bottom: 1px solid gray;
    width: 910px ;
  }
  #box{
    
    margin-bottom: 5px ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  }
  #right{ 
    -webkit-box-shadow: -11px -4px 21px -20px rgba(66, 68, 90, 1);
    -moz-box-shadow: -11px -4px 21px -20px rgba(66, 68, 90, 1);
    box-shadow: -11px -4px 21px -20px rgba(66, 68, 90, 1);
    height:880px ;
    border-radius: 10px ;
  }
`;


export const Offers: FC = ()=>{




 
  const [hotels, setHotels] = useState<NewHotelType[]>([]);
  const [flag, setFlag] = useState<Boolean>(false);
  const [page, setPage] = useState(1);
  
 
  useEffect(
    () =>
    onSnapshot(hotelsCollection, (snapshot: QuerySnapshot<DocumentData>) => {
      setHotels(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
            
          };
        })
      );

    }),
  []
);
 const [arr, setArr] = useState<NewHotelType[]>(hotels);
  let [t, setTekst] = useState("")
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);
 let a= arr;
  const filtertext = hotels.filter(e => e.nazwa?.includes(t));
  
  const navigate = useNavigate();

  const auth = getAuth();
  const currentusers = (auth.currentUser?.uid);

 

  function show(data: any, kategoria: string){
    let test = hotels.filter(data => data.kategoria == kategoria);
    setArr(test);
  }
  
  function showAll(){
    
    setArr(hotels);
  }
  function showAfterFilter(){
    setArr(hotels.filter(function(e){
      return e.nazwa?.toLowerCase().indexOf(t.toLowerCase()) !== -1;
    }));
  }

  
 
  

useEffect(() => {
  showAll()

  return () =>  showAll();
}, [hotels]);

{
 
   
  return (
    
    <Box>
      
      <div id='offerts'/>
      <p id="title">
        Wyszukaj dostępne oferty
        </p>
        <div id="desc">
        <div id="t_desc">
        Oferty lokali, wypożyczalni są cały czas uzupełniane.
        </div>
        </div>
    
    <Wrapper>
    <Content>
      
      <div id="mainbox">
      <div id='left'>
      <h3>Wyszukaj:</h3>
      <input type="text" id="find" placeholder="....." onChange={(e) => {setTekst(e.target.value); setFlag(false); showAfterFilter()}}></input>
      <h4>
        Kategorie:
        
      </h4>
        <ul id="categorybox">
          <li id="category" onClick={() => {setFlag(false); showAll(); showAfterFilter(); }}>Wszystkie</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "lokale")}}>Lokale</li> 
          <li id="category" onClick={() => {setFlag(true); show(flag, "katering")}}>Catering</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "muzyka")}}>Zespoły muzyczne</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "samochody")}}>Wypożyczalnie samochodów</li> 
        </ul>
      </div>
      <div id='right'>
      
      <ul>
       
      {arr.slice((page-1)*8, (page)*8).map((arr) =>
        
            <div id="box">
              
              <div>
              <img src={arr.zdjecia}></img>
                </div>
                <div>
                <li>
                <h4>
                {arr.nazwa}
                {}
                {arr.autor}
                </h4>
            </li>
            <li id="desc_li">
              
            {arr.opis}

            {currentusers == arr.autor? 
            <button 
            onClick={() => deleteHotel(arr.id, navigate)}>
              DELLLE
            </button>
            :""
}
              </li>
                </div>
            </div>
              )} 
            </ul>
      </div>
      
      </div>
    </Content>
    <div id="pagin">
    <Pagination count={5} page={page} onChange={handleChange}></Pagination>
    </div>
    <br></br>
</Wrapper>
</Box>
  );
      

  }
  }
  export default Offers

