import React, { useEffect } from 'react'
import {MetaData} from '../components/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import {getAppliedJob} from '../actions/ApplicationActions'
import {Loader} from '../components/Loader'
import { AppliedJobCard } from '../components/AppliedJobCard'
import { Link } from 'react-router-dom'


export const AppliedJobs = () => {

  const {loading, appliedJobs} = useSelector(state => state.application) ;
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getAppliedJob())
  },[])




  return (
    <>

<MetaData title="Applied Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>
        {loading? 
           <Loader/> :
           <>

             <div className='pt-6 md:px-28 px-1 pb-32' >
                  {appliedJobs.length !== 0 && <div className='text-center text-3xl pb-4 font-medium'>Applied Jobs</div>}
                {
                  <div className='flex flex-col gap-4'>
                    {
                      appliedJobs.slice().reverse().map((app,i)=>(
                        <AppliedJobCard key={i} id={app._id} time={app.createdAt} job={app.job}/>
                      ))
                    }
                  </div>
                }
                {
                  appliedJobs.length === 0 && 
                  <div className='pt-10 text-center flex flex-col justify-center items-center'>


                        <div>
                          <img src="/images/jobEmpty.svg" className='w-52 h-52' alt="" />
                        </div>
                      <p className='md:text-3xl pb-3 pt-4 text-xl '>You don't have any applied jobs !</p>
                      <Link to="/jobs" className='blueCol px-5 py-1'>Browse Jobs</Link>
                  </div>
                }

            </div>
           
           </>
       }


        </div>
    
    
    </>
  )
}
