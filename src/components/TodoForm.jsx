import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo(title)
    setTitle('') // Reset title-nya
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  console.log(title)

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
  )
}

const formStyles = {
  container: {
    marginBottom: '32px',
  },
  formInput: {
    height: '66px',
    width: '40%',
    fontSize: '16px',
    padding: '0 16px',
  },
  button: {
    height: '72px',
    fontSize: '16px',
  },
}

export default TodoForm
