import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction(' active'); 
    };

    const loginLink = () => {
        setAction('');
    }

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>펫 스케줄러</h1>
                    <div className="input-box">
                        <FaUser className='icon'/>
                        <input type="text" placeholder='email@domain.com' required/>
                    </div>
                    
                    <div className="input-box">
                        <FaLock className='icon'/>
                        <input type="password" placeholder='password' required/>
                    </div>

                    <button type="submit">로그인</button>
                    
                    <div className="register-link">
                        <p>Don't have an account? <button type="button" onClick={registerLink} className="link-button">가입하기</button></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>회원 가입</h1>

                    <div className="title">이름(별명)</div>
                    <div className="input-box">
                        <FaUser className='icon'/>
                        <input type="text" placeholder='username (nickname)' required/>
                    </div>

                    <div className="title">ID(email)</div>
                    <div className="input-box">
                        <FaEnvelope className='icon'/>
                        <input type="text" placeholder='email@domain.com)' required/>
                    </div>
                    
                    <div className="title">PASSWORD</div>
                    <div className="input-box">
                        <FaLock className='icon'/>
                        <input type="password" placeholder='password' required/>
                    </div>

                    <button type="submit">가입하기</button>
                    
                    <div className="register-link">
                        <p>Don't have an account? <button type="button" onClick={loginLink} className="link-button">로그인하기</button></p>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default LoginForm;
