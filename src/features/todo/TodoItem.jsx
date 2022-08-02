import './todolist.css'


function TodoItem(props) {

    const {context} = props;
    

    return (
        <div className='to-do-item' >{context}</div>
    )
}

export default TodoItem;