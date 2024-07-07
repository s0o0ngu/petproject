import React, { useState } from 'react';
import './JoinForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';

const JoinForm = () => {
 
    const [action, setAction] = useState('');

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box">
                <form action="">
                    <h1>회원 가입</h1>
                    <br/><br/>  
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

                    <Link to="/"><button type="submit">가입하기</button></Link>   
                    
                    <div className="register-link">
                        <p>Already have an account? <a href="/" className="link-button">로그인하기</a></p>
                    </div>
                </form>
            </div>

        </div>
    );
}

export default JoinForm
