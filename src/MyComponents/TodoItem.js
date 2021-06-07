import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.sno} : {todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm my-1" onClick = {()=>{onDelete(todo)}}>delete</button>
        </div>
    )
}
