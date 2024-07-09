//<Link to="/mypage"><button className="my-page-button" onClick={handleMyPageClick}>마이페이지</button></Link>
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import { Link } from 'react-router-dom';

const MainPage = () => {
        const [date, setDate] = useState(new Date());
      
        const handleDateChange = (newDate) => {
          setDate(newDate);
          // Add navigation logic here
          console.log('Selected date:', newDate);
          // Example of opening a new page or displaying data
          alert(`Selected date: ${newDate.toLocaleDateString('ko-KR')}`);
        };
      
        const handleMyPageClick = () => {
          // Add navigation logic to my page here
          console.log('Navigating to My Page');
        };
      
        return (
          <div className="app">
            <header className="header">
              <div className="profile">
                <div className="profile-item">
                  <img src="https://via.placeholder.com/50" alt="설이" />
                  <span>설이</span>
                </div>
                <div className="profile-item">
                  <img src="https://via.placeholder.com/50" alt="냥이" />
                  <span>냥이</span>
                </div>
              </div>
              <Link to="/mypage"><button className="my-page-button" onClick={handleMyPageClick}>마이페이지</button></Link>
            </header>
            <div className="calendar-container">
              <Calendar onChange={handleDateChange} value={date} />
            </div>
            <div className="selected-date">
              {date.toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
            <div className="mypage-link">
                <Link to="/checkpage"><button type="mypage">체크페이지</button></Link>
            </div>
          </div>
        );
}

export default MainPage;
