import React from 'react'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram, AiFillMail } from 'react-icons/ai'
import { TiSocialTwitter } from "react-icons/ti";


export const Footer = () => {
  return (
    <>

      <div className='bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center'>

        <div className='flex gap-8 justify-center items-center'>
          <Link className='cool-link' to="/">Home</Link>
          <Link className='cool-link' to="/jobs">Jobs</Link>
          <Link className='cool-link' to="/about">About</Link>
          <Link className='cool-link' to="/contact">Contact</Link>
        </div>


        <div>
          <div className='flex flex-col justify-center items-center pt-5'>
            <p className='titleT text-2xl flex justify-center items-center'> <MdOutlineBusinessCenter /> JOBLANE</p>
            <p className='text-sm text-gray-300'>Giving best opportunities to best peoples.</p>
          </div>

          <div className='flex gap-5 py-2 justify-center items-center'>
            <FaFacebook className='cursor-pointer hover:scale-[1.1] hover:shadow-lg hover:shadow-white  rounded-md '  size={22} />
            <FaTwitter 
  className='cursor-pointer hover:scale-[1.1] hover:shadow-lg hover:shadow-white scale-0.5 rounded-md' size={22} />
            <FaYoutube  className='cursor-pointer hover:scale-[1.1] hover:shadow-lg hover:shadow-white rounded-md' size={22} />
            <AiFillInstagram className='cursor-pointer hover:scale-[1.1] hover:shadow-lg hover:shadow-white rounded-md' size={22} />
            <AiFillMail className='cursor-pointer hover:scale-[1.1] hover:shadow-lg  hover:shadow-white rounded-md ' size={22} />
          </div>1
        </div>




        <div className='flex flex-col pt-3 justify-center items-center'>
          <p className='text-sm'>Designed and Developed by <Link target='_blank' className='underline text-blue-400' to="https://sujal-tangde.netlify.app/">Sujal Tangde</Link></p>
          <p className='text-sm'> &copy;Copyright, All rights reserved.</p>
        </div>

        <div>

        </div>

      </div>

    </>
  )
}
