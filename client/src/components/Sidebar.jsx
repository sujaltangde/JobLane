import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { MdOutlineCreateNewFolder, MdOutlineFeaturedPlayList, MdOutlineDashboard } from 'react-icons/md'
import { BsBriefcase } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"


export const Sidebar = ({sideTog}) => {

    const sidebarVariants = {
        hidden: {
            x: '-100%' ,
        },
        visible: {
            x: 0,
        },
    };

    return (
        <>


           

          
            <motion.div
            className={`${sideTog ? "flex" : "hidden"} flex-col bg-gray-950 min-h-screen md:w-72 w-64 shadow-lg shadow-gray-700 border-r border-gray-800 z-10 fixed left-0`}
            variants={sidebarVariants}
            initial="hidden"
            animate={sideTog ? "visible" : "hidden"}
            transition={{ duration: 0.1, ease: "easeIn" }}  
        >

                <div className='text-center w-full pt-8 text-xl '>
                    {/* <p className='underline underline-offset-8'>Dashboard</p> */}
                </div>

                <div className='flex justify-center  md:pl-12 pl-3 flex-col gap-14 items-start pt-20'>

                    <div className='flex justify-center gap-2 items-center'>
                        <Link  to="/admin/dashboard" className='flex blueCol px-4 py-1 justify-center gap-2 items-center'> <MdOutlineDashboard size={20} />Dashboard</Link>
                    </div>

                    <div className='flex justify-center gap-2 items-center'>
                        <Link  to="/admin/postJob" className='flex blueCol px-4 py-1 justify-center gap-2 items-center'> <MdOutlineCreateNewFolder size={20} /> Post Job</Link>
                    </div>

                    <div className='flex justify-center gap-2 items-center'>
                        <Link  to="/admin/allJobs" className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                            <BsBriefcase size={20} />View All Jobs
                        </Link>
                    </div>
                    <div className='flex justify-center gap-2 items-center'>
                        <Link  to="/admin/allApplications" className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                            <MdOutlineFeaturedPlayList size={20} />

                            View All Applications </Link></div>

                    <div className='flex justify-center gap-2 items-center'>

                        <Link to="/admin/allUsers" className='flex blueCol px-4 py-1 justify-center gap-2 items-center'>
                            <AiOutlineUser size={20} />View All Users
                        </Link>
                    </div>

                </div>
                </motion.div>



        </>






    )
}
