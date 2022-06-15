 import React, {FC} from 'react';
import styled  from 'styled-components';

import icon1 from "../../icon/icon_clock.png"
import icon2 from "../../icon/icon_data.png"
import icon3 from "../../icon/icon_mail.png"
import icon4 from "../../icon/icon_money.png"
const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: flex-start;
    margin-top: 30px;
    margin-bottom: 100px ;

    #right{
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: flex-start;
        align-content: center;  
        width: 600px;
        margin-left: 30px ;
    }
    #one, #two, #three, #four{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        align-content: center;
    }
    #button{
        border-bottom: 1px solid blue;
        width: 100px;
        height: 40px;
        border-radius: 5px ;
        align-items: center;
        display:flex;
        font-weight: bold;
        justify-content:center ;
    }
`;
const Wrapper = styled.div`
    margin-top: 38px;
    margin-bottom: 20px;
   #title{
    font-size: 17px;
    text-align:center ;
   }
   #desc{
       text-align: center ;
       display: flex;
       justify-content: center;
       align-content: center;
   }
   #t_desc{
    font-size: 15px;
    text-align:center ;
    width: 700px ;
    font-style: italic;
    
   }
`;

  
export const About2: FC = () => {
  return (
      <Wrapper>
        <p id="title">
        CreateNow.pl
        </p>
        <div id="desc">
        <div id="t_desc">
        Dzięki temu, że przedstawia czym strona się zajmuje, lepiej zostanie zapamiętana przez klienta. 
        </div>
        </div>
        
        <Box>
            
          <div id="one">
          
                <img src={icon1} alt=""/>
                <h3>Czas</h3>
                <p>Cenimy czas naszych klientów</p>
          </div>
          
          <div id="two">
                <img src={icon2} alt=""/>
                <h3>Data</h3>
                <p>Staramy się umożliwość jak najlepsze dni do wyboru</p>
          </div>
          <div id="three">
                <img src={icon3} alt=""/>
                <h3>Kontakt</h3>
                <p>Podstawą dla nas jest jak najlepszy kontakt z klientem</p>
          </div>
          <div id="four">
                <img src={icon4} alt=""/>
                <h3>Cena</h3>
                <p>Staramy się uzyskać oferty z jak najniższymi cenami</p>
                <div id='creator'/>
          </div>
          
          </Box>
          
      </Wrapper>
      
  );

  }
  export default About2