import { createSlice } from '@reduxjs/toolkit'

const AdminSlice = createSlice({
    name: `admin`,
    initialState: {
        loading: false,
        allJobs: null,
        allApplications: null,
        allUsers: null,
        error: null,
        applicationData: {
            job: {
                title: "",
                companyName: "",
                location: "",
                experience: "",
                companyName: ""
            },
            applicant: {
                name: "",
                email: ""
            },
            applicantResume: {
                url: ""
            },
            status: "",
            createdAt: ""
        },
        userData: {
            name: "",
            email: "",
            role: "",
            createdAt: "",
            avatar: {
                url: "",
            },
        },
        jobData: {
            title: "",
            description: "",
            companyName: "",
            companyLogo: {
                url: ""
            },
            location: "",
            skillsRequired: [],
            category: "",
            employmentType: "",
            experience: "",
            salary: ""
        }
    },
    reducers: {
        getAllJobsRequest: (state) => {
            state.loading = true
        },
        getAllJobsSuccess: (state, action) => {
            state.loading = false
            state.allJobs = action.payload
        },
        getAllJobsFail: (state, action) => {
            state.loading = false
            error = action.payload
        },


        getAllUsersRequest: (state) => {
            state.loading = true
        },
        getAllUsersSuccess: (state, action) => {
            state.loading = false
            state.allUsers = action.payload
        },
        getAllUsersFail: (state, action) => {
            state.loading = false
            error = action.payload
        },


        getAllAppRequest: (state) => {
            state.loading = true
        },
        getAllAppSuccess: (state, action) => {
            state.loading = false
            state.allApplications = action.payload
        },
        getAllAppFail: (state, action) => {
            state.loading = false
            error = action.payload
        },

        getAppRequest: (state) => {
            state.loading = true
        },
        getAppSuccess: (state, action) => {
            state.loading = false
            state.applicationData = action.payload
        },
        getAppFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        updateAppRequest: (state) => {
            state.loading = true
        },
        updateAppSuccess: (state) => {
            state.loading = false
        },
        updateAppFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        deleteAppRequest: (state) => {
            state.loading = true
        },
        deleteAppSuccess: (state) => {
            state.loading = false
        },
        deleteAppFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        getUserRequest: (state) => {
            state.loading = true
        },
        getUserSuccess: (state, action) => {
            state.loading = false
            state.userData = action.payload
        },
        getUserFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },


        updateUserRequest: (state) => {
            state.loading = true
        },
        updateUserSuccess: (state) => {
            state.loading = false
        },
        updateUserFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        deleteUserRequest: (state) => {
            state.loading = true
        },
        deleteUserSuccess: (state) => {
            state.loading = false
        },
        deleteUserFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        getJobRequest: (state) => {
            state.loading = true;
        },
        getJobSuccess: (state, action) => {
            state.loading = false;
            state.jobData = action.payload
        },
        getJobFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },


        updateJobRequest: (state) => {
            state.loading = true;
        },
        updateJobSuccess: (state) => {
            state.loading = false;
        },
        updateJobFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        deleteJobRequest: (state) => {
            state.loading = true;
        },
        deleteJobSuccess: (state) => {
            state.loading = false;
        },
        deleteJobFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

    }
})

export const {
    getAllJobsRequest, getAllJobsSuccess, getAllJobsFail,
    getAllUsersRequest, getAllUsersSuccess, getAllUsersFail,
    getAllAppRequest, getAllAppSuccess, getAllAppFail,

    getAppRequest, getAppSuccess, getAppFail,
    updateAppRequest, updateAppSuccess, updateAppFail,
    deleteAppRequest, deleteAppSuccess, deleteAppFail,

    getUserRequest, getUserSuccess, getUserFail,
    updateUserRequest, updateUserSuccess, updateUserFail,
    deleteUserRequest, deleteUserSuccess, deleteUserFail,
    
    getJobRequest, getJobSuccess, getJobFail,
    updateJobRequest, updateJobSuccess, updateJobFail,
    deleteJobRequest, deleteJobSuccess, deleteJobFail

} = AdminSlice.actions;
export default AdminSlice.reducer;