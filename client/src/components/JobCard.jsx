import React from 'react'
import { Link } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile';


export const JobCard = ({ job }) => {



    const convertDateFormat = (inputDate) => {
        const parts = inputDate.split('-');
        if (parts.length !== 3) {
            return "Invalid date format";
        }

        const day = parts[2];
        const month = parts[1];
        const year = parts[0];

        return `${day}-${month}-${year}`;
    }


    const isMobile = useIsMobile()



    return (
        <>

            <Link to={`/details/${job._id}`} className='text-white flex flex-col gap-2  shadow-sm shadow-gray-800 border border-gray-700 md:px-4 px-3 w-full py-2'>

                <div className='flex gap-5 relative'>
                    <div className='flex justify-center items-center  '>
                        <img src={job.companyLogo.url} className=' w-[4rem]  ' alt="" />
                    </div>
                    <div className='flex flex-col '>

                        <div>
                            <p className='md:text-xl text-lg'>{job.title}</p>
                        </div>
                        <div className='flex justify-between gap-2 '>
                            <div className='flex flex-col gap-1'>
                                <p className='text-sm'>{job.companyName}</p>
                                <p className='text-sm'>{job.exp}</p>
                              {!isMobile && <p className='text-sm flex '>{job.description.slice(0, 64)}...</p>}
                                <p className='text-sm flex md:hidden'>{job.description.slice(0, 39)}...</p>
                            </div>
                            <div className='absolute md:right-3 right-0 md:pt-0 top-3' >
                                <button className='blueCol font-semibold md:text-sm text-xs px-3 py-1 ' >Apply</button>
                            </div>


                        </div>

                    </div>


                </div>

                <div className='flex md:gap-8 gap-3 md:text-sm text-xs'>
                    <span>{convertDateFormat(job.createdAt.substr(0, 10))}</span>
                    <span>{job.employmentType}</span>
                    <span>{job.location}</span>
                </div>

            </Link>


        </>
    )
}
