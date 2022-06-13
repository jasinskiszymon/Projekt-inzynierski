import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Wrapper = styled.div`
    button{
        margin-top: 1vh;
        color: white;
        border: 2px solid #000000;
        width: 290px;
        font-size: 17px;
        height: 60px;
        background-color: #d10e18;
        border-radius: 5px;
        display: flex;
        align-items:center;
        justify-content:center;
    }
    button:hover{
    background-color: #770000;
    box-shadow: 0 4px #666;
    color: white;
    transform: translateY(4px);
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
               Logowanie Google!
            </button>
        </Wrapper>
    );
};

export default LoginPage;