import React, { useState, useEffect } from 'react'
import { TbLoader2 } from 'react-icons/tb'
import { Loader } from '../components/Loader'
import { useParams } from 'react-router'
import { MetaData } from '../components/MetaData'
import { useDispatch, useSelector } from 'react-redux'


export const Application = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    return (
        <>

            <MetaData title="Job Details" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

                        {id}



            </div>

        </>
    )
}
