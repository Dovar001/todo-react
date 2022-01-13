import {React,useState} from 'react'
import Button from '@mui/material/Button'
import Input from '@mui/material/Input'

export default function AddTodo({addTodo}) {

    const[userInput,setUserInput] = useState('')
  
   function handleFormSubmit(e){
        e.preventDefault();
        if(!userInput) return;
        addTodo(userInput);
        setUserInput('')
    }

    function handleInputChange(event){
        setUserInput(event.target.value)
    }


    return (
        <div>
           <form onSubmit={handleFormSubmit} >

               <Input 
               type="text"
             variant='filled'
                placeholder='Add new todo'
                value={userInput}
                onChange={handleInputChange}
                />

                <Button type='submit' variant='contained' style={{marginLeft:'20px'}}>Create</Button>
           </form> 
        </div>
    )
}
