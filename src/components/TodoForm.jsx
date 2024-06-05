import React, { useState } from 'react';
import '../App.css';

const TodoForm = ({ addTodo, isDarkMode }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(title);
    setTitle(''); // Reset title-nya
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const formStyles = {
    container: {
      marginBottom: '32px',
    },
    formInput: {
      height: '66px',
      width: '40%',
      fontSize: '16px',
      padding: '0 16px',
      backgroundColor: isDarkMode ? '#666' : '#fff',
      color: isDarkMode ? '#f0f0f0' : '#333',
      border: 'none',
      borderBottom: `2px solid ${isDarkMode ? '#888' : '#ccc'}`,
      transition: 'background-color 0.3s, color 0.3s, border-bottom-color 0.3s',
    },
    button: {
      height: '72px',
      fontSize: '16px',
      marginLeft: '10px',
      cursor: 'pointer',
      backgroundColor: isDarkMode ? '#333' : '#007bff',
      color: isDarkMode ? '#f0f0f0' : '#fff',
      border: 'none',
      borderRadius: '5px',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <div style={formStyles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add your Todo"
          style={formStyles.formInput}
          onChange={handleChangeTitle}
          value={title} // Atur nilai dari input sesuai dengan state "title"
        />
        <button type="submit" style={formStyles.button}>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
