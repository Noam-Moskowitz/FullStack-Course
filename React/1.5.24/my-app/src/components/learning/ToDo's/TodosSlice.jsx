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
        removeTodo: (state, action) => {
            console.log(action.payload.id);
            state.filter(todo => todo.id !== action.payload.id)
        }
    }
});

export const { addTodo, removeTodo } = TodosSlice.actions;

export default TodosSlice.reducer;