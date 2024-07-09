import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MainPage.css';

// Fetch pet data from the backend
const fetchPets = async () => {
  const response = await fetch('/api/pets');
  const data = await response.json();
  return data.pets;
};

// Fetch goal colors data from the backend
const fetchGoalColors = async (petId) => {
  const response = await fetch(`/api/goals?petId=${petId}`);
  const data = await response.json();
  return data.goals;
};

const MainPage = () => {
  const [date, setDate] = useState(new Date());
  const [pets, setPets] = useState([]);
  const [goalColors, setGoalColors] = useState([]);
  const [selectedPetId, setSelectedPetId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getPets = async () => {
      const petsData = await fetchPets();
      setPets(petsData);
      if (petsData.length > 0) {
        setSelectedPetId(petsData[0].id); // Select the first pet by default
        const colors = await fetchGoalColors(petsData[0].id);
        setGoalColors(colors);
      }
    };

    getPets();
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    navigate(`/calendar/${selectedPetId}/checkpage/${newDate.toISOString().split('T')[0]}`);
  };

  const handlePetClick = async (id) => {
    setSelectedPetId(id);
    const colors = await fetchGoalColors(id);
    setGoalColors(colors);
    navigate(`/calendar/${id}`);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="profile">
          {pets.map((pet) => (
            <div key={pet.id} className="profile-item" onClick={() => handlePetClick(pet.id)}>
              <img src={pet.image} alt={pet.name} className="profile-image" />
              <span className="profile-name">{pet.name}</span>
            </div>
          ))}
        </div>
        <Link to="/mypage"><button className="my-page-button">마이페이지</button></Link>
      </header>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          locale="en-KR"
          nextLabel=">"
          prevLabel="<"
          next2Label={null}
          prev2Label={null}
          formatShortWeekday={(locale, date) =>
            ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
          }
          tileContent={({ date, view }) => {
            if (view === 'month' && selectedPetId) {
              const dateString = date.toISOString().split('T')[0];
              const goalColor = goalColors.find(goal => goal.date === dateString && goal.petId === selectedPetId);
              if (goalColor) {
                return (
                  <div className="tile-content">
                    <span className="dot" style={{ backgroundColor: goalColor.color }}></span>
                  </div>
                );
              }
            }
            return null;
          }}
          tileClassName={({ date, view }) => {
            if (view === 'month') {
              const day = date.getDay();
              if (day === 0) return 'sunday';
              if (day === 6) return 'saturday';
            }
            return null;
          }}
        />
      </div>
    </div>
  );
};

export default MainPage;
