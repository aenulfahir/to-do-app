import React, { useState } from 'react';
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa';
import '../App.css';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, updateTodo, isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const getTodoTitleStyle = () => {
    if (todo.completed) {
      return { textDecoration: 'line-through', color: isDarkMode ? '#d3d3d3' : '#d3d3d3' };
    } else {
      return { textDecoration: 'none', color: isDarkMode ? '#f0f0f0' : '#333' };
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(todo.id, newTitle);
    setIsEditing(false);
  };

  const styles = {
    todoItem: {
      border: `2px solid ${isDarkMode ? '#555' : '#f4f4f4'}`,
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      margin: '10px 0',
      borderRadius: '8px',
      backgroundColor: isDarkMode ? '#555' : '#f9f9f9',
      transition: 'background-color 0.3s, border-color 0.3s',
    },
    todoTitle: {
      flexGrow: 1,
      marginLeft: '10px',
    },
    input: {
      flexGrow: 1,
      fontSize: '16px',
      padding: '5px',
      marginLeft: '10px',
      backgroundColor: isDarkMode ? '#666' : '#fff',
      color: isDarkMode ? '#f0f0f0' : '#333',
      border: 'none',
      borderBottom: `2px solid ${isDarkMode ? '#888' : '#ccc'}`,
      transition: 'background-color 0.3s, color 0.3s, border-bottom-color 0.3s',
    },
    checkbox: {
      height: '18px',
      width: '18px',
    },
    iconButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '20px',
      marginLeft: '5px',
    },
    editButton: {
      color: '#007bff',
    },
    saveButton: {
      color: '#28a745',
    },
    deleteButton: {
      color: '#dc3545',
    },
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.completed}
      />
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.input}
        />
      ) : (
        <p style={{ ...styles.todoTitle, ...getTodoTitleStyle() }}>{todo.title}</p>
      )}
      {isEditing ? (
        <button style={{ ...styles.iconButton, ...styles.saveButton }} onClick={handleSaveClick}>
          <FaSave />
        </button>
      ) : (
        <button style={{ ...styles.iconButton, ...styles.editButton }} onClick={handleEditClick}>
          <FaEdit />
        </button>
      )}
      <button style={{ ...styles.iconButton, ...styles.deleteButton }} onClick={deleteTodo}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
