import React, {FC} from 'react';
import styled  from 'styled-components';
import Contact from '../contact/contact';

const Wrapper = styled.div`
   display:flex;
   background-color: transparent;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
   color: white;
   width:100%;
   background-color: #dddddf;
   margin: 160px auto 0;
   height:0px ;
        span{  
     width:100%;
     height:0px ;
     color: white;
     padding: 190px 0 20px;
     text-align: center;
     margin: 0 !important;
     background-color: #dddddf;
     p{
       height:35px ;
       display:flex;
       justify-content: center;
       align-items: center;
       background-color: black ;
       
     }
   }
   
  
`;

  
export const Footer: FC = () => {
  return (
      <Wrapper>
        <div id="contacts"/>
        <Contact/>
        
       <span><p>	&copy; 2022 Copyright by CreateNow.com, All Rights Reserved!</p></span>
       
      </Wrapper>
  );

  }
  export default Footer