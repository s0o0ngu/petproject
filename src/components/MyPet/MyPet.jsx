
//목표 추가하면 가로로 뜨는데 이거 세로로 바꾸고
//인풋, 색, 추가하기 버튼도 가로인데 세로로 바꾸면됨.

import React, {useState} from 'react';
import './MyPet.css';
import { Link } from 'react-router-dom';

function MyPet() {
  const [goals, setGoals] = useState([
    { color: 'yellow', text: '약 먹기' },
    { color: 'pink', text: '산책하기' },
    { color: 'blue', text: '양치하기' }
  ]);
  const [newGoalText, setNewGoalText] = useState('');
  const [selectedColor, setSelectedColor] = useState('pink');

  const handleAddGoal = () => {
    if (newGoalText.trim()) {
      setGoals([...goals, { color: selectedColor, text: newGoalText }]);
      setNewGoalText('');
    }
  };

  const handleRemoveGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <div className="pet-goals-page">
      <header className="header">
        <Link to="/mypage"><span className="back-arrow">←</span></Link>
        <span className="header-title">설이</span>
      </header>
      <div className="content">
        <div className="item">
          <span className="label">하루 목표</span>
          {goals.map((goal, index) => (
            <div className="goal" key={index}>
              <span className={`goal-color ${goal.color}`}></span>
              <span className="goal-text">{goal.text}</span>
              <button className="remove-button" onClick={() => handleRemoveGoal(index)}>−</button>
            </div>
          ))}
        </div>
        <div className="add-goal">
          <input
            className="goal-input"
            placeholder="목표 이름"
            value={newGoalText}
            onChange={(e) => setNewGoalText(e.target.value)}
          />
          <div className="color-options">
            {['pink', 'yellow', 'purple', 'green', 'blue'].map((color) => (
              <span
                key={color}
                className={`color ${color} ${selectedColor === color ? 'selected' : ''}`}
                onClick={() => setSelectedColor(color)}
              ></span>
            ))}
          </div>
          <button className="add-button" onClick={handleAddGoal}>+ 추가하기</button>
        </div>
      </div>
    </div>
  );
}

export default MyPet;