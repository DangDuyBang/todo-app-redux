import { configureStore } from "@reduxjs/toolkit"
import FiltersSlice from "../components/Filters/FiltersSlice";
import TodosSlice from "../components/TodoList/TodosSlice";

const store = configureStore({ // nhận vào một object
    // Không cần combine reducer
    reducer: {
        filters: FiltersSlice.reducer,
        todoList: TodosSlice.reducer
    }
})

export default store;

// store khi sử dụng redux toolkit
