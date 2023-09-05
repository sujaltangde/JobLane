import {newPostRequest, newPostSuccess, newPostFail, allJobsRequest, allJobsSuccess, allJobsFail,
    jobDetailsRequest, jobDetailsSuccess, jobDetailsFail,  }  from '../slices/JobSlice'
import {toast} from 'react-toastify'
import axios from 'axios'


export const createJobPost = (jobData) => async (dispatch) => {
    try{
        dispatch(newPostRequest()) ;

        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            } 
        }

        const {data} = await axios.post("http://localhost:4000/api/v1/create/job",jobData,config) ;        

        dispatch(newPostSuccess()) ;
        toast.success("Job posted successfully !")

    }catch(err){
        dispatch(newPostFail(err.response.data.message))
    }
}

export const getAllJobs = () => async (dispatch) => {
    try{
        dispatch(allJobsRequest()) ;

        const {data} = await axios.get("http://localhost:4000/api/v1/jobs") ;

        dispatch(allJobsSuccess(data.Jobs)) ;

    }catch(err){
        dispatch(allJobsFail(err.response.data.message))   
    }
}


export const getSingleJob = (id) => async (dispatch) => {
    try{
        dispatch(jobDetailsRequest()) ;

        const {data} = await axios.get(`http://localhost:4000/api/v1/job/${id}`) ;

        dispatch(jobDetailsSuccess(data.job)) ;

    }catch(err){
        dispatch(jobDetailsFail(err.response.data.message))   
    }
}