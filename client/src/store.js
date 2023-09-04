import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice'
import JobReducer from './slices/JobSlice'

export const store = configureStore({
    reducer:{
        user:UserReducer,
        job:JobReducer
    }
}) 
