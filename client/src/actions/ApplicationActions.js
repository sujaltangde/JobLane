import axios from 'axios'
import {createApplicationRequest , createApplicationSuccess, createApplicationFail,
    allAppliedJobsRequest, allAppliedJobsSuccess, allAppliedJobsFail} from '../slices/ApplicationSlice'
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


        const { data } = await axios.post(`http://localhost:4000/api/v1/createApplication/${id}`,config,config) ;
        
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

        const {data} = await axios.get("http://localhost:4000/api/v1/getAllApplication",config) ;

        dispatch(allAppliedJobsSuccess(data.allApplications))

    }catch(err){
        dispatch(allAppliedJobsFail())
    }
}