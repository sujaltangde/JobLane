import {configureStore} from '@reduxjs/toolkit'
import UserReducer from './slices/UserSlice'

export const store = configureStore({
    reducer:{
        user:UserReducer,
    }
}) 
