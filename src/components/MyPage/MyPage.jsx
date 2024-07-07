import React, {useState} from 'react';
import './MyPage.css';
import { Link } from 'react-router-dom';
import SideForm from './SideForm/SideForm';
import {FiPlusCircle} from 'react-icons/fi';

const MyPage = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div>
            <div className="name">
                <div className="title">이름</div>
                <div className="mine">[사용자 이름]</div>
                <div>
                    {
                        isFormOpen ?
                            <SideForm setIsFormOpen={setIsFormOpen} />
                            :
                            <button type="submit" onClick={()=> setIsFormOpen(!isFormOpen)}/>
                    }
                </div>
            </div>

            <div className="email">
                <div className="title">Email</div>
                <div className="mine">email@domain.com</div>
                <button type="submit">수정</button>
            </div>

            <div className="mypet">
                <div className="title">나의 반려동물</div>
                <div className="mine">설이</div>
                <Link to="/mypet"><button type="submit">설정</button></Link>
                <button type="submit">삭제</button>
            </div>

            <div>
                <Link to="/mypage"><button type="submit">추가하기</button></Link>
            </div>
            
        </div>
        
    );
};

export default MyPage;