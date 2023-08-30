import {createSlice} from '@reduxjs/toolkit'


const UserSlice = createSlice({
    name: 'User',
    initialState:{
        user: null,
        loading: false,
        error: null,
    },
    reducers:{
        
    }
})


// export const {} = UserSlice.actions

export default UserSlice.reducer
