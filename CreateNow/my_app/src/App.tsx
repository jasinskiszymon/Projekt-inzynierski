import React, {FC} from 'react';
import Topnav from './components/topnav/topnav';
import Creator from './components/creator/creator';
import Offers from './components/offers/offers';
import About from './components/about/about';
export const AppWrapper: FC = () => {
  return (
   
    <div>
       <Topnav />
       
       <div>
         <div><About/></div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to
      </div>
      <Creator/>
      <Offers/>
    </div>
  );
};

export default AppWrapper;
