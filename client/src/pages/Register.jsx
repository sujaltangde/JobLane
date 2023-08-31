import React, { useState } from 'react'
import { MetaData } from '../components/MetaData'
import { AiOutlineMail, AiOutlineUnlock, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import {MdPermIdentity} from 'react-icons/md'
import { Link } from 'react-router-dom'


export const Register = () => {

  const [eyeTog, setEyeTog] = useState(false)

  const registerHandler = (e) => {
    e.preventDefault()

  }

  return (
    <>
            <MetaData title="Register" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>
      <div className=' flex justify-center w-full items-start pt-14'>
          <form onSubmit={registerHandler} className='flex flex-col md:w-1/3 shadow-gray-700  w-full md:mx-0 mx-8' action="">
            
            <div className='md:px-10 px-4 py-6 w-full flex flex-col gap-4'>
                <div className='text-center'>
                  <p className='text-4xl  font-medium'>Register</p>
                </div>
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <MdPermIdentity size={20} />
                </div>
                <input placeholder='Full name' type="text" className='outline-none w-full text-black px-1 pr-3 py-2' />
              </div>
              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineMail size={20} />
                </div>
                <input placeholder='Email' type="text" className='outline-none w-full text-black px-1 pr-3 py-2' />
              </div>

              <div className='bg-white flex justify-center items-center'>
                <div className='text-gray-600 px-2'>
                  <AiOutlineUnlock size={20} />
                </div>
                <input placeholder='Password' type={eyeTog?"text":"password"} className='outline-none w-full text-black px-1 pr-3 py-2' />
                <div className='text-gray-600 px-2' >
                  {eyeTog?
                    <AiOutlineEye size={20} onClick={()=>setEyeTog(!eyeTog)} /> : <AiOutlineEyeInvisible size={20} onClick={()=>setEyeTog(!eyeTog)}/>
                  }
                </div>
              </div>
              <div>
                <button className='blueCol px-8 w-full py-2 font-semibold' >Register</button>
              </div>
              <div className='text-center text-sm pt-2'>
                <p>Already have a account,<Link to="/login" className='text-yellow-400 underline'>Login</Link> here. </p>
              </div>

            </div>



          </form>
        </div>


        </div>
    
    </>
  )
}
