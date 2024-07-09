//여기에 떠있는 목표는 내가 추가한거라서 하루목표에서 db 가져와야함
//->db를 가져왔을 때 구현할 수 잇게 코드 수정해야함
import React, {useState} from 'react';
import './CheckPage.css';
import { Link } from 'react-router-dom';


const CheckPage = () => {
    const [goals, setGoals] = useState([
        { color: 'yellow', text: '약 먹기', checked: false },
        { color: 'pink', text: '산책하기', checked: false },
        { color: 'blue', text: '샤워하기', checked: false }
      ]);
      const [schedule, setSchedule] = useState([]);
      const [newSchedule, setNewSchedule] = useState('');
    
      const handleCheckboxChange = (index) => {
        const updatedGoals = goals.map((goal, i) => 
          i === index ? { ...goal, checked: !goal.checked } : goal
        );
        setGoals(updatedGoals);
      };
    
      const handleAddSchedule = () => {
        if (newSchedule.trim()) {
          setSchedule([...schedule, newSchedule.trim()]);
          setNewSchedule('');
        }
      };
    
      const handleRemoveSchedule = (index) => {
        const updatedSchedule = schedule.filter((_, i) => i !== index);
        setSchedule(updatedSchedule);
      };
    
      return (
        <div className="check-page">
          <header className="header">
          <Link to="/main"><span className="back-arrow">←</span></Link>
            <span className="header-title">체크 페이지</span>
          </header>
          <div className="content">
            <div className="date">6월 26일 수요일</div>
            <div className="goals">
              {goals.map((goal, index) => (
                <div key={index} className={`goal ${goal.checked ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={goal.checked} 
                    onChange={() => handleCheckboxChange(index)} 
                  />
                  <span className={`goal-color ${goal.color}`}></span>
                  <span className="goal-text">{goal.text}</span>
                </div>
              ))}
            </div>
            <div className="schedule">
              <div className="schedule-title">오늘의 일정</div>
              {schedule.map((item, index) => (
                <div key={index} className="schedule-item">
                  <span>{index + 1}. {item}</span>
                  <button className="remove-schedule" onClick={() => handleRemoveSchedule(index)}>−</button>
                </div>
              ))}
              <div className="add-schedule">
                <input 
                  className="input-field" 
                  value={newSchedule} 
                  onChange={(e) => setNewSchedule(e.target.value)} 
                  placeholder="일정 추가" 
                />
                <button className="add-button" onClick={handleAddSchedule}>+</button>
              </div>
            </div>
          </div>
        </div>
      );
    }

export default CheckPage;


