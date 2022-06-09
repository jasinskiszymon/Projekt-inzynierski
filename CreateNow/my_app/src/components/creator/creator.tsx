import React, {FC} from 'react';
import styled  from 'styled-components';
const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 30px;
margin-bottom: 80px;
`;
const Content = styled.div`
    
    height: 600px;
    width: 55%;
    
    border-bottom: 1px solid gray;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-bottom-left-radius: 10px ;
    border-bottom-right-radius: 10px ;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray ;
    height: 600px;
    width: 27%;
`;
export const Creator: FC = () => {
  return (
    
      <Wrapper>
          
         
          <Info>
          
              <h3>Co to jest?</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et gravida mauris. 
                Nullam dapibus risus tortor, eu risus posuere erat imperdiet eu.
                Nullam dapibus tortor, eu posuere erat imperdiet eu.</p>
            <h3>Jak działa kreator?</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et gravida mauris. 
                Nullam dapibus risus tortor, eu posuere erat imperdiet eu. 
                Quisque ac mauris a ipsum cursus semper vulputate sit amet massa. Maecenas ultrices facilisis velit a pellentesque. 
                Sed mollis sapien eu dictum commodo. Vivamus nisi purus, tincidunt vitae euismod sit amet, tincidunt nec est.
                
            </p>
          </Info>
          <Content>

          
          </Content>
          
      </Wrapper>
      
  );

  }
  export default Creator