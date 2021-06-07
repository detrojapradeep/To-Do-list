import React from 'react'

export const TodoItem = ({todo}) => {
    return (
        <div>
            <h4>{todo.sno} : {todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger">delete</button>
        </div>
    )
}
