import React, {useState, FC} from 'react';
import styled  from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import { getAuth, signOut, } from 'firebase/auth';
import AuthRoute from '../login/authroute';
import { string } from 'yup';
import { set } from 'react-hook-form';
import { Checkbox } from 'formik-material-ui';
import facebook_icon from '../../icon/fb.png'
import ig_icon from '../../icon/ig.png'
import twitter_icon from '../../icon/twitter.png'
import One from './step_one';
import Two from './step_two';
const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    width: 160vh;
    align-items:center;
    align-content:center;
    justify-content: center;
    -webkit-box-shadow: 3px 6px 22px -3px #5a5b68;
      -moz-box-shadow: 3px 6px 22px -3px #626374;
      box-shadow: 3px 6px 22px -3px #6a6c80;
    margin:0 auto;
    margin-top:5%;
   
    
    .userbox{
      
      display: flex;
      width:100%;
      height:100% ;
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
      }
      .menu{
        display:flex ;
    
    justify-content: space-around;
    flex-direction:row ;
    
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
    .leave{
    font-weight: 600;
    width: 200px;
    height: 60px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 1px;
    border: 2px solid #1D75B8;
    color: black;
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
`;

export interface FormProps{
  formData: {
    miasto: string
    samochod: string
    photo: boolean
    lokale: string
    cena: string
    band: string
    date: string
    bonus: string
    catering: boolean
    yourDataCorrect: boolean

  }
}
export interface CompleteFormState {
  miasto: string
  samochod: string
  photo: boolean
  lokale: string
  cena: string
  band: string
  date: string
  bonus: string
  catering: boolean
  yourDataCorrect: boolean

}

export interface FormDataProps extends FormProps{
  setFormData: React.Dispatch<React.SetStateAction<CompleteFormState>>
}
export const UserProfile: FC = () => {

    const auth = getAuth();
    const currentusers = (auth.currentUser?.displayName);
    
    const b = localStorage.getItem("name");
    
   

    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
    miasto: "",
    samochod: "",
    photo: false,
    lokale: "",
    cena: "",
    band: "",
    bonus: "",
    date: "",
    catering: false,
    yourDataCorrect: false,

  })
  const FormTitles=["One","Two"]

  const formDisplay = () =>{
    if(page === 0){
      return <One/>
    } else if (page === 1){
      return <Two formData={formData} setFormData={setFormData}/>
    }
    }

  return (
    <Wrapper>
      <div className='userbox'>
      <div className='left'>
      <img id="avatar" src="https://picsum.photos/200"></img>
      <h3>{b}{currentusers}</h3>
      <p>Role: simple user.</p>
      <div className='menu'>
      <button className='prev' disabled={page ===0} onClick={()=>setPage((currPage) => currPage - 1)}><p>Dane użytkownika</p></button>
      <button className='next' disabled={page ===1} onClick={()=>{if(page===FormTitles.length-1){
           
            console.log(formData.miasto);

          }
          else{
            setPage((currPage) => currPage + 1)
          }
          }}><p>Stworzone wydarzenie</p></button>
          </div>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
      sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
      <button className='leave'><Link to="/"> Powrót na strone głowna.</Link></button>
      </div>


      <div className='right'>
     
      
      <div className='topinf'>
        <div className='left-top-info'>
       <div className='named'> <h3>Aliquam placerat leo <i> {b}{currentusers}</i></h3> </div>
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
       </Wrapper>
      
      
  );

  }
  export default UserProfile