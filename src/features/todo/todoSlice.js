import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
    todos: [
        {
            id: uuidv4(),
            text: "This is the first todo item",
            state: false
        }
    ]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        done(){

        },
        cancel(){

        }
    }
})

export default todoSlice.reducers;