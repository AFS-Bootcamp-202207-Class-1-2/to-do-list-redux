import './todolist.css'
import { useDispatch } from "react-redux/es/exports";
import { changeTodoState, deleteTodoItem } from './todoSlice';


function TodoItem(props) {

    const {context} = props;
    const {index} = props;
    const {state} = props;
    const dispatch = useDispatch();


    const changetodoState = () => {
        dispatch(changeTodoState(index));
    }

    const deleteTodo = () => {
        dispatch(deleteTodoItem(index));
    }

    

    const content = (state === true ? <del>{context}</del> : context);

   
        return (
            <div className='to-do-item' >
                <div className='to-do-content' onClick={changetodoState}>{content} </div>
                <div className='delete-item'><button onClick={deleteTodo}>x</button></div>
            </div>
            
        )
    
    
}

export default TodoItem;