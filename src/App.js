import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { TodoItem } from "./MyComponents/TodoItem";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';



function App() {

  const onDelete = (todo) => {
    console.log("I am on delete of ", todo);

    // This way dosent work in React
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

  }
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{
    sno: 1,
    title: "React App",
    desc: "Complete the React app before lunch"
  },
  {
    sno: 2,
    title: "Internship work",
    desc: "UI Changes for RK CMR software"
  },
  {
    sno: 3,
    title: "Research Paper",
    desc: "Research Paper complete"
  },
  {
    sno: 4,
    title: "Call",
    desc: "Call with Bhavna Mam"
  }]);
  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
