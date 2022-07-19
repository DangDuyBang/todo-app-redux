import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    { id: '1', name: 'Learn React', completed: false, priority: "High" },
    { id: '2', name: 'Learn Redux', completed: true, priority: "Low" },
    { id: '3', name: 'Learn Database', completed: false, priority: "Medium" },
]

export default createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }, // tự động tạo ra action creator => Không cần tạo file action.js
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((todo) => todo.id = action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    }
})
