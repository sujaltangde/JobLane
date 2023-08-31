import React from 'react'
import { MetaData } from '../components/MetaData'
import {FiSearch} from 'react-icons/fi'



export const Jobs = () => {



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
              <button className='blueCol px-3 md:h-10 h-8 py-1'>Search</button>
              </div>
            </div>

          </div>

        </div>



      </div>

    </>
  )
}
