import React, { useState, useEffect } from 'react';
import './CheckPage.css';
import { useParams, Link } from 'react-router-dom';

const CheckPage = () => {
  const { id, date } = useParams();
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  });

  const [goals, setGoals] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [newSchedule, setNewSchedule] = useState('');

  useEffect(() => {
    const fetchGoals = async () => {
      const response = await fetch(`/api/pets/${id}/goals?date=${date}`);
      const data = await response.json();
      setGoals(data.goals);
    };

    fetchGoals();
  }, [id, date]);

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
        <Link to={`/calendar/${id}`}><span className="back-arrow">←</span></Link>
        <span className="header-title">체크 페이지</span>
      </header>
      <div className="content">
        <h2 className="formatted-date">{formattedDate}</h2>
        <div className="goals">
          {goals.length === 0 ? (
            <p>하루 목표를 불러오는 중...</p>
          ) : (
            goals.map((goal, index) => (
              <div key={index} className={`goal ${goal.checked ? 'checked' : ''}`}>
                <input
                  type="checkbox"
                  checked={goal.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span className={`goal-color ${goal.color}`}></span>
                <span className="goal-text">{goal.title}</span>
              </div>
            ))
          )}
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
