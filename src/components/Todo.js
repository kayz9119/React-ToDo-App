// import {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri"
const Todo = (props) => {
    return props.todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo todo-complete' : 'todo todo-inprocess'} key={index}>
            <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                onClick={() => props.removeTodo(todo.id)}
                />
            </div>
        </div>
    ))
}
export default Todo
