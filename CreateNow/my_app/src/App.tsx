import React, {FC} from 'react';
import Topnav from './components/topnav/topnav';

export const AppWrapper: FC = () => {
  return (
   
    <div>
       <Topnav />
       <div>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to
      </div>
    </div>
  );
};

export default AppWrapper;
