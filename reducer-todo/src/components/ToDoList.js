import React, { useReducer } from 'react'
import ToDoForm from './ToDoForm'

// REDUCER
  // IMPORT INITIALSTATE AND REDUCER
import { initialState, reducer } from '../reducers/ToDoReducer'

const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return(
    <div>
      <h1>Hello ToDoList!</h1>
      <ToDoForm dispatch={dispatch}/>
      {
        initialState.map(item => {
          return(
            <div key={item.id} className={`task ${item.completed ? ' completed': ' '}`} onClick={()=> dispatch({ type: 'EDIT_TASK' })}>
              <h3>{item.task}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default ToDoList