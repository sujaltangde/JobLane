import {
    getAllJobsRequest,getAllJobsSuccess,getAllJobsFail,
    getAllUsersRequest,getAllUsersSuccess,getAllUsersFail,
    getAllAppRequest,getAllAppSuccess,getAllAppFail
} from '../slices/AdminSlice'
import axios from 'axios'

export const getAllJobsAdmin = () => async (dispatch) => {
    try{
        dispatch(getAllJobsRequest()) ;
            
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/admin/allJobs",config) ;

        dispatch(getAllJobsSuccess(data.jobs))

    }catch(err){
        dispatch(getAllJobsFail(err.response.data.message)) ;
    }
}

export const getAllUsersAdmin = () => async (dispatch) => {
    try{
        dispatch(getAllUsersRequest()) ;
            
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/admin/allUsers",config) ;

        dispatch(getAllUsersSuccess(data.users))

    }catch(err){
        dispatch(getAllUsersFail(err.response.data.message)) ;
    }
}


export const getAllAppAdmin = () => async (dispatch) => {
    try{
        dispatch(getAllAppRequest()) ;
            
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/admin/allApp",config) ;

        dispatch(getAllAppSuccess(data.applications))

    }catch(err){
        dispatch(getAllAppFail(err.response.data.message)) ;
    }
}