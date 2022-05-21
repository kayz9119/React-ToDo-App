import {useState} from "react";
import {RiCloseCircleLine} from "react-icons/ri"
import {TiEdit} from "react-icons/ti"
const Todo = (props) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    function completeTodo(id) {

    }

    return props.todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-complete' : 'todo-inprocess'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>
    ))
}
export default Todo
