import React, {FC, useEffect, useState,} from 'react';
import {DocumentData, onSnapshot, QuerySnapshot, query, where, getDocs } from "firebase/firestore";
import styled  from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import {hotelsCollection, deleteHotel } from '../../config/controllers';
import {NewHotelType} from '../../config/types/hotel';
import {ExpantedMenu} from './ExpantedMenu';
import { getAuth} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import useDropdown from 'react-dropdown-hook';
import remove from '../../icon/remove.png';
import location from '../../icon/location.png';
import price from '../../icon/price.png';
import phone from '../../icon/phone-icon.png';
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
     margin-left: -48px ; 
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
    width: 1350px;
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
    height: 78px;
    padding-left: 10px ;
    
  }
  #desc_li{
    border-bottom: 1px solid gray;
    width: 910px ;
    display: flex;
    flex-wrap:wrap ;
    flex-direction: column;
    
    

    .desc-box{
   
    height: 54px;
    }
    .info-box{
     
      height: 20px;
      font-size: 16px;
      display: flex;
      justify-content: end;

    }
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
    width: 1079px;
    border-radius: 10px ;
    
   
  }
  .title{
    display: flex;
    align-items:center ;
   
  }
  .del-button-box{
    display: flex;
    
   
   
  }
  .del-button{
    display: flex;
    align-content: space-between;
    align-items:right ;
    background: white;
    border: none;
    
  }
  .test{
    display: flex;
    width: 100%;
   
  
    justify-content: space-between;
    
    height: 40px;
  }
  .image{
    display:flex;
    height: 116px;
    
  }
  .image-box{
    border-bottom:1px solid gray ;

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
          <li id="category" onClick={() => {setFlag(true); show(flag, "fotografia")}}>Fotografia</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "kamerzysta")}}>Kamerzysta</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "dodatki")}}>Dodatki</li> 
        </ul>
      </div>
      <div id='right'>
      
      <ul>
       
      {arr.slice((page-1)*7, (page)*7).map((arr) =>
        
            <div id="box">
              
              <div className="image-box">
              <img className="image" src={arr.zdjecia}></img>
                </div>
                <div>
                <li className='test'>
                  <div className='title'>
                <h4>

                  
                {arr.nazwa}
                
                
                </h4>
                </div>
                <div className='del-button-box'>
                {currentusers == arr.autor? 
            <button className='del-button'
            onClick={() => deleteHotel(arr.id, navigate)}>
              <img src={remove} alt=""/>
            </button>
            :""
            }
            </div>
                
            </li>
            <li id="desc_li">
            <div className='desc-box'>
            {arr.opis}
            </div>
            <div className='info-box'>
             <img src={location} alt=""></img> <i>{arr.miasto}</i> , <img src={price} alt=""></img><b>{arr.cena}</b>, <img src={phone} alt=""></img>{arr.telefon}
            </div>
           
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

