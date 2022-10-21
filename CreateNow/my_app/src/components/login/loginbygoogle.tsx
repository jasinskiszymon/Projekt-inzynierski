import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import googleicon from '../../icon/google.png';
const Wrapper = styled.div`
    button{
        margin-top: 3vh;
        color: #000000;
        border: 2px solid #cccbcb;
        width: 290px;
        font-size: 16px;
        height: 55px;
      
        border-radius: 1px;
        display: flex;
        align-items:center;
        justify-content:center;
        font-weight:600 ;
        background: url(${googleicon}) left center no-repeat;
        padding-left: 15px;
        
    }
    button:hover{
    background-color: #e9e8e8;
    box-shadow: 0 1px #fafafa;
    
    
   
    }
   
  
`;

export interface ILoginPageProps {}

export const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);
        

        signInWithPopup(auth, new GoogleAuthProvider())
            .then((response) => {
                console.log(response.user.uid);
                navigate('/');
               
                
            })
            .catch((error) => {
                console.log(error);
                setAuthing(false);
            });
    };

    return (
        <Wrapper>
            
            <button onClick={() => signInWithGoogle()} disabled={authing}>
               Logowanie z Google
            </button>
            
        </Wrapper>
    );
};

export default LoginPage;