import React from 'react'
import { MetaData } from '../components/MetaData'
import {FiSearch} from 'react-icons/fi'
import { Loader } from '../components/Loader'
import { JobCard } from '../components/JobCard'


export const Jobs = () => {

    const JobData = [
      {
        title: "Full Stack Developer",
        companyName: "Google" ,
        companyLogo: "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1701302400&v=beta&t=EwiOFnSK2Si7SEIyzC8zqJAKZ3LxkeCRxzg5bBs2SB0" ,
        jobType: "Full-Time",
        jobDesc: "Google, hiring talented and skilled freshers for the job role of full stack developers, Interedted candidates can apply." ,
        exp: "Fresher",
        qualification: "graduate",
        createdAt: "11-07-2023" ,
        location: "Banglore,India"
      },
      {
        title: ".NET Developer",
        companyName: "TCS" ,
        companyLogo: "https://media.licdn.com/dms/image/C4D0BAQFPP1NRP4F5dQ/company-logo_100_100/0/1656657976685?e=1701302400&v=beta&t=W3TpfegxtmfKyhfOyhae-NqtTOJdlDKPdu7kGCe3HyQ" ,
        jobType: "Full-Time",
        jobDesc: "Google, hiring talented and skilled freshers for the job role of full stack developers, Interedted candidates can apply." ,
        exp: "Fresher",
        qualification: "graduate",
        createdAt: "11-07-2023" ,
        location: "Banglore,India"
      },
      {
        title: "Full Stack Developer",
        companyName: "Google" ,
        companyLogo: "https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_100_100/0/1519856215226?e=1701302400&v=beta&t=EwiOFnSK2Si7SEIyzC8zqJAKZ3LxkeCRxzg5bBs2SB0" ,
        jobType: "Full-Time",
        jobDesc: "TCS, hiring talented and skilled freshers for the job role of full stack developers, Interedted candidates can apply." ,
        exp: "Fresher",
        qualification: "graduate",
        createdAt: "11-07-2023" ,
        location: "Banglore,India"
      },
      
    ]


  return (
    <>
      <MetaData title="Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>


        <div className='flex-col flex justify-center items-center w-full '>
          <div className='text-center pt-8 md:text-3xl text-2xl font-medium'>
            <p>Find your dream job now</p>
          </div>
          <div className='py-3 pt-4 w-full flex justify-center items-center'>

            <div className='flex  justify-center w-full  items-center  '>
              <div className='bg-white flex md:w-2/5 w-4/5'>
              <div className='flex justify-center items-center pl-2 text-black'> <FiSearch size={19}/> </div>
              <input  type="text" className='outline-none   text-black px-2 pl-3 md:h-10 w-full h-8 py-1 text-sm' />
              <button className='blueCol px-4 md:h-10 h-8 py-1'>Search</button>
              </div>
            </div>


          </div>
          <div className='grid grid-cols-1 md:px-8 px-2 gap-4 pb-20  justify-items-center pt-8'>
             
             {
              JobData.map((job,i)=>(
                 <JobCard key={i} job={job}/>
                
              ))
             }
          </div>

        </div>



      </div>

    </>
  )
}
