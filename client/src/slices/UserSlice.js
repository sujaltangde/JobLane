import { createSlice } from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'User',
    initialState: {
        loading: false,
        error: null,
        isLogin: false,
        me: {
            avatar: {
                public_id: "",
                url: "",
            },
            resume: {
                public_id: "",
                url: "",
            },
            _id: "",
            name: "",
            email: "",
            password: "",
            role: "",
            skills: [],
            createdAt: ""
        },
        userDetails: {
            avatar: {
                public_id: "",
                url: "",
            },
            resume: {
                public_id: "",
                url: "",
            },
            _id: "",
            name: "",
            email: "",
            password: "",
            role: "",
            skills: [],
            createdAt: ""
        },
    },
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        registerFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },

        loginRequest: (state) => {
            state.loading = true;
        },
        loginSuccess: (state) => {
            state.loading = false;
        },
        loginFail: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },


        isLoginRequest: (state) => {
            state.isLogin = false
        },
        isLoginSuccess: (state, action) => {
            state.isLogin = action.payload

        },
        isLoginFail: (state, action) => {
            state.isLogin = false
        },


        getMeRequest: (state) => {
            state.loading = true
        },
        getMeSuccess: (state, action) => {
            state.loading = false
            state.me = action.payload
        },
        getMeFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },

        changePasswordRequest : (state) => {
            state.loading = true ;
        },
        changePasswordSuccess : (state) => {
            state.loading = false ;
        },
        changePasswordFail : (state,action) => {
            state.loading = false ;
            state.error = action.payload
        },


        updateProfileRequest : (state) => {
            state.loading = true ;
        },
        updateProfileSuccess : (state) => {
            state.loading = false ;
        },
        updateProfileFail : (state,action) => {
            state.loading = false ;
            state.error = action.payload
        },

        deleteAccountRequest: (state)=>{
            state.loading = true
        },
        deleteAccountSuccess: (state)=>{
            state.loading = false
        },
        deleteAccountFail: (state, action)=>{
            state.loading = false ;
            state.error = action.payload
        },

        logoutClearState:(state)=>{
            state.me = {
                avatar: {
                    public_id: "",
                    url: "",
                },
                resume: {
                    public_id: "",
                    url: "",
                },
                _id: "",
                name: "",
                email: "",
                password: "",
                role: "",
                skills: [],
                createdAt: ""
            }
        }

    }
})


export const { registerRequest, registerSuccess, registerFail, loginRequest, loginSuccess, loginFail
    , isLoginRequest, isLoginSuccess, isLoginFail, getMeRequest, getMeSuccess, getMeFail,
    changePasswordRequest,changePasswordSuccess,changePasswordFail,
    updateProfileRequest,updateProfileSuccess,updateProfileFail,
    deleteAccountRequest, deleteAccountSuccess, deleteAccountFail, logoutClearState
} = UserSlice.actions

export default UserSlice.reducer
