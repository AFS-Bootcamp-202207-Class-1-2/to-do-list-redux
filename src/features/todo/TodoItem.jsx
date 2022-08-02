import './todolist.css'
import { useDispatch } from "react-redux/es/exports";
import { changeTodoState, deleteTodoItem } from './todoSlice';


function TodoItem(props) {

    const {todoContext} = props;
    const {todoIndex} = props;
    const {todoDone} = props;
    const dispatch = useDispatch();

    const changetodoState = () => {
        dispatch(changeTodoState(todoIndex));
    }

    const deleteTodo = () => {
        dispatch(deleteTodoItem(todoIndex));
    }


    const content = (todoDone === true ? <del>{todoContext}</del> : todoContext);

   
    return (
        <div className='to-do-item' >
            <div className='to-do-content' onClick={changetodoState}>{content} </div>
            <div className='delete-item'><button onClick={deleteTodo}>x</button></div>
        </div>
        
    )
    
    
}

export default TodoItem;