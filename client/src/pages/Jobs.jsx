import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { FiSearch } from 'react-icons/fi'
import { Loader } from '../components/Loader'
import { JobCard } from '../components/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs, getSingleJob } from '../actions/JobActions'

export const Jobs = () => {

  const dispatch = useDispatch()
  const { allJobs, loading } = useSelector(state => state.job)

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    dispatch(getAllJobs());
  }, [])

  useEffect(() => {
    setJobs(allJobs);
  }, [allJobs])



  console.log(jobs)


 


  return (
    <>
      <MetaData title="Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>


        {loading ? <Loader/> :
          <>
          <div className='flex-col flex justify-center items-center w-full '>
          <div className='text-center pt-8 md:text-3xl text-2xl font-medium'>
            <p>Find your dream job now</p>
          </div>
          <div className='py-3 pt-4 w-full flex justify-center items-center'>

            <div className='flex  justify-center w-full  items-center  '>
              <div className='bg-white flex md:w-2/5 w-4/5'>
                <div className='flex justify-center items-center pl-2 text-black'> <FiSearch size={19} /> </div>
                <input type="text" className='outline-none   text-black px-2 pl-3 md:h-10 w-full h-8 py-1 text-sm' />
                <button className='blueCol px-4 md:h-10 h-8 py-1'>Search</button>
              </div>
            </div>


          </div>
          <div className='flex'>
            <div className='w-1/3 md:flex hidden'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, enim. Aperiam ut earum placeat nesciunt quaerat est et suscipit perferendis neque minima, dolorum facere reiciendis eaque dignissimos odit, delectus commodi?
            </div>
            <div className='grid grid-cols-1 md:px-8 px-2 gap-4 pb-20 md:w-3/5 w-full justify-items-center pt-8'>

              {
                jobs &&  jobs
                .filter(job => job._id) // Filter out jobs without an _id property
                .sort((a, b) => {
                  const dateA = new Date(a.createdAt);
                  const dateB = new Date(b.createdAt);
                  return dateB - dateA;
                }).map((job, i) => (
                  <JobCard onClick={()=>{dispatch(getSingleJob(job._id))}} key={i} job={job} />

                ))
              }
            </div>
            <div className='w-1/3 md:flex hidden'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, enim. Aperiam ut earum placeat nesciunt quaerat est et suscipit perferendis neque minima, dolorum facere reiciendis eaque dignissimos odit, delectus commodi?
            </div>

          </div>

        </div>
        </>
}


      </div>

    </>
  )
}
