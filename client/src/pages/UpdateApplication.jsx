import React from 'react'
import { MetaData } from '../components/MetaData'
import { useParams } from 'react-router'



export const UpdateApplication = () => {

    const { id } = useParams();

    return (
        <>
            <MetaData title="Update Application" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>



            </div>


        </>
    )
}
