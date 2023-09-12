import React,{useEffect} from 'react'
import { useParams } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import { Loader } from '../components/Loader'
import {MetaData} from '../components/MetaData'
import {getSingleApplication} from '../actions/ApplicationActions'


export const ApplicationDetails = () => {

    const {applicationDetails, loading} = useSelector(state => state.application)
    const dispatch = useDispatch()

    const {id} = useParams()

    useEffect(()=>{

        dispatch(getSingleApplication(id))

    },[])    

    console.log(applicationDetails)
    

  return (
    <>

<MetaData title="Application Details" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>   
                    {
                        loading?

                        <Loader/>

                        : 

                        <div>

                            {id}
                        </div>
                    }
                



        </div>
    
    </>
  )
}
