
import {Formik, Form, Field} from 'formik';
import { Divider } from "@material-ui/core";


import React, {FC, useState, useContext} from 'react';
import styled  from 'styled-components';
import {Link,useNavigate} from "react-router-dom";
import Login2 from '../../icon/login2.png';

import Swal from 'sweetalert2';
import { getAuth, updatePassword, updateProfile } from "firebase/auth";
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
     span{
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
    justify-content: center;
    height: 400px;
    width: 70%;
    
    align-items: center;
    
    

 
    
  label {
    display: flex;
    align-items:left;
    justify-content: left;
    margin-left:3%;
    margin-bottom:2px ;
    
    
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
                .test{
                width: 165px;
                border: none;
                margin-bottom: -10px ;
                
        }
        h4{
          text-align:center;
        }
        .left-left-content{
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          width: 90%;
          height: 100px;
          display:flex ;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          background-color:#f2f3fc ;
          border: 2px solid #c7cfff;
         
          
        }
        .right-left-content{
          background-color: #f9fafd ;
          width: 90%;
          height: 250px;
          display: flex;
          justify-content: space-around;
          text-align: center;
         
        }
      
`;


export function One() {
 const [setpass, setPass] = useState('');
 const [setpas, setPas] = useState('');
 const [setname, setName] = useState('');
 const [setsurename, setSureName] = useState('');
const navigate = useNavigate();
const auth = getAuth();
let User = auth.currentUser;

function log(){

  if(User !== null && setname.length>3){
   
    updateProfile(User, {displayName: setname+" "+setsurename})
  .then(()=> {
         console.log("zmienione",)
         const Toast = Swal.mixin({
          position: 'center',
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Gratulacje, twoje dane zostały zmienione!',
          text: 'Kliknij OK by zamkąć okno :)',
          confirmButtonColor: '#01a11c',
          confirmButtonText: 'Ok!',
  
        })
        navigate("/");
    })
   
     .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        console.log("w catchu eror, try again!")
      })
    }
  if(setpass==setpas && User !== null && setpas.length>7){
   
    updatePassword(User, setpas)
  .then(()=> {
         console.log("zmienione",)
         const Toast = Swal.mixin({
          position: 'center',
          timer: 3000,
          timerProgressBar: true,
        })
        Toast.fire({
          icon: 'success',
          title: 'Gratulacje, twoje dane zostały zmienione!',
          text: 'Kliknij OK by zamkąć okno :)',
          confirmButtonColor: '#01a11c',
          confirmButtonText: 'Ok!',
  
        })
        navigate("/");
    })
   
     .catch((error) => {
         const errorCode = error.code;
        const errorMessage = error.message;
        console.log("w catchu eror, try again!")
      })
    }
      
  }



return (
    

  <Content>

     
  <div className="box">

  
  <form className="box-content" >
  <div className="left-content">
    <div className="left-left-content"> 
  <p>
   <b>Imie i nazwisko:</b> <u> {User?.displayName != null?   User?.displayName: "brak"}</u>
   </p>
 <p>
     <b>Adres e-mail: </b><u>{User?.email} </u> 
    </p>
    
    </div>
    
    <div className="right-left-content">
    <div className="set-name">
    <h4>
    Ustaw nowe Imie i Nazwisko!
    {User?.phoneNumber}
    </h4>
    <label>
    Twoje imie
    </label>
    <input type="text" placeholder="Wpisz swoje imie"  onChange={(e) => setName(e.target.value)}/>
    <label>
    Twoje nazwisko
    </label>
    <input type="text" placeholder="Wpisz  nazwisko"  onChange={(e) => setSureName(e.target.value)}/>
    
           </div>
           <div className='set-password'>
    <h4>Ustaw nowe hasło!</h4>
    <label>Twoje nowe Hasło:</label>
   <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPas(e.target.value)} />
   <label>Wpisz ponownie swoje nowe hasło:</label>
  <input type="password" placeholder="Wpisz swoje hasło"  onChange={(e) => setPass(e.target.value)} />
 
  </div>
  </div>
  </div>
  <div className="right-content">
  <div className="top-box"><h3>Zmień swoje dane tutaj!</h3></div>
    <p>Lorem dapibus mauris, at posuere orci nisi et nibh.
       Magni dolores eos qui ratione voluptatem sequi nesciunt. Vivamus dictum nulla et ipsum hendrerit, quis ullamcorper elit efficitur. 
       Orci varius natoque penatibus et magnis</p>
    <span className="button_styled" onClick={() => log()}>Ustaw nowe dane!</span>
    
  </div>
  
  </form>
  
  </div>
</Content>
  )

}

    
    
    




export default One;