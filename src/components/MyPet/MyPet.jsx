import React from 'react'
import { Link } from 'react-router-dom';

const MyPet = () => {
  return (
    <div>
        <div className="title">이름</div>
            <div className="input-box">
            <input type="text" placeholder='이름 입력' required/>
        </div>

        <Link to="/mypage"><button type="submit">추가하기</button></Link>

    </div>
  )
}

export default MyPet
