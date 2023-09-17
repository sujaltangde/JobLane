import {createSlice} from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name: `admin`,
    initialState:{
        loading: false,
        allJobs: null ,
        allApplications: null ,
        allUsers: null ,
        error : null 
    },
    reducers:{
        getAllJobsRequest: (state)=>{
            state.loading = true 
        },
        getAllJobsSuccess: (state, action)=>{
            state.loading = false 
            state.allJobs = action.payload
        },
        getAllJobsFail: (state, action)=>{
            state.loading = false 
            error = action.payload
        },


        getAllUsersRequest: (state)=>{
            state.loading = true 
        },
        getAllUsersSuccess: (state, action)=>{
            state.loading = false 
            state.allUsers = action.payload
        },
        getAllUsersFail: (state, action)=>{
            state.loading = false 
            error = action.payload
        },


        getAllAppRequest: (state)=>{
            state.loading = true 
        },
        getAllAppSuccess: (state, action)=>{
            state.loading = false 
            state.allApplications = action.payload
        },
        getAllAppFail: (state, action)=>{
            state.loading = false 
            error = action.payload
        },
    }
})

export const {
    getAllJobsRequest,getAllJobsSuccess,getAllJobsFail,
    getAllUsersRequest,getAllUsersSuccess,getAllUsersFail,
    getAllAppRequest,getAllAppSuccess,getAllAppFail
} = AdminSlice.actions ;
export default AdminSlice.reducer ;