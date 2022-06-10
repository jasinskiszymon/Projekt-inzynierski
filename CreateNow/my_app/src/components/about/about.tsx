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
                width={920}
                height={370}
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et gravida mauris.
            Nullam dapibus risus tortor, eu posuere erat imperdiet eu. Quisque ac mauris a ipsum cursus semper vulputate sit amet massa. 
            Maecenas ultrices facilisis velit a pellentesque. Sed mollis sapien eu dictum commodo.
            Vivamus nisi purus, tincidunt vitae euismod sit amet, tincidunt nec est.
            Donec consectetur laoreet libero, eu facilisis quam sodales non. Ut mattis pulvinar sapien, quis semper augue pharetra at. 
            Nunc posuere neque nec arcu tristique, a dapibus purus ornare. Aenean pulvinar mattis dolor. 
             </p>
             <div id="button">
            Więcej...</div>
             
          </div>
      </Wrapper>
      
  );

  }
  export default About