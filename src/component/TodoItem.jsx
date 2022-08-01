import './todolist.css'

function TodoItem() {

    const toDoMessage = "This is the first todo tiem";

    return (
        <div className='to-do-item'>{toDoMessage}</div>
    )
}

export default TodoItem;