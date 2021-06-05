import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from './MyComponents/Footer';
import { TodoItem } from "./MyComponents/TodoItem";
import { Todos } from "./MyComponents/Todos";

function App() {
  return (
    <>
      <Header title="Todo List" searchBar={true} />
      <Footer />
      <TodoItem />
      <Todos />
    </>
  );
}

export default App;
