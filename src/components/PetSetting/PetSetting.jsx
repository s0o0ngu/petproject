import React, {useState} from 'react';
import TodoBoard from "../Todo/TodoBoard";
import { Link } from 'react-router-dom';

const PetSetting = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
      setTodoList([...todoList, inputValue])
  }

  return (
    <div>
      <div className="title">이름</div>
        <div>
          <TodoBoard todoList={todoList}/>
        </div>

        <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
        <Link to="/mypage"><button onClick={addItem}>추가하기</button></Link>
    </div>
  );
};

export default PetSetting;
