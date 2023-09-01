import React from 'react'
import { useParams } from 'react-router'
import { MetaData } from '../components/MetaData'
import { Loader } from '../components/Loader'

export const JobDetails = () => {

    const { id } = useParams()

  return (
    <>
    
    
    <MetaData title="Job Details" />
    <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

        <div>
                {id}
               

        </div> 





    </div>
    
    </>
  )
}
