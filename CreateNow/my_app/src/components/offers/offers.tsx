import React, {FC, useState} from 'react';
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
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
    border: 1px solid black;
    width: 60%;
    height: 800px ;
    margin: auto ;
    border: 1px solid black;
  li{
    border: 1px solid black;
  }
`;
export const Offers: FC = () => {

  const [page, setPage] = useState(1);
  let [t, setTekst] = useState('')
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => setPage(value);
  
  
  let a = [
    {Name: 'Home', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Cat', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Car', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Sun', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Moon', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Mars', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Test', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Lemon', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Apple', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
    {Name: 'Dog', Desc: ' Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa.'},
  ];
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
      <input type="text" id="find" placeholder="Filter..." onChange={(e) => setTekst(e.target.value)}></input>
    <Content>
      <div id='left'>
      

      </div>
      <div id='right'>
      
      <ul>
            {a.filter(e => e.Name.includes(t)).slice((page-1)*10, (page)*10).map(a =>

            <div>
              <li>
            {a.Name}
            </li>
            <li>
            {a.Desc}
              </li>
            </div>
              )} 
            </ul>
      </div>
      
      
    </Content>
    <Pagination count={5} page={page} onChange={handleChange}></Pagination>
</Wrapper>
</Box>
  );

  }
  export default Offers