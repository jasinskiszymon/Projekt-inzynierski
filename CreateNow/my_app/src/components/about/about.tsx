import React, {FC} from 'react';
import styled  from 'styled-components';
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../../image/image1.jpg"
import image2 from "../../image/image2.jpg"
import image3 from "../../image/image3.jpg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    margin-top: 40px ;
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
    #left{
        
         
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

const images = [
    { url: image1 },
    { url: image2 },
    { url: image3 },
  ];
  
export const About: FC = () => {
  return (
      
      <Wrapper>
          <div id="left">
          <SimpleImageSlider
                width={960}
                height={400}
                images={images}
                showBullets={false}
                showNavs={false}
                loop={true}
                autoPlay={true}
                slideDuration={0.7}
      />
      </div>
          <div id="right">
            <h1>O nas</h1>
             <p id="text">
             Głównym celem projektu jest stworzenie funkcjonalnej aplikacji internetowej pomagającej organizacje wybranego wydarzenia. 
             Stworzenie wydarzenia zarówno małego jak i większego nie należy do rzeczy łatwych. 
             Poprzez nasza stronę chcemy ułatwić społeczności organizacje. 
             Najważniejszym wskaźnikiem sukcesu projektu będzie pozytywna ocena zwrotna grupy testerów jak i późniejszych użytkowników strony.
             Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur.
              Orci varius natoque penatibus et magnis
             </p>
             
          </div>
      </Wrapper>
      
  );

  }
  export default About