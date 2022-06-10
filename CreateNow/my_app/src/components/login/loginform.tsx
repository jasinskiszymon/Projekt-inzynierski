import React, {FC} from 'react';
import styled  from 'styled-components';
import {Link} from "react-router-dom";
const Wrapper = styled.div`
  display:flex ;
    .information{
     
      height: 100vh;
      width:70vh;
    }
    .left{
      border-left: 2px solid black;
      background-color: #f1efef;
      height: 100vh;
      width:70vh;
      display:flex;
      align-items: center;
      justify-content: center;
      form{
      border: 1px solid black;
      height: 300px;
      width:400px ;
      justify-content:center;
      align-items: center;
      display: flex;
      background-color: white ;
      flex-direction:column ;
      }
      input{
        height:37px;
        width: 222px;
      }
      button{
        width: 230px;
        height:40px;
        
      }
    
    }
    .right{
      background-color: #f1efef ;
      height: 100vh;
      width:70vh;
    }
`;

  
export const LoginForm: FC = () => {
  return (
      <Wrapper>
      <div className='information'>
      <button className="return_button"><Link to="/"> back</Link></button>
      </div>
      <div className='left'>
      <div className='form_login'>
        <h1>
          Logowanie
        </h1>
        <form>
            <label>Nazwa użytkownika</label>
            <input type="text" placeholder="Twoja nazwa użytkownika" required/>
            <label>Hasło</label>
            <input type="password" placeholder="Wpisz swoje hasło" required/>
            <button type="submit">Zaloguj się</button>
        </form>
      </div>
      </div>
      <div className='right'>
      <div className='form_register'>
      
        <form></form>
        <h1> Rejestracja
        </h1>
        <form>
            <label>Nazwa użytkownika</label>
            <input type="text" placeholder="Twoja nazwa użytkownika" required/>
            <label>Hasło</label>
            <input type="password" placeholder="Wpisz swoje hasło" required/>
            <button type="submit">Zaloguj się</button>
        </form>
      </div>
      </div>
      
      </Wrapper>
      
  );

  }
  export default LoginForm