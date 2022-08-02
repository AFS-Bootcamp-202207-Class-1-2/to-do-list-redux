import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    todos: [
        {
            id: uuidv4(),
            context: "This is the first todo item",
            done: false
        }
    ]
   
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo(state, action){
            
            const newTodo = {
                id: uuidv4(),
                context: action.payload,
                state: false
            }
            state.todos.push(newTodo);
        },
        changeTodoState(state, action){
            state.todos[action.payload].done = !state.todos[action.payload].done;

        },
        deleteTodoItem(state, action){
            state.todos.splice(action.payload, 1);
        }
        
    }
})

export default todoSlice.reducer;
export const {addTodo, changeTodoState, deleteTodoItem} = todoSlice.actions;