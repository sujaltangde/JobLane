import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>

        <div className='text-white bg-gray-950'>
            <ul className='md:flex hidden justify-center items-center gap-20 pt-4 pb-3 font-semibold text-xl'>
                <Link to="/" className='hover:text-gray-500' >HOME</Link>
                <Link to="/jobs" className='hover:text-gray-500' >JOBS</Link>
                <Link to='/contact' className='hover:text-gray-500' >CONTACT</Link>
                <Link to='/about' className='hover:text-gray-500' >ABOUT</Link>
            </ul>
            <div className='py-3 px-3 md:hidden justify-between flex'>
                <p className=' text-lg' >JOBLANE</p>
                <div >
                    Tog
                </div>
            </div>
            <div className='bg-white border-b md:mx-20 mx-3 '></div>
        </div>


    </>
  )
}
