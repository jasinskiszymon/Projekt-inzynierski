import React, {FC,useRef, useState} from 'react';
import emailjs from 'emailjs-com';
import styled  from 'styled-components';
import Home from '../../icon/home.png';
import Phone from '../../icon/phone.png'
import Mail from '../../icon/mail.png'
import IG from '../../icon/instagram.png'
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
        height: 400px ;
    }
    .contact-wrapper{
        position: absolute;
        z-index: 2;
        top: 0;
        width: 100%;
        height: 420px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        .contact-left, .contact-right{
            margin: 0 5%;
        }
        .contact-left{
            width: 500px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
            ul{
                li{
                    list-style-type: none;
                    line-height: 30px;
                    font-weight: 500;
                    display:flex;
                    align-items: center;
                
                    font-size: 19px;
                    img{
                        margin-bottom: 4px;
                        margin-right:8px;
                    }
                }
            }
        }
        .contact-right{
            margin-top: 90px;
            width: 700px;
            display: flex;
            height: 250px;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            background-color: white;
            border:2px solid black;
            
            form{
                div{
                    height: 20vh;
                    margin: 0;
                    padding: 2px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                width: 80%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                
                input{
                    width: 280px;
                    height: 41px;
                    margin: 1px 0;
                    border:2px solid black;
                }
                textarea{
                    width: 360px;
                    height: 150px;
                    margin-bottom: 2px;
                    resize: none;
                    border:2px solid black;
                    font-size: 16px;
                }
                .send-btn{
                    width: 367px;
                    height: 40px;
                    color: white;
                    background-color: black ;
                    border:2px solid white;
                    font-weight: 500;
                    font-size: 16px;
                }
                .styled-left{
                    height: 160px;
                    margin-bottom: 40px;
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
                            <li><h2>Dane kontaktowe:</h2></li>
                            <li><img src={Phone}/> 152882889401</li>
                            <li><img src={Mail}/> createnowapp@gmail.com</li>
                            <li><img src={IG}/>CreateNow</li>
                            <li><img src={Home}/> ul. Przyjemna 241, 33-144 Kraków</li>
                        </ul>
                    </div>
                    <div className='contact-right'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='styled-left'>
                                <input type="text" name="user_name" placeholder="Imię" onChange={event => setformName(event.target.value)} value={formName}/>
                                <input type="text" name="subject" placeholder="Temat" onChange={event => setformTopic(event.target.value)} value={formTopic}/>
                                <input type="email" name="user_email" placeholder="Twój adres E-mail" onChange={event => setformEmail(event.target.value)} value={formEmail}/>
                            </div>
                            <div>

                                <textarea name="message" placeholder="Treść wiadomości..." onChange={event => setformText(event.target.value)} value={formText}/>
                                <input className='send-btn' type="submit" value="Wyślij maila" />
                            </div>
                    </form>
                </div>
                </div> 
            </div>
        </Wrapper>
    );
  
    }
  export default Contact