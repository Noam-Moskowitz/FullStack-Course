import { createSlice } from "@reduxjs/toolkit";

export const TodosSlice = createSlice({
    name: `todos`,
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Math.floor(Math.random() * 1_000),
                text: action.payload
            }

            state.push(todo)
        },
        updateTodo:(state, action) => state.map(td=> td.id=== action.payload.id? action.payload : td),
        removeTodo: (state, action) => state.filter(td => td.id !== action.payload.id) 
    }
});

export const { addTodo, removeTodo , updateTodo } = TodosSlice.actions;

export default TodosSlice.reducer;