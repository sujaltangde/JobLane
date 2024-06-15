import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { MetaData } from '../components/MetaData'
import { Loader } from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleJob, saveJob } from '../actions/JobActions'
import { BiBriefcase, BiBuildings, BiRupee } from 'react-icons/bi'
import { AiOutlineSave } from 'react-icons/ai'
import { HiStatusOnline } from 'react-icons/hi'
import { BsPersonWorkspace, BsSend } from 'react-icons/bs'
import { TbLoader2 } from 'react-icons/tb'
import { useNavigate } from 'react-router'
import {toast} from 'react-toastify'

export const JobDetails = () => {

  const dispatch = useDispatch();
  const { jobDetails, loading, saveJobLoading } = useSelector(state => state.job);
  const { me, isLogin } = useSelector(state => state.user);
  const job = jobDetails;
  const { id } = useParams()

  const navigate = useNavigate()

  

  useEffect(() => {
    dispatch(getSingleJob(id))
  }, [dispatch])

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


  const saveJobHandler = () => {
    dispatch(saveJob(id)) ;
  }

  const notLoginHandler = (str)=>{
    if(!isLogin){
      toast.info(`Please login to ${str} job`)
      navigate("/login")
    } 
  }

  return (
    <>


      <MetaData title="Job Details" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20  text-white'>

        {loading  ?
          <Loader />
          :

          <>

            {jobDetails && <div>
              <div className='flex pt-5 md:px-12 pl-4 md:gap-10 gap-5'>
                {/* <div className=''> */}
                  {/* <img src={jobDetails && jobDetails.companyLogo.url} className='md:h-32 h-24 w-24 md:w-32' alt="" /> */}
                {/* </div> */}
                <div className='flex  items-center w-[6rem]'>
                  <img src={jobDetails && jobDetails.companyLogo.url} className='' alt="" />
                </div>
                <div className='flex flex-col gap-2 md:pt-2'>
                  <p className='text-xl flex gap-1 items-center  md:text-3xl'><BiBriefcase /> {jobDetails.title}</p>
                  <p className='text-lg flex gap-1 items-center  md:text-2xl'><BiBuildings />{jobDetails.companyName}</p>
                  <p className='text-lg flex gap-2 items-center  md:text-2xl'><BsPersonWorkspace size={20} />{jobDetails.employmentType}</p>
                  <p className='text-lg flex gap-1.5 items-center  md:text-2xl'><HiStatusOnline size={20} /><span className={` ${jobDetails.status === "active" ? "text-green-700" : "text-red-500"} 
                  w-20 text-center rounded-lg font-semibold`} >
                    {jobDetails.status}
                  </span></p>
                  
                </div>

              </div>
              <div className='border-b pt-2 pb-3 md:mx-12 mx-4'>

              </div>
              <div className='md:px-12 pl-4'>
                <div>
                  <p className='text-2xl py-3 '>Details:</p>
                </div>
                <div>
                  <ul className='flex flex-col gap-3'>
                    <li className='flex items-center gap-3'>Posted By: <div>{jobDetails.postedBy.name}</div></li>
                    <li className='flex items-center gap-3'>Posted At: <div>{convertDateFormat(jobDetails.createdAt.substr(0, 10))}</div></li>
                    <li className='flex items-center gap-3'>Location: <div> {jobDetails.location}</div></li>
                    <li className='flex items-center gap-3'>Salary: <div className='flex items-center' ><BiRupee />  <span>{(jobDetails.salary  / 100000).toFixed(0)} LPA</span></div></li>
                    <li className='flex items-center gap-3'>Experience: <div> {jobDetails.experience}</div></li>
                    <li className='flex items-center gap-3'>Skills Required: <div className='flex flex-wrap items-center gap-3'> {jobDetails.skillsRequired.map((e,i) => (<span key={i} className='px-2 py-0.5 bg-yellow-600 rounded text-black md:text-sm font-semibold text-xs'>{e}</span>))}                     </div></li>
                    <li className='grid gird-cols-1 gap-2 pt-2'><div className='text-2xl'>Job Description: </div> <div> {jobDetails.description}</div></li>
                  </ul>
                </div>
              </div>

              <div className='md:px-12 pl-4 flex gap-8 pb-32 pt-6 '>
                <button 
                  onClick={()=>{

                    isLogin ? 
                    
                    me.appliedJobs && me.appliedJobs.includes(jobDetails._id) ? toast.error("You are already applied !") :
                    navigate(`/Application/${jobDetails._id}`)

                    : 
                    notLoginHandler("apply")
                    
                    
                  }}
                className=' hover:bg-green-600 md:text-lg text-sm  font-bold px-10 py-1.5 bg-green-800 flex items-center gap-1 '> <BsSend /> {me.appliedJobs && me.appliedJobs.includes(jobDetails._id) ? "Applied" : "Apply"}</button>


                <button onClick={
                  ()=>{
                    if(isLogin) {

                      saveJobHandler() 
                    }else{
                      notLoginHandler("save")
  
                    }
                  }
                  
                  } className='  hover:bg-blue-600 md:text-lg text-sm font-bold px-10 py-1.5 bg-blue-800 flex items-center gap-1 '>
                  {saveJobLoading ? <span className='animate-spin px-5'><TbLoader2 size={20}/></span> : 
                  
                  <>
                      <AiOutlineSave />
                    {
                  
                      me.savedJobs && me.savedJobs.includes(jobDetails._id) ? "UnSave" : "Save"
                    }
                  </>
                  
                  }
                </button>
               


              </div>



            </div>}


          </>

        }





      </div>

    </>
  )
}
