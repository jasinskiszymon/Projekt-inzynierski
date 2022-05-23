import React, {FC} from 'react';
import styled  from 'styled-components';

const Wrapper = styled.div`
   display:flex;
   background-color: #6b6b6b;
   justify-content: center;
   width:100%;
   color: white;
`;

  
export const Footer: FC = () => {
  return (
      <Wrapper>
       <p>	&copy; 2022 Copyright by CreateNow.com</p>
      </Wrapper>
      
  );

  }
  export default Footer