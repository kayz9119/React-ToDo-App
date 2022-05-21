import {useState} from "react";

function TodoForm(props) {
    const [input, setInput] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 9999),
            text: input,
            completeTodo: false
        })
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return(
        <>
            <form className="todoForm" onSubmit={handleSubmit}>
                <input type="text" placeholder="Write some todo" value={input} className="todoInput" name="text" onChange={handleChange} />
                <button className="todoButton">Add a Todo!</button>
            </form>
        </>
    );
}

export default TodoForm;
