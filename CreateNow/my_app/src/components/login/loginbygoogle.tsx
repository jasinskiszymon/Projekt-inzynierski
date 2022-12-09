import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import googleicon from '../../icon/google.png';
const Wrapper = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
    button{
        margin-top: 2vh;
        margin-left:2px ;
        color: white;
        width: 150px;
        font-size: 15px;
        height: 50px;
        border-radius: 10px;
        display: flex;
        align-items:center;
        justify-content:center;
        font-weight:600 ;
        border: 3px solid gray;
        background-color: #ffffff;
        
        
        
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
               <img src={googleicon} alt="" />
            </button>
            
        </Wrapper>
    );
};

export default LoginPage;