import React from 'react'
import { TodoItem } from "../MyComponents/TodoItem";
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo List</h3>
            {props.todos.legth === 0 ? "No ToDos to Display" : props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })
            }
        </div>
    )
}
