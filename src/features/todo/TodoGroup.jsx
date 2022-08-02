import TodoItem from "./TodoItem";
import './todolist.css'
import { useSelector } from "react-redux/es/exports";

function TodoGroup() {

    const todoList = useSelector(state => state.todo.todos)

    const todoGroup = todoList.map((todo) => <TodoItem 
    context={todo.context}  key={todo.id}></TodoItem> );

    return (
        <div className="to-do-group">
            {todoGroup}
        </div>
    )
}

export default TodoGroup