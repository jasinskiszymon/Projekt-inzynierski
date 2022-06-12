import React, {FC, useState} from 'react';
import styled  from 'styled-components';
import {Link,useNavigate} from "react-router-dom";
import Login from '../../icon/login1.png';
import Login2 from '../../icon/login2.png';
import { stringify } from 'querystring';
import { useGlobalState } from 'use-global-state-react';
const Wrapper = styled.div`
  display:flex ;
    .information{
     display: flex;
     flex-direction: column;
     justify-content: center;
     height: 100vh;
     width:70vh;
    
    button{
      width: 200px;
      height: 60px;
      margin-left: 10vh;
      border: 1px solid black;
      background-color: black;
      font-size: 17px;
      border-radius: 5px;
    }

      .title{
      margin-left:10vh ;
      }
      a:visited{
        color: white;
      }
    }
    .left{
      border-radius: 40vh 0 0 40vh;
      border-left: 6px solid #d6d6d6 ;
      
    }
    .left, .right{
      
      background-color: #e6e6e6 ;
      
      height: 100vh;
      width:70vh;
      display:flex;
      align-items: center;
      justify-content: center;
      
      form{
      -webkit-box-shadow: 3px 6px 22px -3px rgba(66, 68, 90, 1);
      -moz-box-shadow: 3px 6px 22px -3px rgba(66, 68, 90, 1);
      box-shadow: 3px 6px 22px -3px rgba(66, 68, 90, 1);
      height: 520px;
      width:400px ;
      justify-content:center;
      align-items: center;
      display: flex;
      background-color: white ;
      flex-direction:column ;
      border-radius: 9px;
      }
      input{
        height:37px;
        width: 290px;
        border: 1px solid white;
        border-bottom: 1px solid black; 
        font-size: 14px;
      }
      input:focus{
                    outline: none;
                }
      #button{
        margin-top: 6vh;
        color: white;
        border: 2px solid #000000;
        width: 290px;
        font-size: 17px;
        height: 60px;
        background-color: #3434bf;
        border-radius: 5px;
        display: flex;
        align-items:center;
        justify-content:center;
        
      }
    
    }
   
    .information_about{
      width: 50vh;
      margin-left:10vh ;
    
    p{
        font-size: 20px;
        
      } 
     
    }
`;

export const LoginForm: FC = () => {
  const [registerUsername,setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState(''); 
  const [loginPassword, setLoginPassword] = useState(''); 
  const [CurrentUser, setCurrentUser] = useState('');
  const usersData = JSON.parse(sessionStorage.getItem('usersData') || '{}');
  
  
  const aaa = useGlobalState(CurrentUser);
  const navigate = useNavigate();
 
  const onRegistration = (username: string, password: string) => {
    if (!usersData[username]) {
       usersData[username] = {
        password: password
      }

      sessionStorage.setItem('usersData', JSON.stringify(usersData));
    }
  }

  const onLogin = (username: string, password: string) => {
    if (usersData[username] && usersData[username].password === password) {
      console.log('ok');
      setCurrentUser(username)
     // navigate("/")
      
    } else {
      console.log('dupa');
    }
  }

  return (
      <Wrapper>
        
      <div className='information'>
      <div className='title'>
        <h2>Informacje:</h2>
      </div>
      <div className='information_about'>
        <p>Proin nisl purus, volutpat ac nibh id, congue gravida justo. 
          Mauris posuere, sapien suscipit interdum scelerisque, enim turpis mollis risus, 
          a tempus nisl felis vel enim. Donec ex nisi, dignissim et dapibus at, tincidunt sed dolor. 
          Vestibulum eget urna lectus. Pellentesque viverra tortor vel bibendum sagittis.
          </p>
      </div>
      <div className='return_button_box'>
      <button className="return_button"><Link to="/"> Powrót do strony głownej</Link></button>
      </div>
      <div className='image'>
      </div>
      </div>
      <div className='left'>
      <div className='form_login'>
        <form>
        <img src={Login} alt=""/>
        <h1>
          Logowanie
        </h1> 
            <input type="text" placeholder="Twoja nazwa użytkownika"  value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} required/>
            <input type="password" placeholder="Wpisz swoje hasło"  value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required/>
            <div id="button" onClick={() => onLogin(loginUsername, loginPassword)}>Zaloguj się</div>
        </form>
      </div>
      </div>
      <div className='right'>
      <div className='form_register'>
      
        <form>
        <img src={Login2} alt=""/>
        <h1> Rejestracja
        </h1>
            <input type="text" placeholder="Twoja nazwa użytkownika" value={registerUsername} onChange={(e) => setRegisterUsername(e.target.value)} required/>
            <input type="password" placeholder="Wpisz swoje hasło" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} required/>
            <div id="button" onClick={() => onRegistration(registerUsername, registerPassword)}>Zarejestruj się</div>
        </form>
      </div>
      </div>
      
      </Wrapper>
      
  );

  }
  export default LoginForm