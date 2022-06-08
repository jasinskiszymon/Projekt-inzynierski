import React, {FC,useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import styled  from 'styled-components';

import Chmura from '../../icon/chmura.png'
import Chmura2 from '../../icon/chmura2.png'


const Wrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 30px;

width: 100vw;
    .footer-wrapper{
        width: 100%;
        height: 24vh;
        background-color: #2c5adc;
        position: relative;
    }
    .vawe-wrapper{
        position: absolute;
        left: 0;
        bottom: 0px;
        z-index: 1;
        width: 100%;
    }
    .contact-wrapper{
        position: absolute;
        z-index: 2;
        top: 0;
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        .contact-left, .contact-right{
            margin: 0 5%;
        }
        .contact-left{
            width: 55%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${()=> Chmura});
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
            ul{
                li{
                    list-style-type: none;
                    line-height: 30px;
                    color: black;
                    font-weight: 500;
                }
            }
        }
        .contact-right{
            width: 71%;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url(${()=> Chmura2});
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
            form{
                div{
                    height: 20vh;
                    margin: 0;
                    padding: 2px;
                    width: 40%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                width: 70%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                label{
                    width: 60%;
                    color: black;
                    text-align: left;
                }
                input{
                    width: 60%;
                    margin: 2px 0;
                }
                textarea{
                    width: 100%;
                    height: 100px;
                    margin-bottom: 20px;
                }
                .send-btn{
                    width: 30%;
                    height: 35px;
                }
            }
        }
    }
`;


export const Contact: FC = () => {
    const form = useRef(null);

    const [formName, setformName] = useState('');
    const [formTopic, setformTopic] = useState('');
    const [formEmail, setformEmail] = useState('');
    const [formText, setformText] = useState('');

    const sendEmail = (e:any) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8276uho', 'template_jgoaf9t', form.current!, '4c6vKSBBlIWUSFMZt')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setformName('');
        setformTopic('');
        setformEmail('');
        setformText('');
    };
    return (
        <Wrapper>
            <div className='footer-wrapper'>
                <div className='vawe-wrapper'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2c5adc" fill-opacity="1" d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-left'>
                        <ul>
                            <li>TESTOWY KT</li>
                            <li>TESTOWY KT</li>
                            <li>TESTOWY KOT</li>
                            <li>TESTOWY KOT</li>
                            <li>TESTOWY KONT</li>
                        </ul>
                    </div>
                    <div className='contact-right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div>
                                
                                <input type="text" name="user_name" placeholder="Imię" onChange={event => setformName(event.target.value)} value={formName}/>
                                <input type="text" name="subject" placeholder="Temat" onChange={event => setformTopic(event.target.value)} value={formTopic}/>
                                <input type="email" name="user_email" placeholder="Twój adres E-mail" onChange={event => setformEmail(event.target.value)} value={formEmail}/>
                            </div>
                            <div>
                                
                                <textarea name="message" placeholder="Treść wiadomości..." onChange={event => setformText(event.target.value)} value={formText}/>
                                <input className='send-btn' type="submit" value="Send" />
                            </div>
                    </form>
                </div>
                </div> 
            </div>
            <div id= "left"></div>
            
            
            
           
        </Wrapper>
    );
  
    }
  export default Contact