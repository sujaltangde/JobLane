import {
    getAllJobsRequest,getAllJobsSuccess,getAllJobsFail,
    getAllUsersRequest,getAllUsersSuccess,getAllUsersFail,
    getAllAppRequest,getAllAppSuccess,getAllAppFail,
    getAppRequest, getAppSuccess, getAppFail,
    updateAppRequest, updateAppSuccess, updateAppFail,
    deleteAppRequest, deleteAppSuccess, deleteAppFail,
    getUserRequest,getUserSuccess,getUserFail,
    updateUserRequest,updateUserSuccess,updateUserFail,
    deleteUserRequest,deleteUserSuccess,deleteUserFail,
    getJobRequest, getJobSuccess, getJobFail,
    updateJobRequest, updateJobSuccess, updateJobFail,
    deleteJobRequest, deleteJobSuccess, deleteJobFail
} from '../slices/AdminSlice'
import axios from 'axios'
import {toast} from 'react-toastify'

export const getAllJobsAdmin = () => async (dispatch) => {
    try{
        dispatch(getAllJobsRequest()) ;
            
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get("https://joblane-backend.onrender.com/api/v1/admin/allJobs",config) ;

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

        const {data} = await axios.get("https://joblane-backend.onrender.com/api/v1/admin/allUsers",config) ;

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

        const {data} = await axios.get("https://joblane-backend.onrender.com/api/v1/admin/allApp",config) ;

        dispatch(getAllAppSuccess(data.applications))

    }catch(err){
        dispatch(getAllAppFail(err.response.data.message)) ;
    }
}


export const getAppData = (id) => async (dispatch) => {
    try{
        dispatch(getAppRequest())    
        
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get(`https://joblane-backend.onrender.com/api/v1/admin/getApplication/${id}`,config)
        
        dispatch(getAppSuccess(data.application))

    }catch(err){
        dispatch(getAppFail(err.response.data.message))
    }
}


export const updateApplication = (id,dataBody) => async (dispatch) => {
    try{    
        console.log(dataBody.status)
        if(dataBody.status === "not"){
            toast.info("Please Select Status !")
        }else{
         dispatch(updateAppRequest())    


         const config = {
             headers: {
                 Authorization: `Bearer ${localStorage.getItem('userToken')}`
             } 
         } 

         const {data} = await axios.put(`https://joblane-backend.onrender.com/api/v1/admin/updateApplication/${id}`,dataBody,config)
        
         dispatch(updateAppSuccess())
         dispatch(getAppData(id))
         toast.success("Status Updated !") 
        }
        
    }catch(err){
        dispatch(updateAppFail(err.response.data.message))
    }
}  


export const deleteApp = (id) => async (dispatch) => {
    try{

        dispatch(deleteAppRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.delete(`https://joblane-backend.onrender.com/api/v1/admin/deleteApplication/${id}`,config)

        
        dispatch(getAllAppAdmin()) 
        dispatch(deleteAppSuccess())
        toast.success("Application Deleted !")

    }catch(err){
        dispatch(deleteAppFail(err.response.data.message))
    }
}



export const getUserData = (id) => async (dispatch) => {
    try{

        dispatch(getUserRequest())
        
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get(`https://joblane-backend.onrender.com/api/v1/admin/getUser/${id}`,config)

        dispatch(getUserSuccess(data.user))

    }catch(err){
        dispatch(getUserFail(err.response.data.message)) ;
    }
} 


export const updateUser = (id,userData) => async (dispatch) => {
    try{
        dispatch(updateUserRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.put(`https://joblane-backend.onrender.com/api/v1/admin/updateUser/${id}`,userData,config)

        dispatch(getUserData(id)) ;
        toast.success("Role Updated Successfully !")
        dispatch(updateUserSuccess())

    }catch(err){
        dispatch(updateUserFail(err.response.data.message))
    }
}


export const deleteUser = (id) => async (dispatch) => {
    try{
        dispatch(deleteUserRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.delete(`https://joblane-backend.onrender.com/api/v1/admin/deleteUser/${id}`,config)

        dispatch(getAllUsersAdmin()) ;
        toast.success("User Deleted Successfully !")
        dispatch(deleteUserSuccess())

    }catch(err){
        dispatch(deleteUserFail(err.response.data.message))
    }
}


export const getJobData = (id) => async (dispatch) => {
    try{
        dispatch(getJobRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get(`https://joblane-backend.onrender.com/api/v1/admin/getJob/${id}`,config) ;

        dispatch(getJobSuccess(data.job))

    }catch(err){    
        dispatch(getJobFail(err.response.data.message)) ;
    }
}

export const updateJobData = (id,jobData) => async (dispatch) => {
    try{
        dispatch(updateJobRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.put(`https://joblane-backend.onrender.com/api/v1/admin/updateJob/${id}`,jobData,config) ;

        dispatch(updateJobSuccess())
        dispatch(getAllJobsAdmin())
        dispatch(getJobData(id)) 
        toast.success("Job Updated Successfully !")

    }catch(err){    
        dispatch(updateJobFail(err.response.data.message)) ;
    }
}


export const deleteJobData = (id) => async (dispatch) => {
    try{
        dispatch(deleteJobRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.delete(`https://joblane-backend.onrender.com/api/v1/admin/deleteJob/${id}`,config) ;

        dispatch(deleteJobSuccess())
        dispatch(getAllJobsAdmin())
        toast.success("Job Deleted Successfully !")

    }catch(err){    
        dispatch(deleteJobFail(err.response.data.message)) ;
    }
}
