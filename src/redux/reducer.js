const initState = {
    filter: {
        search: '',
        status: "All",
        prority: []
    },
    todoList: [
        { id: '1', name: 'Learn React', completed: false, priority: "High" },
        { id: '2', name: 'Learn Redux', completed: true, priority: "Low" },
        { id: '3', name: 'Learn Database', completed: false, priority: "Medium" },
    ]
}

const rootReducer = (state = initState, action) => {

    // action: {
    //     type: todoList/addTodo,
    //     payload: { id: '5', name: 'Learn JavaScript', completed: false, prority: 'High' },
    // }

    console.log({ state, action });

    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }

        default:
            return state
    }
}

export default rootReducer;