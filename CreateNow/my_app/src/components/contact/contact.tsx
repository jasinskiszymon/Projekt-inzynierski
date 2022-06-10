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
        position: relative;
    }
    .vawe-wrapper{
        position: absolute;
        left: 0;
        bottom: 0px;
        z-index: 1;
        width: 100%;
        height: 430px ;
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
           
        }
        .contact-left{
            width: 100%;
            height: 268px;
            margin-top: 50px ;
            display: flex;
            align-items: center;
            justify-content: center;
            background-position: center; 
            background-repeat: no-repeat; 
            background-size: cover; 
            color:black;
            background-color: white ;
            
            ul{
                width: 500px;
                margin-bottom:35px ;
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
            margin-top: 50px;
            width: 100%;
            display: flex;
            height: 268px;
            justify-content: center;
            align-items: center;
            background-color: white;
            flex-direction:wrap ;
            
            form{
                
                .box{
                    height: 200px;
                    margin: 0;
                    padding: 2px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                   
                }
                .theme-info{
                    display: flex;
                    
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
                    border:none;
                    border-bottom:1px solid black;
                    font-size: 17px;
                }
                input:focus{
                    outline: none;
                    
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
                    width: 100%;
                    height: 40px;
                    color: white;
                    background-color: black ;
                    font-weight: 500;
                    font-size: 16px;

                }
                .styled-left{
                    height: 160px;
                    width:300px ;
                }
                .dom{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
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
                    <svg viewBox="0 0 1440 320"><path fill="#dddddf" fill-opacity="1" d="M0,64L60,74.7C120,85,240,107,360,106.7C480,107,600,85,720,90.7C840,96,960,128,1080,122.7C1200,117,1320,75,1380,53.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
                </div>
                <div className='contact-wrapper'>
                    <div className='contact-left'>
                        <ul>
                            <li><h2>Dane kontaktowe:</h2></li>
                            <li><img src={Phone} alt=""/> 152882889401</li>
                            <li><img src={Mail}alt=""/> createnowapp@gmail.com</li>
                            <li><img src={IG}alt=""/>CreateNow</li>
                            <li><img src={Home}alt=""/> ul. Przyjemna 241, 33-144 Kraków</li>
                        </ul>
                    </div>
                    <div className='contact-right'>
                    <div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='box'>
                            <div className='theme-info'>
                            
                            <div className='styled-left'>
                                <input type="text" name="user_name" placeholder="Imię" onChange={event => setformName(event.target.value)} value={formName}/>
                                <input type="text" name="subject" placeholder="Temat" onChange={event => setformTopic(event.target.value)} value={formTopic}/>
                                <input type="email" name="user_email" placeholder="Twój adres E-mail" onChange={event => setformEmail(event.target.value)} value={formEmail}/>
                            </div>
                            <div className='sd'>

                                <textarea name="message" placeholder="" onChange={event => setformText(event.target.value)} value={formText}/>
                                
                            </div>
                            </div>
                            <div className='dom'>
                                <input className='send-btn' type="submit" value="Wyślij maila" />
                            </div>
                            </div>
                    </form>
                    </div>
                </div>
                </div> 
            </div>
        </Wrapper>
    );
  
    }
  export default Contact