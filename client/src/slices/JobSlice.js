import { createSlice } from "@reduxjs/toolkit";

const JobSlice = createSlice({
    name: 'Job',
    initialState: {
        loading: false,
        error: null,
        jobDetails: null ,
        allJobs: []
    },
    reducers: {
        newPostRequest: (state) => {
            state.loading = true ;
        },
        newPostSuccess: (state) => {
            state.loading = false ;
        },
        newPostFail: (state, action) => {
            state.loading = false ;
            state.error = action.payload
        },
    }

})

export const {newPostRequest, newPostSuccess, newPostFail} = JobSlice.actions ;

export default JobSlice.reducer