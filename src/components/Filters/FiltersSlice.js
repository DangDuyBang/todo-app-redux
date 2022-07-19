import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: '',
    status: "All",
    priorities: []
}

export default createSlice({
    name: 'filters',
    initialState,
    reducers: {
        searchFilterChange: (state, action) => {
            // cho phép viết code mutation (thay đổi trực tiếp) Nhờ có lib/IMMER
            state.search = action.payload;
        }, // redux core => {type: 'filter/searchFilterChange'}
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload;
        }
    }
})


