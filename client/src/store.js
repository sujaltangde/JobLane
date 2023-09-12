import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice'
import JobReducer from './slices/JobSlice'
import ApplicationReducer from './slices/ApplicationSlice'

export const store = configureStore({
    reducer:{
        user:UserReducer,
        job:JobReducer,
        application:ApplicationReducer
    }
}) 
