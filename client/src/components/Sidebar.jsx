import React, { useState } from 'react'
import { BsFilterLeft } from 'react-icons/bs'
import { MdOutlineCreateNewFolder, MdOutlineFeaturedPlayList } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'


export const Sidebar = () => {

    const [tog, setTog] = useState(false)

    return (
        <>
            <div className="pt-2 fixed left-0 z-20 pl-2"><BsFilterLeft onClick={(() => setTog(!tog))} className='cursor-pointer ' size={44} /></div>
            <div className={`${tog ? "flex" : "hidden"} flex-col bg-gray-950 min-h-screen md:w-72 w-64  shadow-lg shadow-gray-500 fixed left-0`}>

                <div className='text-center w-full pt-8 text-xl '>
                    {/* <p className='underline underline-offset-8'>Dashboard</p> */}
                </div>

                <div className='flex justify-center  md:pl-12 pl-3 flex-col gap-14 items-start pt-20'>

                    <div className='flex justify-center gap-2 items-center'>
                        <Link className='flex blueCol px-4 py-1 justify-center gap-2 items-center'> <MdOutlineCreateNewFolder size={20} /> Create Job</Link>
                    </div>

                    <div className='flex justify-center gap-2 items-center'>
                        <Link className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                            <BsBriefcase size={20} />View All Jobs
                    </Link>
                    </div>
                <div className='flex justify-center gap-2 items-center'>
                    <Link className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                        <MdOutlineFeaturedPlayList size={20} />

                        View All Applications </Link></div>
                        
                <div className='flex justify-center gap-2 items-center'>
                    
                <Link className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                     <AiOutlineUser size={20} />View All Users
                </Link>
                </div>

            </div>


        </div >
        
        </>
  )
}
