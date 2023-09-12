import React, { useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import {getSavedJobs} from '../actions/JobActions'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from '../components/Loader'
import { SaveJobCard } from '../components/SaveJobCard'
import {Link} from 'react-router-dom'

export const SavedJobs = () => {

  const dispatch = useDispatch(0)

  const {savedJobs, saveJobLoading, loading} = useSelector(state => state.job)

  useEffect(()=>{
    dispatch(getSavedJobs())
  },[saveJobLoading])

  const reverseArr = (savedJobs) => {
      let l = 0 ;
      let e = savedJobs.length - 1 ;

      while(l <= e){
        let t = savedJobs[l] ;
        savedJobs[l] = savedJobs[e] ;
        savedJobs[e] = t ;

        l++ ;
        e-- ;
      }
      return savedJobs ;
  }
  
  return (
    <>

<MetaData title="Saved Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>

            {loading ? <Loader/> :
              
              <div className='pt-6 md:px-28  px-1 pb-32' >
                  {savedJobs.length !== 0 && <div className='text-center text-3xl pb-4 font-medium'>Saved Jobs</div>}
                {
                 <div className='flex flex-col gap-4'>
                   {savedJobs.slice().reverse().map((job,i)=>(
                    <SaveJobCard key={i} job={job}/>
                  ))}
                 </div>
                }
                {
                  savedJobs.length === 0 && 
                  <div className='pt-10 text-center flex flex-col justify-center items-center'>


                        <div>
                          <img src="/images/jobEmpty.svg" className='w-52 h-52' alt="" />
                        </div>
                      <p className='md:text-3xl pb-3 pt-4 text-xl '>You don't have any saved jobs !</p>
                      <Link to="/jobs" className='blueCol px-5 py-1'>Browse Jobs</Link>
                  </div>
                }

            </div>
            
            }


        </div>
    
    
    </>
  )
}
