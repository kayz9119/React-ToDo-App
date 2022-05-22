// import {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri"
const Todo = ({ todos, completeTodo, removeTodo}) => {
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo todo-complete' : 'todo todo-inprocess'} key={index}>
            <div className="todo-text" key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                onClick={() => removeTodo(todo.id)}
                />
            </div>
        </div>
    ))
}
export default Todo
