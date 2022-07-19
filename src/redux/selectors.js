import { createSelector } from 'reselect'

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter((todo) => {
//         return todo.name.includes(state.filter.search)
//     })

//     return todoRemaining;
// }

export const todoListSelector = (state) => state.todoList;
export const searchFilterSelector = (state) => state.filters.search;
export const filterStatusrSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
    todoListSelector,
    searchFilterSelector,
    filterStatusrSelector,
    filterPrioritiesSelector,
    (
        todoList,
        searchText,
        status, // status = 'All', 'Completed', 'To do'
        priorities,
    ) => {
        return todoList.filter((todo) => {
            if (status === 'All') {
                return priorities.length
                    ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                    : todo.name.includes(searchText);
            }
            return (
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.length ? priorities.includes(todo.priority) : true)
            );
        });
    }
);

// reselect => có sẵn trong redux-toolkit // yarn add reselect