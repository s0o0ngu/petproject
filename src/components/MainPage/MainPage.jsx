import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import { Link } from 'react-router-dom';

const MainPage = () => {

    const [value, onChange] = useState(new Date());


    return (
        <div>
            <div className="mypage-link">
                <Link to="/mypage"><button type="mypage">마이페이지</button></Link>
            </div>
            <div className="mypage-link">
                <Link to="/checkpage"><button type="mypage">체크페이지</button></Link>
            </div>
            <br/>
            <div>
                <Calendar onChange={onChange} value={value} formatDay={(locale, date) => moment(date).format("DD")}/>
                    <div className="text-gray-500 mt-4">
                    {moment(value).format("YYYY년 MM월 DD일")}
                    </div>
                {console.log(value)}
            </div>
        </div>
    );
};

export default MainPage;
