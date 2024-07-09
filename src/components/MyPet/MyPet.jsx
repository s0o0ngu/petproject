// MyPet.jsx
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MyPet.css';
import { PetContext } from '../contexts/PetContext';

function MyPet() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { pets } = useContext(PetContext);
  const pet = pets.find(p => p.id === id);

  const [profileImage, setProfileImage] = useState(pet ? pet.profileImage || null : null);
  const [goals, setGoals] = useState(pet ? pet.goals || [] : []);
  const [newGoalText, setNewGoalText] = useState('');
  const [selectedColor, setSelectedColor] = useState('yellow');

  if (!pet) {
    return <div>반려동물을 찾을 수 없습니다.</div>;
  }

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddGoal = () => {
    if (newGoalText.trim()) {
      setGoals([...goals, { color: selectedColor, title: newGoalText.trim() }]);
      setNewGoalText('');
    }
  };

  const handleRemoveGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const handleGoalTextChange = (e) => {
    setNewGoalText(e.target.value);
  };

  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="my-page">
      <header className="header">
        <span className="back-arrow" onClick={handleBackClick}>←</span>
        <span className="header-title">{pet.name}</span>
      </header>
      <div className="content">
        <div className="profile-section">
          <span className="profile-label">프로필사진</span>
          <label htmlFor="profileImageInput" className="profile-image-container">
            <img
              src={profileImage || "https://via.placeholder.com/150"}
              alt="프로필 사진"
              className="profile-image"
            />
            <input
              id="profileImageInput"
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <div className="item">
          <span className="label">하루 목표</span>
        </div>
        <div className="goals-list">
          {goals.map((goal, index) => (
            <div key={index} className="goal-item">
              <span className={`goal-color ${goal.color}`}></span>
              <span className="goal-text">{goal.title}</span>
              <button className="remove-button" onClick={() => handleRemoveGoal(index)}>−</button>
            </div>
          ))}
        </div>
        <div className="add-goal">
          <input
            className="goal-input"
            placeholder="목표 이름"
            value={newGoalText}
            onChange={handleGoalTextChange}
          />
          <div className="color-options">
            {['yellow', 'pink', 'purple', 'green', 'blue'].map((color) => (
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
