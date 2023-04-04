import React from 'react'
import { useState } from 'react'
import { TodoForm } from './TodoForm'
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from './EditTodofrom';
uuidv4()

function Todowrapper() {
    const [todos,settodos]=useState([])
    const addTodo = todo =>{
        settodos([...todos,{id :uuidv4(),task :todo,
        completed :false,isEdited:false}])
        console.log(todos);

    }
    const togglecomplete =id =>{settodos(todos.map(todo =>todo.id === id ?{...todo, completed :! todo.completed }:todo))
    }

    const deletetodo = id =>{settodos(todos.filter(todo=> todo.id !== id))
    }
    const edittodo = id =>{settodos(todos.map(todo => todo.id === id ?{ ...todo,isEdited: !todo.isEdited}:todo))
    }

    const edittask=(task,id)=>{settodos(todos.map(todo=>todo.id === id ?{...todo,task,isEdited:!todo.isEdited}:todo))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Todo App</h1>
        <TodoForm addTodo={addTodo}/>

        {todos.map((todo,index)=>(
            todo.isEdited ?(
                <EditTodoForm edittodo={edittask} task={todo}/>
            ):(

                <Todo task={todo} key={index} togglecomplete={togglecomplete} deletetodo={deletetodo} edittodo={edittodo} />

            )
            
        ))}
       
    </div>
  )
}

export default Todowrapper