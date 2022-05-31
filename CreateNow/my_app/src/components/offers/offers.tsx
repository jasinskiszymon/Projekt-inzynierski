import React, {FC, SetStateAction, useState} from 'react';
import styled  from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

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
    border-left: 1px solid black ;
    height:880px ;
  }
`;
export const Offers: FC = () => {

  let img = ''
  let a = [
    {Name: 'Home', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokal'},
    {Name: 'Cat', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.' , category: 'Muzyka'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Car', Desc: ' Nullam dapibus risus tortor, Nullam eu pimperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Sun', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokal'},
    {Name: 'Moon', Desc: ' Nullam dapibus posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Mars', Desc: ' Nullam dapibus r, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Test', Desc: ' Nullam dapibus Nullrtor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Lemon', Desc: ' Nullam Nullam dapibus rirtor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokal'},
    {Name: 'Apple', Desc: ' Nullam dapibus risuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortouere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Kamerzysta'},
    {Name: 'Test', Desc: ' Nullam dapibus risus tortposuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Kamerzysta'},
    {Name: 'Lemon', Desc: ' Nullam dapibus risus tortor,suere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokal'},
    {Name: 'Apple', Desc: ' Nullam dapibus risus tortposuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, euere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Catering'},
    {Name: 'Test', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
    {Name: 'Lemon', Desc: ' Nullam dapibus risus tortor, Nullam eu posuere erat imperdiet eu. Quisque ac mauris amper vulputate sit amet massa.', category: 'Fotograf'},
    {Name: 'Apple', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Lokal'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.', category: 'Muzyka'},
  ];

  const [flag, setFlag] = useState<Boolean>(false);
  const [page, setPage] = useState(1);
  let [arr, setArr] = useState< {Name: string; Desc: string; category: string;}[]>(a)
  let [t, setTekst] = useState('')
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);
  



  const filtertext = a.filter(e => e.Name.includes(t));
  const filtercat = a.filter(e => e.category === 'Muzyka');
  const filtercat2 = a.filter(e => e.category === 'Lokal');

  function show(data: Boolean, category: string){
    let test = a.filter(data => data.category == category);
    setArr(test);
  }
  function showAll(){
    setArr(a);
  }
  function showAfterFilter(){
    setArr(filtertext);
  }

  return (
    <Box>
      <p id="title">
        Posuere erat imperdiet eu. Quisque ac mauris a ipsum!
        </p>
        <div id="desc">
        <div id="t_desc">
        Sed mollis sapien eu dictum commodo. Vivamus nisi purus, tincidunt vitae euismod sit amet, tincidunt nec est. 
        Donec consectetur laoreet libero, eu facilisis quam sodales non. Ut mattis pulvinar sapien, quis semper augue pharetra at.
        </div>
        </div>
    
    <Wrapper>
    <Content>
      <div id="mainbox">
      <div id='left'>
      <h3>Wyszukaj:</h3>
      <input type="text" id="find" placeholder="....." onChange={(e) => {setTekst(e.target.value); setFlag(false); showAfterFilter();}}></input>
      <div className="buttons">
          
        </div>
        Kategorie:
        <ul>
          <li onClick={() => {setFlag(false); showAll();}}>Wszystkie</li>
          <li onClick={() => {setFlag(true); show(flag, "Lokal")}}>Lokal</li>
          <li onClick={() => {setFlag(true); show(flag, "Muzyka")}}>Muzyka</li>
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
    <Pagination count={5} page={page} onChange={handleChange}></Pagination>
    <br></br>
</Wrapper>
</Box>
  );

  }
  export default Offers