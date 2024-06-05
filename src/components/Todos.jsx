import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import '../App.css';

const Todos = ({ todos, toggleCompleted, deleteTodo, updateTodo, isDarkMode }) => {
  const [newTodoId, setNewTodoId] = useState(null);
  const [todosToDelete, setTodosToDelete] = useState([]);

  useEffect(() => {
    if (todos.length > 0) {
      setNewTodoId(todos[todos.length - 1].id);
    }
  }, [todos]);

  const handleDeleteTodo = (todo) => {
    const confirmDelete = window.confirm(`Apakah Anda ingin menghapus "${todo.title}"?`);
    if (confirmDelete) {
      setTodosToDelete([...todosToDelete, todo.id]);
      setTimeout(() => {
        deleteTodo(todo.id);
        setTodosToDelete(todosToDelete.filter(todoId => todoId !== todo.id));
      }, 500); // Sesuaikan dengan durasi animasi fadeOut
    }
  };

  const styles = {
    container: {
      width: '60%',
      margin: '0 auto',
      backgroundColor: isDarkMode ? '#444' : '#fff',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s',
    },
  };

  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className={`${todo.id === newTodoId ? 'fadeIn' : ''} ${todosToDelete.includes(todo.id) ? 'fadeOut' : ''}`}
        >
          <TodoItem
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={() => handleDeleteTodo(todo)}
            updateTodo={updateTodo}
            isDarkMode={isDarkMode}
          />
        </div>
      ))}
    </div>
  );
};

export default Todos;
