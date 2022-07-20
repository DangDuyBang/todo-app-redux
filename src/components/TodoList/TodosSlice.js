import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

// const initialState = [
// { id: '1', name: 'Learn React', completed: false, priority: "High" },
// { id: '2', name: 'Learn Redux', completed: true, priority: "Low" },
// { id: '3', name: 'Learn Database', completed: false, priority: "Medium" },
//]

const TodosSlice = createSlice({
    name: 'todoList',
    initialState: { status: 'idle', todos: [] }, // ở redux thunk sẽ chuyển từ [] => { status: '', todos: [] }
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        }, // tự động tạo ra action creator => Không cần tạo file action.js
        toggleTodoStatus: (state, action) => {
            const currentTodo = state.find((todo) => todo.id = action.payload);
            currentTodo.completed = !currentTodo.completed;
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchTodos.fulfilled, (state, action) => {
            console.log({ action })
            state.todos = action.payload;
            state.status = 'idle';
        }).addCase(addNewTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
        }).addCase(updateTodo.fulfilled, (state, action) => {
            let currentTodo = state.todos.find((todo) => todo.id = action.payload);
            currentTodo = action.payload;
        });
    }
})

export default TodosSlice

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    return data.todos;
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
    const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify(newTodo)
    })
    const data = await res.json();

    return data.todos;
})

export const updateTodo = createAsyncThunk('todos/updateTodo', async (updatedTodo) => {
    const res = await fetch('/api/updateTodo', {
        method: 'POST',
        body: JSON.stringify(updatedTodo)
    })
    const data = await res.json();
    console.log('[updateTodo]', { data })
    return data.todos;
})



/*
    Tạo ra 3 action (có 3 trạng thái)
    => todos/fetchTodos/pending
    => todos/fetchTodos/fullfilled
    => todos/fetchTodos/rejected
*/

// export function addTodos(todo) { // thunk action creators () => { return thunk function }
//     return function addTodosThunk(dispatch, getState) { // thunk action
//         // custom lại payload trước khi nó được đi vào reducer
//         console.log('[addTodosThunk]', getState());
//         console.log({ todo });

//         // Sau khi custom
//         todo.name = 'Redux thunk updated';
//         dispatch(TodosSlice.actions.addTodo(todo));

//         console.log('[addTodosThunkAfter]', getState());
//     }
// }
