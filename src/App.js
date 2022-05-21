import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Todo from "./components/Todo";
function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.text || /^\s$/.test(todo.text)) {
            return
        }
        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }
  return (
    <>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos}/>
    </>
  );
}

export default App;
