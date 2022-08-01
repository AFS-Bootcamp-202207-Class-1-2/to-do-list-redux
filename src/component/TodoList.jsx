import { useState } from "react";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {

    const [todoList, setTodoList] = useState("This is the first to do item");

    const addTodoItem = (newTodoItem) => {   
        setTodoList(todoList + ","+newTodoItem)     
    }

    return (
        <div>
            <h3>
                Todo List
            </h3>
            <TodoGroup todoList={todoList}></TodoGroup>
            <TodoGenerator addTodoItem={addTodoItem}></TodoGenerator>
        </div>

    )
}

export default TodoList;