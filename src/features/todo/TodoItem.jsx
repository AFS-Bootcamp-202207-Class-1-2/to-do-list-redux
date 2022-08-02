import './todolist.css'

function TodoItem(props) {

    const {todoMessage} = props;

    return (
        <div className='to-do-item'>{todoMessage}</div>
    )
}

export default TodoItem;