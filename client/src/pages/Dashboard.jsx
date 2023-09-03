import React from 'react'
import { MetaData } from '../components/MetaData'
import { Sidebar } from '../components/Sidebar'


export const Dashboard = () => {
    return (
        <>

            <MetaData title="Dashboard" />
            <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>
                   
                   <Sidebar/>


            </div>


        </>
    )
}
