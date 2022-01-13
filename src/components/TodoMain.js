import {React,useState} from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { Container } from '@mui/material'


export default function TodoMain() {

const [todos,setTodos] = useState([
        {
            id:Date.now().toString()+Math.random(),
            text:'08:00 завтрак',
            isActive:true
        },
        {
            id:Date.now().toString()+Math.random(),
            text:'12:00 обед',
            isActive:true
        },
        {
            id:Date.now().toString()+Math.random(),
            text:'18:00 ужин',
            isActive:false
        },
        {
            id:Date.now().toString()+Math.random(),
            text:'20:00 тренировка',
            isActive:false
        },
    ])

    function addTodo(text){
        setTodos([...todos,{
            id:Date.now().toString()+Math.random(),
            text:text,
            isActive:false
            }])
    }

    const deleteTodo = (id) =>{
         setTodos([...todos.filter(todo=>todo.id !== id)]);
    }

    const activeTodo = (id) => {
      setTodos([...todos.map(todo => 
           todo.id === id ? {...todo, isActive: !todo.isActive} : {...todo}
      )])
    }

    
    return (
        <div >
        <Container maxWidth='sm' style={{textAlign:'center',border:'2px solid gray',background:'linear-gradient(90deg, #aea4e3, #d3ffe8)'}}>
        <h2 >Todo List</h2>
          <AddTodo addTodo={addTodo}  />
          <TodoList deleteTodo={deleteTodo} todos={todos} activeTodo={activeTodo}/>
        </Container>
        </div>
    )
}
