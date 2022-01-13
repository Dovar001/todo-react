import React from 'react'
import ActiveButton from './ActiveButton'
import DeleteButton from './DeleteButton'
import '../styles/style.css'

export default function TodoCard(props) {
    return (
        <div className = {props.todo.isActive ? 'todo-card active' : 'todo-card'} >
            {props.todo.text}
            <div>
                <ActiveButton activeTodo={props.activeTodo} id={props.todo.id} todo={props.todo} />
                <DeleteButton deleteTodo={props.deleteTodo} id={props.todo.id} />
            </div>

        </div>
    )
}


