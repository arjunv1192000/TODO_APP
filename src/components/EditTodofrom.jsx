import React from 'react'
import { useState } from 'react'

export const EditTodoForm = ({edittodo,task}) => {
    const [value,setvalue]= useState(task.task)
    const handleSubmit =e =>{
        e.preventDefault();

        edittodo(value,task.id)
        setvalue("")

    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' value={value} placeholder='update task'
         onChange={(e)=> setvalue(e.target.value) }/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

