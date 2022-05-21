import TodoForm from "./components/TodoForm";
import { useState } from "react";
import Todo from "./components/Todo";
import "./todos.css";

function App() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if(!todo.text || /^\s$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
    }

    const completeTodo = id => {
        let updatedTodos = todos.map( todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    return (
    <div className="container">
        <TodoForm onSubmit={addTodo} />
        <div className="todos-container">
            <Todo todos={todos} completeTodo={completeTodo}/>
        </div>
    </div>
  );
}

export default App;
