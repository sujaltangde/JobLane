import { createSlice } from "@reduxjs/toolkit";

const JobSlice = createSlice({
    name: 'Job',
    initialState: {
        loading: false,
        error: null,
        jobDetails: {
            __v: 0,
            _id: "",
            category: "",
            companyLogo: {
                public_id: "",
                url: ""
            },
            companyName: "",
            createdAt: "",
            description: "",
            employmentType: "",
            experience: "",
            location: "",
            postedBy: "",
            salary: "",
            skillsRequired: [],
            status: "",
            title: " "
        },
        allJobs: []
    },
    reducers: {
        newPostRequest: (state) => {
            state.loading = true;
        },
        newPostSuccess: (state) => {
            state.loading = false;
        },
        newPostFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        allJobsRequest: (state) => {
            state.loading = true;
        },
        allJobsSuccess: (state, action) => {
            state.loading = false;
            state.allJobs = action.payload;
        },
        allJobsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        jobDetailsRequest: (state) => {
            state.loading = true;
        },
        jobDetailsSuccess: (state, action) => {
            state.loading = false;
            state.jobDetails = action.payload;
        },
        jobDetailsFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    }

})

export const { newPostRequest, newPostSuccess, newPostFail, allJobsRequest, allJobsSuccess, allJobsFail,
    jobDetailsRequest, jobDetailsSuccess, jobDetailsFail,
} = JobSlice.actions;

export default JobSlice.reducer