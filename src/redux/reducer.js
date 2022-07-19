import { combineReducers } from "redux"
import filtersReducer from "../components/Todo/FiltersSlice";
import todoListReducer from "../components/TodoList/TodosSlice";

// const rootReducer = (state = {}, action) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     };
// }

// dùng combineReducer để viết gọn hơn
const rootReducer = combineReducers({
    filters: filtersReducer,
    todoList: todoListReducer
})

export default rootReducer;