import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { MetaData } from '../components/MetaData'
import { Loader } from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleJob } from '../actions/JobActions'
import { BiBriefcase, BiBuildings } from 'react-icons/bi'
import { BsPersonWorkspace } from 'react-icons/bs'


export const JobDetails = () => {

  const dispatch = useDispatch();
  const { jobDetails, loading } = useSelector(state => state.job);
  const job = jobDetails;
  const { id } = useParams()

  console.log(jobDetails)

  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [dispatch])


  console.log(jobDetails.createdAt)

  return (
    <>


      <MetaData title="Job Details" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

        {loading ?
          <Loader />
          :

          <>

            <div>
              <div className='flex pt-5 md:px-12 px-6 md:gap-10 gap-5'>
                <div className=''>
                  <img src={jobDetails.companyLogo.url} className='md:h-32 h-24 w-24 md:w-32' alt="" />
                </div>
                <div className='flex flex-col gap-2 md:pt-2'>
                  <p className='text-xl flex gap-1 items-center  md:text-3xl'><BiBriefcase /> {jobDetails.title}</p>
                  <p className='text-lg flex gap-1 items-center  md:text-2xl'><BiBuildings />{jobDetails.companyName}</p>
                  <p className='text-lg flex gap-2 items-center  md:text-2xl'><BsPersonWorkspace size={20} />{jobDetails.employmentType}</p>
                </div>

              </div>
              <div className='border-b pt-10 md:mx-12 mx-8'>

              </div>

            </div>


          </>

        }





      </div>

    </>
  )
}
