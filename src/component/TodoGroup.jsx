import TodoItem from "./TodoItem";
import './todolist.css'

function TodoGroup(props) {

    const {todoList} = props;
    const todoGroup = todoList.map((todoMessage, index) => <TodoItem todoMessage={todoMessage} key={index}></TodoItem> );

    return (
        <div className="to-do-group">
            {todoGroup}   
        </div>
    )
}

export default TodoGroup