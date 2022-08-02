import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    todos: [
        {
            id: uuidv4(),
            context: "This is the first todo item",
            state: false
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
            state.todos = [...state.todos, newTodo]
        }
        
        
    }
})

export default todoSlice.reducer;
export const {addTodo} = todoSlice.actions;