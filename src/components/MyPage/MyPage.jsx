//여기도 이름 추가하면 가로로떠 내가 뭘 단단히 잘못하고있음.
//이름, 이메일 수정 누르면 같이 뜨는거 
//div 설정을 잘못하는 듯
//이전페이지로 가는 버튼 하이퍼링크처러 ㅁ뜬느거 
import React, {useState} from 'react';
import './MyPage.css';
import { Link } from 'react-router-dom';

function MyPage() {
    const [userName, setUserName] = useState('[사용자 이름]');
    const [isEditingName, setIsEditingName] = useState(false);
    const [pets, setPets] = useState(['설이']);
    const [newPetName, setNewPetName] = useState('');
    const [isAddingPet, setIsAddingPet] = useState(false);
  
    const handleEditName = () => {
      setIsEditingName(true);
    };
  
    const handleSaveName = () => {
      setIsEditingName(false);
    };
  
    const handleNameChange = (e) => {
      setUserName(e.target.value);
    };
  
    const handleAddPet = () => {
      setIsAddingPet(true);
    };
  
    const handleSavePet = () => {
      if (newPetName.trim()) {
        setPets([...pets, newPetName.trim()]);
        setNewPetName('');
        setIsAddingPet(false);
      }
    };
  
    const handlePetNameChange = (e) => {
      setNewPetName(e.target.value);
    };
  
    const handleRemovePet = (index) => {
      const updatedPets = pets.filter((_, i) => i !== index);
      setPets(updatedPets);
    };
  
    return (
      <div className="my-page">
        <header className="header">
        <Link to="/main"><span className="back-arrow">←</span></Link>
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
            <span className="label">나의 반려동물</span>
            {pets.map((pet, index) => (
              <div key={index} className="pet-item">
                <span className="value">{pet}</span>
                <Link to="/mypet"><button className="setting-button">설정</button></Link>
                <button className="delete-button" onClick={() => handleRemovePet(index)}>삭제</button>
              </div>
            ))}
            {isAddingPet ? (
              <>
                <input 
                  className="input-field" 
                  value={newPetName} 
                  onChange={handlePetNameChange} 
                  placeholder="반려동물 이름" 
                />
                <button className="save-button" onClick={handleSavePet}>저장</button>
              </>
            ) : (
              <button className="add-button" onClick={handleAddPet}>+ 추가하기</button>
            )}
          </div>
        </div>
      </div>
    );
  }
  
export default MyPage;

// const MyPage = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [todoList, setTodoList] = useState([]);
//     const addItem = () => {
//         setTodoList([...todoList, inputValue])
//     }

//         return (
//             <div className="my-page">
//                 <header className="header">
//                 <span className="back-arrow">←</span>
//                 <span className="header-title">마이페이지</span>
//                 </header>

//                 <div className="content">
//                 <div className="item">
//                     <span className="label">이름</span>
//                     <span className="value">[사용자 이름]</span>
//                     <button className="edit-button">수정</button>
//                 </div>
//                 <div className="item">
//                     <span className="label">Email</span>
//                     <span className="value">name@domain.com</span>
//                     <button className="edit-button">수정</button>
//                 </div>
//                 <div className="pets">
//                     <span className="label">나의 반려동물</span>
//                     <div className="pet">
//                     <span className="pet-name">설이</span>
//                     <Link to="/mypet"><button className="setting-button">설정</button></Link>
//                     <button className="delete-button">삭제</button>
//                     </div>
//                 </div>

//                 <div>
//                     <div>
//                         <TodoBoard todoList={todoList}/>
//                     </div>
                    
//                     <input value={inputValue} type="text" placeholder="반려동물"onChange={(event)=>setInputValue(event.target.value)}/>
//                     <button onClick={addItem}>추가</button>
//                 </div>
//                 </div>
//             </div>
//         );
// };
      

// export default MyPage;