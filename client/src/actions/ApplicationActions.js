import axios from 'axios'
import {createApplicationRequest , createApplicationSuccess, createApplicationFail,
    allAppliedJobsRequest, allAppliedJobsSuccess, allAppliedJobsFail,
    applicationDetailsRequest, applicationDetailsSuccess, applicationDetailsFail,
    deleteApplicationRequest, deleteApplicationSuccess, deleteApplicationFail} from '../slices/ApplicationSlice'
    
import {me} from '../actions/UserActions'
import {toast} from 'react-toastify'

export const createApplication = (id) => async (dispatch) =>{
    try{
        dispatch(createApplicationRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }


        const { data } = await axios.post(`https://joblane-backend.onrender.com/api/v1/createApplication/${id}`,config,config) ;
        
        console.log(data)
        dispatch(createApplicationSuccess())
        toast.success("Applied Successfully")   
        dispatch(me())

    }catch(err){
        dispatch(createApplicationFail(err.response.data.message))
        toast.error(err.response.data.message)
        dispatch(me())
    }
}


export const getAppliedJob = () => async (dispatch) => {
    try{

        dispatch(allAppliedJobsRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get("https://joblane-backend.onrender.com/api/v1/getAllApplication",config) ;

        dispatch(allAppliedJobsSuccess(data.allApplications))

    }catch(err){
        dispatch(allAppliedJobsFail())
    }
}


export const getSingleApplication = (id) => async (dispatch) => {
    try{

        dispatch(applicationDetailsRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.get(`https://joblane-backend.onrender.com/api/v1/singleApplication/${id}`,config) ;

        dispatch(applicationDetailsSuccess(data.application))

    }catch(err){
        dispatch(applicationDetailsFail())
    }
}

export const deleteApplication = (id) => async (dispatch) => {
    try{

        dispatch(deleteApplicationRequest())

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.delete(`https://joblane-backend.onrender.com/api/v1/deleteApplication/${id}`,config)

        dispatch(deleteApplicationSuccess())
        dispatch(getAppliedJob())
        dispatch(me())
        
        toast.success("Application Deleted Successfully !") 

    }catch(err){
        dispatch(deleteApplicationFail(err.response.data.message))
    }
}