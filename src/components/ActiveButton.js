import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ActiveButton({id,activeTodo,todo}) {

    const handleActiveClick =  () => {
        activeTodo(id);
    }

    return (
        <CheckCircleIcon style={{color:'green'}} onClick={handleActiveClick}>
            $
        </CheckCircleIcon>
    )
}
