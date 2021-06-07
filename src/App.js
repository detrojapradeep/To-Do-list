import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { TodoItem } from "./MyComponents/TodoItem";
import { Todos } from "./MyComponents/Todos";

function App() {
  let todos = [
    {
      sno: 1,
      title: "React App",
      desc: "Complete the React app before lunch"
    },
    {
      sno: 2,
      title:"Internship work",
      desc: "UI Changes for RK CMR software"
    },
    {
      sno: 3,
      title:"Research Paper",
      desc: "Research Paper complete"
    },
    {
      sno: 4,
      title:"Call",
      desc: "Call with Bhavna Mam"
    }
  ]
  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <Todos todos = {todos}/>
    </>
  );
}

export default App;
