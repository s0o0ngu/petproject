import React, {useState} from 'react';
import {MdAdd} from "react-icons/md";
import './CheckPage.css';

const CheckPage = ({todo}) => {
    const [text, checked] = useState('');

    return (
        <div>
            <div className="title">오늘의 일정</div>

            <input placeholder="일정 추가" />
            <button type="submit">+</button>
        </div>
    );
};

export default CheckPage;