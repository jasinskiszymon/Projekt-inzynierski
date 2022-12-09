import React, {FC, useState, useContext} from 'react';
import styled  from 'styled-components';
import {Link,useNavigate} from "react-router-dom";
import Login2 from '../../icon/login2.png';
import LoginByGoogle from './loginbygoogle';
import Swal from 'sweetalert2';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";

const Wrapper = styled.div`
       display:flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      
     
    
      
`;

 export const Register: FC = () => {

    const [email,setLoginUsername] = useState('');
    const [password, setLoginPassword] = useState('');
    const [setpass, setPass] = useState('');
   const [setpas, setPas] = useState('');
   const [setemail, setMail] = useState('');
  
  const navigate = useNavigate();

 
const auth = getAuth();

  function log(){
    let pass = setpass;
    let mail = setemail;
    setLoginPassword(pass);
    setLoginUsername(mail);
    if(setpass==setpas){
     
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
         const user = userCredential.user;
           console.log("LOGIN GIT")
           Swal.fire(
            "Gratulacje, twoje konto zostało stworzone!",
            `Klikając "ok" by zamkąć okno :)`,
            "success",
          )
              setTimeout(() => {
              navigate("/");
          }, 2000)
      })
       .catch((error) => {
           const errorCode = error.code;
          const errorMessage = error.message;
       
        })
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
    <div>
    <h1 className='name'>
    FORMULARZ REJESTRACJI
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
</Wrapper>
      
      
      
  );

  }
  
  export default Register