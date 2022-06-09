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
   margin: 150px auto 0;
   
   p{
     
     width: 100%;
     padding: 190px 0 20px;
     text-align: center;
     margin: 0 !important;
     background-color: #2c5adc;
   }
`;

  
export const Footer: FC = () => {
  return (
      <Wrapper>
        <Contact/>
       <p>	&copy; 2022 Copyright by CreateNow.com, All Rights Reserved!</p>
      </Wrapper>
  );

  }
  export default Footer