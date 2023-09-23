import React from 'react'
import { BiLoaderAlt } from 'react-icons/bi'


export const Loader = () => {
  return (
    <div className='flex justify-center  items-center pt-44'>
      {/* <BiLoaderAlt className='animate-spin  font-bold' size={59} /> */}
      <span class="loader"></span>
    </div>
  )
}
