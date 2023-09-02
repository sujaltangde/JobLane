import {registerRequest,registerSuccess, registerFail,loginRequest, loginSuccess, loginFail
    , isLoginRequest, isLoginSuccess, isLoginFail, getMeRequest, getMeSuccess, getMeFail } from '../slices/UserSlice'
import {toast} from 'react-toastify'
import axios from 'axios'

export const registerUser = (userData) => async (dispatch) => {
    try{
        dispatch(registerRequest())

        const {data} = await axios.post("http://localhost:4000/api/v1/register",userData) ;
        
        dispatch(registerSuccess())
        localStorage.setItem('userToken',data.token)
        dispatch(logOrNot())
        toast.success("Registration successful !")

    }catch(err){
        dispatch(registerFail(err.response.data.message))
        if(err.response.data.message.includes("duplicate")){
            toast.error("User already exists.")
        }else{
            toast.error(err.response.data.message)
        }
    }
}


export const loginUser = (userData) => async (dispatch) => {
    try{
        dispatch(loginRequest())

        const {data} = await axios.post("http://localhost:4000/api/v1/login",userData) ;
        
        dispatch(loginSuccess())
        localStorage.setItem('userToken',data.token)
        dispatch(logOrNot())
        toast.success("Login successful !")

    }catch(err){
        dispatch(loginFail(err.response.data.message))
        toast.error(err.response.data.message)
    }
}


export const logOrNot = () => async (dispatch) => {
    try{
        dispatch(isLoginRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/isLogin",config) ;
      
        dispatch(isLoginSuccess(data.isLogin))

    }catch(err){
        dispatch(isLoginFail())
    }
}


export const me = () => async (dispatch) => {
    try{
        dispatch(getMeRequest())
        const config = {
            headers:{
                Authorization: `Bearer ${localStorage.getItem('userToken')}`
            }
        }

        const {data} = await axios.get("http://localhost:4000/api/v1/me",config) ;
      
        dispatch(getMeSuccess(data.user))

    }catch(err){
        dispatch(getMeFail())
    }
}