import React, {useState} from 'react';
import './CheckPage.css';
import TodoBoard from "../Todo/TodoBoard";

const CheckPage = () => {
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const addItem = () => {
        setTodoList([...todoList, inputValue])
    }

    return (
        <div>
            <TodoBoard todoList={todoList}/>

            <input value={inputValue} type="text" onChange={(event)=>setInputValue(event.target.value)}/>
            <button onClick={addItem}>추가</button>
        </div>
    );
};

export default CheckPage;