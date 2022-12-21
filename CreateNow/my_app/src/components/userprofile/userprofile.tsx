import React, {useState, FC} from 'react';
import styled  from 'styled-components';
import {Link} from "react-router-dom";
import { getAuth } from 'firebase/auth';

import facebook_icon from '../../icon/fb.png'
import ig_icon from '../../icon/ig.png'
import twitter_icon from '../../icon/twitter.png'
import One from './dane';
import Two from './wydarzenia';
import Three from './addoffers'


const Wrapper = styled.div`
    display: flex;
    align-items:center;
    align-content:center;
    justify-content: center;
    width: 100%;
    margin-top: 5% ;
    .userbox{
      display: flex;
      width:100%;
      height:98% ;
      align-items:center;
      justify-content: center;
    }
    .right{
      height:80%;
      border-left: 2px solid  lightgray;
      width: 65%;
      
     
    }
    .left{
      display: flex;
      align-items: center;
      justify-content:center ;
      flex-direction:column ;
      width: 30%;

      #avatar{
        border-radius:100%;
        height: 200px;
        width: 200px;
      }
      .menu{
        display:flex ;
    
    justify-content: space-around;
    flex-direction:row ;
    
      }
      .menu2{
    display:flex ;
    justify-content: space-around;
    flex-direction:column ;
    
    height:180px;
    justify-content:center;
    align-items:center;
      }
      .prev{ 
    font-weight: 400;
    font-size: 15px;
    
    width: 180px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 1px;
    border: 2px solid #1D75B8;
    color: black;
      }
    .next{
    font-weight: 400;
    font-size: 15px;
    
    width: 180px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 1px;
    border: 2px solid #1D75B8;
    color: black;
    margin-left:10px ;
    margin-right:20px;
    }
  
    }
    .prev2{
    font-weight: 400;
    font-size: 15px;
    width: 330px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 4px;
    border: 2px solid #ff4848;
     
    background-color: #f73e3e;
    p{
      color: white;  
    }
    }
    .topinf{
      
    display: flex;
    align-items: center;
    border-bottom: 2px solid lightgray;
    

    .right-top-info{
      
      width: 10%;
      
    }
    .left-top-info{
       
      width: 80%;
      margin: 0 auto;
  

      i{
        color: #1D75B8;
      }
      }
      
    }
    

    .name{
      color: #1D75B8;
      font-style: italic;
    }
    ul{
                width: 20px;
                li{
                    list-style-type: none;
                   
                  
                  
                    img{
                        margin-bottom: 4px;
                        margin-right:8px;
                    }
                }
            }
  button:disabled,
  button[disabled]{
  p{
    color: white;
  }
  background-color: #1D75B8;
  
}
.error-box{
  display:flex ;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  
  height: 200px;
  button{
    border: 2px solid #f81010;
    background-color: #eb4848;
    border-radius: 10px; ;

    h3{
      color: white;
    }
  }
}
.Content{
   -webkit-box-shadow: 3px 6px 22px -3px #5a5b68;
    -moz-box-shadow: 3px 6px 22px -3px #626374;
     box-shadow: 3px 6px 22px -3px #6a6c80;
    height: 760px;
    width: 1550px;
 
}
`;














export const UserProfile: FC = () => {

    const auth = getAuth();
    const currentusers = (auth.currentUser?.displayName);
    const currentusers_by_mail = (auth.currentUser?.email);
    const currentuser_photo = (auth.currentUser?.photoURL)
 
    const [page, setPage] = useState(0)
 

  const formDisplay = () =>{
    
    if(page === 0){
      return <One/>
    } else if (page === 1){
      return <Two/>
    }
    else if(page === 2){
      return <Three/>

    }

    };
    

  return (
    
    <Wrapper>
      <div className='Content'>
      {currentusers_by_mail != null ||currentusers != null?
      <div className='userbox'>
      <div className='left'>
      
      <img id="avatar" src={currentuser_photo? currentuser_photo:"https://picsum.photos/200"}></img>
      <h3> {currentusers != null?   currentusers: currentusers_by_mail} </h3>
      <p>Role: simple user.</p>
      <div className='menu'>
      <button className='prev' disabled={page ===0} onClick={()=>setPage((currPage) => currPage = 0)}><p>Dane użytkownika</p></button>
      
      <button className='next' disabled={page ===1} onClick={()=>setPage((currPage) => currPage = 1)}> <p>Stworzone wydarzenie</p></button>
          </div>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          <div className='menu2'>
     
      <button className='prev' disabled={page ===2} onClick={()=>setPage((currPage) => currPage = 2)}><p>Dodaj swoją oferte</p></button>
      <p>lub</p>
      <button className='prev2'><Link to="/"><p>Powrót na strone głowna.</p> </Link></button>
      </div>
      </div>


      <div className='right'>
     
      
      <div className='topinf'>
        <div className='left-top-info'>
       <div className='named'> <h3>Aliquam placerat leo <i>  {currentusers != null?   currentusers: currentusers_by_mail} </i></h3> </div>
       <p>Mauris condimentum, 
      purus in commodo interdum, ligula lorem dapibus mauris, 
      at posuere orci nisi et nibh. Magni dolores eos qui ratione voluptatem sequi nesciunt.
       Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur.
       Orci varius natoque penatibus et magnis
      </p>
      </div>
      <div className='right-top-info'>
            <ul>
            <li><Link to="/"><img src={facebook_icon} alt=""/></Link></li>
            <li><Link to="/"><img src={ig_icon} alt=""/></Link></li>
            <li><Link to="/"><img src={twitter_icon} alt=""/></Link></li>
            </ul>
      </div>
      </div>
       <div id="testbox">
       {formDisplay()}
            </div>
       </div>
       </div>
       :
       <div className='error-box'>
        <h4>Witaj użytkowniku strony CreateNow!</h4>
        <p>Niestety zabłądziłes! Dostęp do panelu użytkownika jest dostepny po zalogowania. Kliknij w poniższy przycisk by wrócic na strone głowna.</p>
       <button><Link to="/"><h3>Powrót do strony głownej</h3> </Link></button>
       </div>
       
       
       }
       </div>
       </Wrapper>
      
      
  );

  }
  export default UserProfile