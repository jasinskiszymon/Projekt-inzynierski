import React, {FC, useState, useContext,useRef} from 'react';
import styled  from 'styled-components';
import {Link,useNavigate} from "react-router-dom";
import Login from '../../icon/login1.png';
import LoginByGoogle from './loginbygoogle';

import Swal from 'sweetalert2';
import { getAuth,signInWithEmailAndPassword  } from "firebase/auth";
import Register from './register';

const Wrapper = styled.div`
      display:flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      position: fixed;
      width: 100%;
      height: 100%;
      
      background-color: #f5f8fa;
    
      
    .box{
      display:flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      width:1200px;
      height:700px;
      border-radius:20px ;
      -webkit-box-shadow: 3px 6px 22px -3px #5a5b68;
      -moz-box-shadow: 3px 6px 22px -3px #626374;
      box-shadow: 3px 6px 22px -3px #6a6c80;
    }
    .information{
     display: flex;
     flex-direction: column;
     justify-content: center;
     height:100%;
     border-top-left-radius:20px;
     border-bottom-left-radius:20px;
     background: #3884be;
     color: white;
     width:50%;
     
    button{
      width: 200px;
      font-size: 16px;
      height: 51px;
      margin-left: 10vh;
      border: none;
      background-color: #ffffff;
      font-size: 16px;
      border-radius: 10px;
      
      color: #555555;
      
    }

      .title{
      margin-left:10vh ;
      }
      a:visited{
        color: black;
      }
    }
    .left{
      width:50%;
      background-color:white ;
      display: flex;
      
      
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height:100%;
      input{
        height:37px;
        width: 400px;
        border: 1px solid black; 
        border-left: 4px solid black; 
       
        font-size: 14px;
        border-radius:8px ;
      }
      input:focus{
                    outline: none;
                }
      #button{
        margin-top: 2vh;
        color: white;
        
        width: 250px;
        font-size: 16px;
        height: 51px;
        background-color: #3884be;
        border-radius: 10px;
        display: flex;
        align-items:center;
        justify-content:center;
        font-weight:500 ;
        
        
      }
      
#button:hover{
background-color: #1b80ce;
  
  }
    }
   
    .information_about{
      width: 80%;
      margin-left:6vh ;
    
    p{
        font-size: 17px;
      } 
     
    }
   .name{
    color:#3884be;
   }
   label {
    display: flex;
    margin: 0 0 0.5em 0;
    margin-top:10px;
    
  }
  .left{
      width:50%;
      background-color:white ;
      display: flex;
      border-top-right-radius:20px;
      border-bottom-right-radius:20px;
      flex-direction: center;
      align-items: center;
      justify-content: center;
      height:100%;
  }
  .loginform{
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

`;

 export const LoginForm: FC = () => {

  const [email,setLoginUsername] = useState('');
  const [password, setLoginPassword] = useState('');
  const [setpass, setPass] = useState('');
  const [setpas, setPas] = useState('');
  const [setemail, setMail] = useState('');
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
 function log(){
  let pass = setpass;
  let mail = setemail;
  setLoginPassword(pass);
  setLoginUsername(mail);
  if(setpass==setpas){
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
       const user = userCredential.user;
         console.log("LOGIN GIT")
         Swal.fire("Gratulacje, dane logowania zgadają sie!",
          `Klikając "ok" by zamkąć okno :)`,
          "success",

          )
         setTimeout(() => {
          navigate("/");
        }, 2000)
        
        // ...
    })
     .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
     
      });
    }
    else{

      const Toast = Swal.mixin({
        position: 'center',
        timer: 3000,
        timerProgressBar: true,
       

      })
      Toast.fire({
        icon: 'error',
        title: 'Dane logowania nie zgadzają się!',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Ok!',
       
      


      })
    }
}
  return (
      <Wrapper>
      <div className='box'>
      <div className='information'>
      
      <div className='title'>
        <h1>INFORMACJE</h1>
      </div>
      
      <div className='information_about'>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
           laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.ab illo inventore veritatis
           Ut enim ad minima veniam, quis nostrum exercitationem!Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
           because it is pain, but because occasionally circumstances
          </p>
          <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, 
           because it is pain, but because occasionally circumstances
          </p>
      </div>
      
      <div className='return_button_box'>
        
      <button className="return_button"><Link to="/"> Strona głowna</Link></button>
      
      </div>
     
      </div>
       
      <div className='left'>
        
      {menu!=true?
      
      
        <div>
        <h1 className='name'>
          FORMULARZ LOGOWANIA
        </h1> 
        <form>
        <label>Adres e-mail:</label>
             <input type="text" placeholder="Email"   onChange={(e) => setMail(e.target.value)} required/> 
             <label>Hasło:</label>
            <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPas(e.target.value)} required/>
            <label>Wpisz ponownie swoje hasło:</label>
            
            <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPass(e.target.value)} required/>
            <div className='loginform'>
            <div id="button" onClick={() => log()}>Zaloguj się</div>
            <LoginByGoogle></LoginByGoogle>
            </div>
            </form>
            
            
     </div>
       : 
      
       <Register></Register>
       
       
       }
       {menu!=true?<div className="change" onClick={() => setMenu(true)}><p>Nie masz jeszcze u nas konta? <b>Zarejestruj sie już teraz!</b></p></div> 
      :<div className="return_button" onClick={() => setMenu(false)}><p>Masz już na naszej stronie konto? <b>Zaloguj sie już teraz!</b></p></div> }
      
      </div>
    
   
      </div>
      </Wrapper>
      
  );
  
 }
  
  export default LoginForm

