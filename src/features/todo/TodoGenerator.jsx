import { useState } from "react";

function TodoGenerator(props) {

    const [message, setMessage] = useState(0);
    const {addTodoItem} = props;

    const addToList = () => {
        addTodoItem(message)
    }

    const changeInput = (event) => {
        setMessage(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={changeInput}/>
            <button onClick={addToList}>add</button>
        </div>
    )
}

export default TodoGenerator;