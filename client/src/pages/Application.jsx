import React, { useState, useEffect } from 'react'
import { TbLoader2 } from 'react-icons/tb'
import { Loader } from '../components/Loader'
import { useParams } from 'react-router'
import { MetaData } from '../components/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import {getSingleJob} from '../actions/JobActions'
import {createApplication} from '../actions/ApplicationActions'
import { useNavigate } from 'react-router'

export const Application = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const { jobDetails } = useSelector(state => state.job)
    const { me } = useSelector(state => state.user)
    const { loading } = useSelector(state => state.application)
    const navigate = useNavigate()
    const [confirm, setConfirm] = useState(false)

    useEffect(()=>{
        dispatch(getSingleJob(id))
    },[])

    const makeApplication = (e) => {
        e.preventDefault() ;
        dispatch(createApplication(id)) ;        
        navigate(`/details/${id}`)
    }

    return (
        <>

            <MetaData title="Job Details" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

                <div className="px-3 ">




                    <div className='py-2'>
                        <p className='text-4xl py-2 pb-2'>Apply to {jobDetails.companyName}</p>
                        <p className="text-xl">Job Id: {id}</p>
                    </div>

                    <div className='pt-4 pb-3'>
                        <p className='text-2xl pb-2'>Job Details:</p>
                        <div>
                            <ul>
                                <li className='flex gap-4 items-center'>Role: <div>{jobDetails.title}</div></li>
                                <li className='flex gap-4 items-center'>Location: <div>{jobDetails.location}</div></li>
                                <li className='flex gap-4 items-center'>Experience: <div>{jobDetails.experience}</div></li>
                            </ul>
                        </div>
                    </div>

                    <div className='pt-4 pb-6'>
                        <p className='text-2xl pb-2'>Applicants Details:</p>
                        <div>
                            <ul>
                                <li className='flex gap-4 items-center'>Name: <div>{me.name}</div></li>
                                <li className='flex gap-4 items-center'>Email: <div>{me.email}</div></li>
                                <li className='flex gap-4 items-center'>Resume: <Link path="_blank" to={me.resume.url} target="_blank" 
  rel="noreferrer" className='text-blue-500 underline cursor-pointer'>{me.name} resume</Link></li>
                            </ul>
                        </div>

                    </div>

                    <div className='flex justify-start items-start gap-2'>
                        <div>
                            <input type="checkbox" className="cursor-pointer" onChange={(e)=>setConfirm(e.target.checked)} /></div>
                        <p className='text-sm'>I confirm that all the information provided in this application is accurate and complete to the best of my knowledge. I understand that any false statements or omissions may result in disqualification from consideration or termination of application.</p>
                    </div>
                    <div className='pt-6 flex gap-3 pb-16'>
                        
                       {loading?
                        <button onClick={makeApplication} disabled={true} className={`md:px-14 px-12 py-2.5  blueCol2`}>
                            <TbLoader2 className='animate-spin mx-[0.29em]  ' size={20}/>
                             </button>
                        :
                       <button onClick={makeApplication} disabled={!confirm} className={`md:px-10 px-8 py-2 ${confirm?"blueCol":"blueCol2"}`}>Confirm </button>

                        } 
                    </div>
                </div>



            </div>

        </>
    )
}
