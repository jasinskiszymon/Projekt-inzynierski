import React, {Component, FC, SetStateAction, useEffect, useState, useRef} from 'react';
import styled  from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';
import { isConstructorDeclaration } from 'typescript';

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
export const Offers: FC = () => {


// usunac zmienna let a zeby było jak wczesniej 
  let a = [
    {Name: 'Home', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokale'},
    {Name: 'Cat', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.' , category: 'Muzyka'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Car', Desc: ' Nullam dapibus risus tortor, Nullam eu pimperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Sun', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokale'},
    {Name: 'Moon', Desc: ' Nullam dapibus posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Mars', Desc: ' Nullam dapibus r, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Test', Desc: ' Nullam dapibus Nullrtor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Lemon', Desc: ' Nullam Nullam dapibus rirtor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokale'},
    {Name: 'Apple', Desc: ' Nullam dapibus risuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortouere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Kamerzysta'},
    {Name: 'Test', Desc: ' Nullam dapibus risus tortposuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Kamerzysta'},
    {Name: 'Lemon', Desc: ' Nullam dapibus risus tortor,suere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokale'},
    {Name: 'Apple', Desc: ' Nullam dapibus risus tortposuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, euere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Test', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Lemon', Desc: ' Nullam dapibus risus tortor, Nullam eu posuere erat imperdiet eu. Quisque ac mauris amper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Apple', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokale'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
  ];


// zmienic aa na samo a jak bedzie juz działa baza 
  let aa = [{Name: 'Wybierz kategorie', Desc: '', category: 'Lokale'}];
  useState(()=>{
    fetch('/api/offers').then(function(resp){
      return resp.json();
    }).then(function(data){ 
      let b = data.map(
        function(item: { name: any; Opis: any; category: any; }){
        return {Name: item.name, Desc: item.Opis, category: item.category}
      });
      setArr(b);
      showAll();
    })
  },)
  useEffect(()=>{
    fetch('/api/offers').then(function(resp){
      return resp.json();
    }).then(function(data){ 
      let b = data.map(
        function(item: { name: any; Opis: any; category: any; }){
        return {Name: item.name, Desc: item.Opis, category: item.category}
      });
      return b;
    }).then(resp => a = resp)
  }, [a])


  const [flag, setFlag] = useState<Boolean>(false);
  const [page, setPage] = useState(1);
  let [arr, setArr] = useState< {Name: string; Desc: string; category: string;}[]>(a)
  let [t, setTekst] = useState("")
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);





  const filtertext = a.filter(e => e.Name.includes(t));

  




  function show(data: Boolean, category: string){
    let test = a.filter(data => data.category == category);
    setArr(test);
  }
  function showAll(){
    setArr(a);
  }
  function showAfterFilter(){
    setArr(a.filter(function(e){
      return e.Name.toLowerCase().indexOf(t.toLowerCase()) !== -1;
    }));
  }

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
      <input type="text" id="find" placeholder="....." onChange={(e) => {setTekst(e.target.value); setFlag(false); showAfterFilter();}}></input>
      <h4>
        Kategorie:
      </h4>
        <ul id="categorybox">
          <li id="category" onClick={() => {setFlag(false); showAll();}}>Wszystkie</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "Lokale")}}>Lokale</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "Catering")}}>Catering</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "Muzyka")}}>Zespoły muzyczne</li>
          <li id="category" onClick={() => {setFlag(true); show(flag, "Wypsam")}}>Wypożyczalnie samochodów</li>
        </ul>
      </div>
      <div id='right'>
      <ul>
      {arr.slice((page-1)*8, (page)*8).map((a) =>

            <div id="box">
              <div>
              <img src="https://picsum.photos/100"></img>
                </div>
                <div>
                <li>
                <h4>
                  {a.Name}
                </h4>
            </li>
            <li id="desc_li">
            {a.Desc}
          
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
  export default Offers