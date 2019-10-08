import React, { useState } from 'react';

const ToDoForm = props => {
  const [newTask, setNewTask] = useState('');

  const handleChanges = e => {
    setNewTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  }

  return(
    <div>
      Hello Form!
      <form>
        <input
          className='add-task'
          type='text'
          name='add'
          value={newTask}
          onChange={handleChanges}
        />
      </form>
      <button  onSubmit={handleSubmit} onClick={() => 
        props.dispatch({ type: 'ADD_TASK', payload: newTask })}
      >
        Add Task
      </button>
    </div>
  )
}

export default ToDoForm;