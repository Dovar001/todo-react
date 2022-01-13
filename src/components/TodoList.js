import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    return (
        <div style={{marginTop:'80px'}}>
      
           {props.todos.map(todo=>{
               return <TodoCard todo={todo} key={todo.id} deleteTodo={props.deleteTodo} activeTodo={props.activeTodo}  />
           })} 
        </div>
    )
}
