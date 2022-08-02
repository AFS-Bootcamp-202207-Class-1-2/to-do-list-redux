import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";

function TodoList() {

    
    return (
        <div>
            <h3>
                Todo List
            </h3>
            <TodoGroup />
            <TodoGenerator />
        </div>

    )
}

export default TodoList;