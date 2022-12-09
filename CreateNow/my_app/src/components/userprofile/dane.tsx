
import {Formik, Form, Field} from 'formik';
import { Divider } from "@material-ui/core";


import React, {FC, useState, useContext} from 'react';
import styled  from 'styled-components';
import {Link,useNavigate} from "react-router-dom";
import Login2 from '../../icon/login2.png';

import Swal from 'sweetalert2';
import { getAuth, updatePassword } from "firebase/auth";
const Content = styled.div`

height: 420px;
display:flex;
flex-direction:column ;
     .right-content{
      border-left: 2px solid lightgray;
      width:30%;
      display:flex;
      align-items: center;
      flex-direction: column;
      justify-content: end;
      padding-left: 15px;
      padding-right: 5px ;
     
     }
     button{
     font-size: 17px;
    width: 300px;
    height: 50px;
    display:flex ;
    align-items: center;
    justify-content: center;
    flex-direction:row ;
    border-radius: 3px;
    border:none;
    color:white;
    background-color: #1aa01a;
  }
  .left-content{
    display: flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
    height: 400px;
    width: 70%;
    align-items: center;
    
    

 
    
  label {
    display: flex;
    align-items:left;
    justify-content: left;

    
    
  }
  }
  .box{
    
    height: 400px;
    width:100%;
    
  }
  .box-content{
    display:flex;
   
    height: 400px;

  }
  .top-box{
    
    display:flex;
    align-items: center;
    width: 100%;
    height: 20px;
    
    
  }
  input{
        height:35px;
        width: 290px;
        border: 1px solid gray; 
        margin-bottom:25px ;

        font-size: 14px;
        border-radius:2px ;
      }
      select{
        height:39px;
        width: 293px;
        border: 1px solid gray; 
        margin-bottom:25px ;
        

        font-size: 14px;
        border-radius:2px ;
      }
      input:focus{
                    outline: none;
                }
                .left-form{
                  margin-top: 5px ;
                  display:flex; 
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: center;
                  height: 430px;
                  
                }
                .right-form{
                  margin-top: 5px ;
                  display:flex; 
                  flex-wrap: wrap;
                  flex-direction: column;
                  justify-content: space-around;
                  height: 430px;
                  
                }
     
      
`;


export function One() {
  
  const [email,setLoginUsername] = useState('');
  const [password, setLoginPassword] = useState('');
  const [setpass, setPass] = useState('');
 const [setpas, setPas] = useState('');
 const [setemail, setMail] = useState('');

const navigate = useNavigate();



const auth = getAuth();
  let User = auth.currentUser;
  console.log(User, "user");
function log(){
  let pass = setpass;
  let mail = setemail;
  
  
  setLoginPassword(pass);
  setLoginUsername(mail);
  if(setpass==setpas && User !== null){
   
    updatePassword(User, password)
  .then(()=> {
  
       
         console.log("zmienione",)
         Swal.fire(
          "Gratulacje, twoje dane zostały zmienione!",
          `Kliknij OK by zamkąć okno :)`,
          "success",

        )
            setTimeout(() => {
            navigate("/");
        }, 5000)
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
    

  <Content>

     
  <div className="box">

  
  <form className="box-content" >
  <div className="left-content">
  <div className="left-form">
  <p>
    <b>Imie i nazwisko </b><u>{User?.displayName}</u>
    </p>
 <p>
    <b>Adres e-mail: </b><u>{User?.email}</u>
    </p>
    {/* <input type="text" placeholder="Email"   onChange={(e) => setMail(e.target.value)} />  */}
    <h4>Ustaw nowe hasło!</h4>
    <label>Twoje nowe Hasło:</label>
   <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPas(e.target.value)} required/>
   <label>Wpisz ponownie swoje nowe hasło:</label>
  <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPass(e.target.value)} required/>
   
  </div>
  </div>
  <div className="right-content">
  <div className="top-box"><h3>Zmień swoje dane tutaj!</h3></div>
    <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
       Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
       Orci varius natoque penatibus et magnis</p>
    <button className="button_styled" onClick={() => log()}>Ustaw nowe dane!</button>
    
  </div>
  
  </form>
  
  </div>
</Content>
  )

}

    
    
    




export default One;