import React, { useEffect, useState } from "react";
import List from "../components/List/List";
import Input from "../components/Input/Input";
import Api from "../utilities/Api";
import "../App.css";

export default function Todo() {
  const [todosList, setTodos] = useState(JSON.parse(localStorage.getItem('Tasks') || '[]'));
  const [text, setText] = useState('');

  useEffect(() => {
    Api.addTodo(todosList);
  }, [todosList])


  function addTask() {
    const newTask = {
      id: todosList.length + 1,
      title: text,
      done: false
    };
    setTodos(todosList => [...todosList, newTask]);
    setText('')
  };

  function removeTask(id) {
    const newArray = todosList.filter((item) => item.id !== id);
    setTodos(newArray);
  };

  function markTodoDone(id) {
    const result = todosList.map((item) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setTodos(result);
  };


  return (
      <div className="todo-container">
        <List
          todos={todosList}
          removeTask={removeTask}
          markTodoDone={markTodoDone}
        />
        <div className="add-item">
          <Input onChange={e => setText(e.target.value)}/>
          <button className="btn" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
  );
}
