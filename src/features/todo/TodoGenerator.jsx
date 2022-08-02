import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { addTodo } from "./todoSlice";

function TodoGenerator() {

    const [message, setMessage] = useState(0);
    const dispatch = useDispatch();

    const addToList = () => {
        dispatch(addTodo(message));
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