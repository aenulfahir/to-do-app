import React, { useState } from 'react';
import Todos from './components/Todos'; 
import TodoForm from './components/TodoForm';
import { FaSun, FaMoon } from 'react-icons/fa';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  const [newTodoId, setNewTodoId] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
    setNewTodoId(newTodo.id);
  };

  const updateTodo = (id, newTitle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyles = {
    container: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: isDarkMode ? '#333' : '#f0f0f0',
      color: isDarkMode ? '#f0f0f0' : '#333',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'background-color 0.3s, color 0.3s',
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '36px',
      marginRight: '20px',
    },
    toggleButton: {
      padding: '10px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: isDarkMode ? '#f0f0f0' : '#333',
      color: isDarkMode ? '#333' : '#f0f0f0',
      border: 'none',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      transition: 'background-color 0.3s, color 0.3s',
    },
    icon: {
      marginRight: '8px',
    },
    footer: {
      marginTop: '20px',
      padding: '10px',
      backgroundColor: isDarkMode ? '#222' : '#ddd',
      color: isDarkMode ? '#ccc' : '#333',
      borderTop: `1px solid ${isDarkMode ? '#444' : '#ccc'}`,
    },
  };

  return (
    <div style={appStyles.container}>
      <div>
        <div style={appStyles.header}>
          <h1 style={appStyles.title}>My Todo List</h1>
          <button style={appStyles.toggleButton} onClick={toggleMode}>
            {isDarkMode ? (
              <>
                <FaSun style={appStyles.icon} /> 
              </>
            ) : (
              <>
                <FaMoon style={appStyles.icon} />
              </>
            )}
          </button>
        </div>
        <TodoForm addTodo={addTodo} isDarkMode={isDarkMode} /> 
        <Todos
          todos={todos}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          newTodoId={newTodoId}
          isDarkMode={isDarkMode}
        />
      </div>
      <footer style={appStyles.footer}>
        &copy; 2024 Muhammad Aenul Fahir
      </footer>
    </div>
  );
}

export default App;
