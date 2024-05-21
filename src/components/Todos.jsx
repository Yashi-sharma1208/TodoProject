import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const remove = (id) =>{
        dispatch(removeTodo(id))
    }
  return (
    <>
    {
        todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button onClick={()=>remove(todo.id)}>X</button>
            </li>
        ))
    }
    </>
  )
}

export default Todos
