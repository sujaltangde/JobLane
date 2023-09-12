import {createSlice} from '@reduxjs/toolkit'

const ApplicationSlice = createSlice({
    name: 'Application',
    initialState:{
        loading: false,
        error: null,
        appliedJobs: [],
        applicationDetails: {

        }
    },
    reducers:{
        createApplicationRequest: (state)=>{
            state.loading = true 
        },
        createApplicationSuccess: (state)=>{
            state.loading = false 
        },
        createApplicationFail: (state, action)=>{
            state.loading = false
            state.error = action.payload 
        },

        allAppliedJobsRequest: (state)=>{
            state.loading = true 
        },
        allAppliedJobsSuccess: (state,action)=>{
            state.loading = false 
            state.appliedJobs = action.payload
        },
        allAppliedJobsFail: (state, action)=>{
            state.loading = false
            state.error = action.payload 
        },


        applicationDetailsRequest: (state)=>{
            state.loading = true ;
        },
        applicationDetailsSuccess: (state, action)=>{
            state.loading = false ;
            state.applicationDetails = action.payload
        },
        applicationDetailsFail: (state, action)=>{
            state.loading = false ;
            state.error = action.payload
        },


    }
})

export const {createApplicationRequest ,createApplicationSuccess, createApplicationFail,
    allAppliedJobsRequest, allAppliedJobsSuccess, allAppliedJobsFail,
    applicationDetailsRequest, applicationDetailsSuccess, applicationDetailsFail} = ApplicationSlice.actions

export default ApplicationSlice.reducer