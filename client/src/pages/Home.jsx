import React from 'react'
import { Link } from 'react-router-dom'
import { MetaData } from '../components/MetaData'

export const Home = () => {
    return (


        <>
               <MetaData title="JobLane" />
            <div className='min-h-screen grid grid-cols-1 justify-items-center  text-white bg-gray-950'>
                <div className=' my-auto   pb-64 flex   flex-col justify-center items-center gap-4'>
                    <div className='flex md:flex-row flex-col items-center justify-center md:gap-10 gap-1'>
                        <div className='md:text-8xl text-6xl font-bold'>JOBLANE</div>
                        <div className=' flex justify-center items-center pt-2'>
                            <Link to="/jobs" className='font-semibold md:text-3xl text-lg blueCol  md:py-3 py-2 px-6 md:px-10 '>Browse Jobs</Link>
                        </div>
                    </div>
                    <div>
                        <p className='md:text-xl text-sm'>Your gateway to job opportunities.</p>
                    </div>
                </div>

            </div>


        </>
    )
}
