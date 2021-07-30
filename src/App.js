import React, { useState, useEffect } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const  [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    const getLocalTodos = () => {
      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]));
      }else{
        let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
      }
    }
    
    getLocalTodos();
  },[])

  useEffect(() => {

    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    const filterHandler = () => {
      switch(status) {
        case 'completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true))
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    filterHandler();
    saveLocalTodos();
  },[todos, status])

  

  

  return (
    <header>
      <div className="App">
        <h1>Todo List</h1>
        <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus}></Form>
        <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos} ></TodoList>
      </div>
    </header>
    
  );
}

export default App;
