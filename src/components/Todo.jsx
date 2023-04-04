import React from 'react'
import "./Todo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Todo({task,togglecomplete,deletetodo,edittodo}) {
  return (
  
    <div className='Todo'>
      <p onClick={()=>togglecomplete(task.id)} className={`${task.completed ? 'completed' : " "}`}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare}  onClick={()=>edittodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deletetodo(task.id)} /> 

      </div>
        

    </div>

  )
}

export default Todo