import TodoItem from "./TodoItem";
import './todolist.css'
import { useSelector } from "react-redux/es/exports";

function TodoGroup(props) {

    const todoList = useSelector(state => state.todo.todos)

    const todoGroup = todoList.map((todo, index) => <TodoItem context={todo.context} state={todo.state} index={index} key={todo.id}></TodoItem> );

    return (
        <div className="to-do-group">
            {/* {todoGroup}    */}
            {todoGroup}
        </div>
    )
}

export default TodoGroup