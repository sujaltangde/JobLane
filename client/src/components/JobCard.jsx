import React from 'react'

export const JobCard = ({ job }) => {
    return (
        <>

            <div className='text-white flex flex-col gap-2  shadow-sm shadow-gray-800 border border-gray-700 md:px-4 px-3  py-2'>

                <div className='flex gap-5 relative'>
                    <div className='flex justify-center items-center '>
                        <img src={job.companyLogo} className='md:w-20 h-16 w-20 md:h-20' alt="" />
                    </div>
                    <div className='flex flex-col '>

                        <div>
                        <p className='text-xl'>{job.title}</p>
                        </div>
                        <div className='flex justify-between gap-2 '>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>{job.companyName}</p>
                                <p className='text-sm'>{job.exp}</p>
                                <p className='text-sm md:flex hidden'>{job.jobDesc.slice(0, 64)}...</p>
                                <p className='text-sm flex md:hidden'>{job.jobDesc.slice(0, 44)}...</p>
                            </div>
                            <div className='absolute right-3 pt-2' >
                                <button className='blueCol font-bold text-sm px-3 py-1 ' >Apply</button>
                            </div>


                        </div>

                    </div>


                </div>

                <div className='flex md:gap-8 gap-3 md:text-sm text-xs'>
                    <span>{job.createdAt}</span>
                    <span>{job.jobType}</span>
                    <span>{job.qualification}</span>
                    <span>{job.location}</span>
                </div>

            </div>


        </>
    )
}
