import React from 'react'

// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted }) => {
    const getTodoTitleStyle = () => {
      if (todo.completed === true) {
        return { textDecoration: 'line-through' }
      } else {
        return { textDecoration: 'none' }
      }
    }
  
    return (
        <div style={styles.todoItem}>
          <input
            type="checkbox"
            style={styles.checkbox}
            //  Memberikan id dari todo sebagai argument
            onChange={() => toggleCompleted(todo.id)}
          />
          <p style={getTodoTitleStyle()}>{todo.title}</p>
        </div>
      )
    }
    
    const styles = {
      todoItem: {
        border: '2px solid #f4f4f4',
        fontSize: '24px',
        // Tambahkan styles di bawah ini
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      // Tambahkan styles di bawah ini
      checkbox: {
        marginRight: '10px',
        height: '18px',
        width: '18px',
      },
    }
  
  export default TodoItem