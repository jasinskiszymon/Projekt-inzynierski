import React, {FC} from 'react';
import Topnav from './components/topnav/topnav';
import Creator from './components/creator/creator';
import Offers from './components/offers/offers';
import About from './components/about/about';
import About_second from './components/about/about_second';
import Footer from './components/topnav/footer'



export const AppWrapper: FC = () => {
  return (
   
    <div>
       <Topnav />
       
       <div>
         <div><About/></div>
         
         <div><About_second/></div>
      
      </div>
      <Creator/>
      <Offers/>
      <Footer/>
    </div>
  );
};

export default AppWrapper;
