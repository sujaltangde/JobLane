import {newPostRequest, newPostSuccess, newPostFail}  from '../slices/JobSlice'
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