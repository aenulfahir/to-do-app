import React, { useState } from 'react';
import { FaEdit, FaSave, FaTrash } from 'react-icons/fa';
import '../App.css';

const TodoItem = ({ todo, toggleCompleted, deleteTodo, updateTodo, updateStatus, isDarkMode }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newStatus, setNewStatus] = useState(todo.status);

  const getTodoTitleStyle = () => {
    switch (todo.status) {
      case 'Complete':
        return { textDecoration: 'line-through', color: '#28a745' };
      case 'In Progress':
        return { textDecoration: 'underline', color: '#ffc107' };
      case 'Todo':
      default:
        return { textDecoration: 'none', color: isDarkMode ? '#f0f0f0' : '#333' };
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    updateTodo(todo.id, newTitle);
    updateStatus(todo.id, newStatus);
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
    select: {
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
    statusBadge: {
      fontWeight: 'bold',
      padding: '5px 10px',
      borderRadius: '5px',
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

  const getStatusBadgeStyle = () => {
    switch (todo.status) {
      case 'Complete':
        return { ...styles.statusBadge, backgroundColor: '#28a745', color: '#fff' };
      case 'In Progress':
        return { ...styles.statusBadge, backgroundColor: '#ffc107', color: '#333' };
      case 'Todo':
      default:
        return { ...styles.statusBadge, backgroundColor: isDarkMode ? '#777' : '#ddd', color: isDarkMode ? '#f0f0f0' : '#333' };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
        checked={todo.status === 'Complete'}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={styles.input}
          />
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            style={styles.select}
          >
            <option value="Todo">Todo</option>
            <option value="In Progress">In Progress</option>
            <option value="Complete">Complete</option>
          </select>
        </>
      ) : (
        <>
          <p style={{ ...styles.todoTitle, ...getTodoTitleStyle() }}>{todo.title}</p>
          <span style={getStatusBadgeStyle()}>{todo.status}</span>
        </>
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
