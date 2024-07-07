import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [action] = useState('');

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

                    <Link to="/main"><button type="submit" a href="/main">로그인</button></Link>
                    
                    <div className="register-link">
                        <p>Don't have an account? <a href="/join" className="link-button">가입하기</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
