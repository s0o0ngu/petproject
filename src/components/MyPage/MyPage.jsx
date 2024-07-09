import React, { useState, useContext } from 'react';
import './MyPage.css';
import { PetContext } from '../contexts/PetContext';
import { Link, useNavigate } from 'react-router-dom';

function MyPage() {
  const [userName, setUserName] = useState('[사용자 이름]');
  const [isEditingName, setIsEditingName] = useState(false);
  const [email, setEmail] = useState('name@domain.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const { pets, addPet, removePet } = useContext(PetContext);
  const [newPetName, setNewPetName] = useState('');
  const [isAddingPet, setIsAddingPet] = useState(false);
  const navigate = useNavigate();

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setIsEditingName(false);
  };

  const handleNameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleSaveEmail = () => {
    setIsEditingEmail(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddPet = () => {
    setIsAddingPet(true);
  };

  const handleSavePet = () => {
    if (newPetName.trim()) {
      const newPet = { id: `${pets.length + 1}`, name: newPetName.trim(), profileImage: null, goals: [] };
      addPet(newPet);
      setNewPetName('');
      setIsAddingPet(false);
    }
  };

  const handlePetNameChange = (e) => {
    setNewPetName(e.target.value);
  };

  const handleRemovePet = (id) => {
    removePet(id);
  };
  
  const handleBackClick = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  return (
    <div className="my-page">
      <header className="header">
        <span className="back-arrow" onClick={handleBackClick}>←</span>
        <span className="header-title">마이페이지</span>
      </header>
      <div className="content">
        <div className="item">
          <span className="label">이름</span>
          {isEditingName ? (
            <>
              <input
                className="input-field"
                value={userName}
                onChange={handleNameChange}
              />
              <button className="save-button" onClick={handleSaveName}>저장</button>
            </>
          ) : (
            <>
              <span className="value">{userName}</span>
              <button className="edit-button" onClick={handleEditName}>수정</button>
            </>
          )}
        </div>
        <div className="item">
          <span className="label">Email</span>
          {isEditingEmail ? (
            <>
              <input
                className="input-field"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="save-button" onClick={handleSaveEmail}>저장</button>
            </>
          ) : (
            <>
              <span className="value">{email}</span>
              <button className="edit-button" onClick={handleEditEmail}>수정</button>
            </>
          )}
        </div>
        <div className="item">
          <span className="label">반려동물</span>
        </div>
        <div className="pet-container">
          {pets.map((pet) => (
            <div key={pet.id} className="pet-item">
              <span className="value">{pet.name}</span>
              <Link to={`/pets/${pet.id}`} className="setting-link">설정</Link>
              <button className="delete-button" onClick={() => handleRemovePet(pet.id)}>삭제</button>
            </div>
          ))}
        </div>
        {isAddingPet ? (
          <div className="item">
            <input
              className="input-field"
              value={newPetName}
              onChange={handlePetNameChange}
              placeholder="반려동물 이름"
            />
            <button className="save-button" onClick={handleSavePet}>저장</button>
          </div>
        ) : (
          <button className="add-button" onClick={handleAddPet}>+ 추가하기</button>
        )}
      </div>
    </div>
  );
}

export default MyPage;
