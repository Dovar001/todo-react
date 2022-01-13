import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

export default function DeleteButton({deleteTodo,id}) {
   
 
    const handleDeleteTodo = () => {
        deleteTodo(id)
    }
    
    return (
        <CloseIcon onClick={handleDeleteTodo}>
            X  
        </CloseIcon>
    )
}
  