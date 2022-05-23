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
    margin-top: 35px;
   #title{
    
    font-size: 20px;
    text-align:center ;
   }
`;

  
export const About2: FC = () => {
  return (
      <Wrapper>
        <p id="title">
        Posuere erat imperdiet eu. Quisque ac mauris a ipsum!
        </p>
        
        <Box>
          <div id="one">
                
                <img src={icon1} alt=""/>
                <h3>Erat imperdiet</h3>
                <p>eu posuere erat imperdiet eu. Quisque ac mauris a ipsum </p>
          </div>
          
          <div id="two">
                <img src={icon2} alt=""/>
                <h3>Erat imperdiet</h3>
                <p>eu posuere erat imperdiet eu. Quisque ac mauris a ipsum </p>
          </div>
          <div id="three">
                <img src={icon3} alt=""/>
                <h3>Erat imperdiet</h3>
                <p>eu posuere erat imperdiet eu. Quisque ac mauris a ipsum </p>
          </div>
          <div id="four">
                <img src={icon4} alt=""/>
                <h3>Erat imperdiet</h3>
                <p>eu posuere erat imperdiet eu. Quisque ac mauris a ipsum </p>
          </div>
          </Box>
      </Wrapper>
      
  );

  }
  export default About2