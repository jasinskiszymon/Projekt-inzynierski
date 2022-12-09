import {FC, useState} from 'react';
import styled from 'styled-components';

//import icon 
import home from '../../icon/house2.png';
import entities from '../../icon/entities.png';
import eco from '../../icon/ecosystem.png';
import people from '../../icon/people.png';
import entities2 from '../../icon/entities2.png';
import administration from '../../icon/administration.png';
import write from '../../icon/write.png';
import group from '../../icon/group.png';
import face from '../../icon/face2.png';
import setting from '../../icon/settings.png';
import privacy from '../../icon/privacy.png'
import logout from '../../icon/logout.png';
import { array } from 'yup';


const ExpantedWrapper = styled.div`
  
  margin-top: 30px;
  margin-left: 20px;
  width: 300px;
  font-size: 20px;
  border: 1px solid black;
  position: absolute;
  z-index: 3;
  background-color: red;

`;


export const ExpantedMenu: FC = () => {
    console.log("dadasdasdasdas DZIAŁA KURWA")
     return(
       
        <ExpantedWrapper>
            
           <div>DIV DZIAŁA </div>
         
        </ExpantedWrapper>
 );
 };