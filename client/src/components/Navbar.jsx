import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mantine/core';
import { FaBars } from 'react-icons/fa'
import { RxCross1 } from 'react-icons/rx'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { Menu, Text } from '@mantine/core';
import {FaUserCircle, FaSave} from 'react-icons/fa'
import {MdDoneAll} from 'react-icons/md'
import {RiLogoutBoxFill} from 'react-icons/ri'


export const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <>

            <div className='text-white  fixed min-w-full bg-gray-950'>
                <ul className='md:flex hidden justify-center items-center gap-24 pt-4 pb-3 font-semibold text-xl'>

                    <Link to="/" className=' hover:underline underline-offset-4 underL ' >Home</Link>
                    <Link to="/jobs" className='hover:underline underline-offset-4 underL ' >Jobs</Link>
                    <Link to='/contact' className='hover:underline underline-offset-4 underL' >Contact</Link>
                    <Link to='/about' className='hover:underline underline-offset-4 underL' >About</Link>
                    

                    <Menu  shadow="md" width={200}>
                        <Menu.Target>
                        <Avatar className='cursor-pointer fixed  right-32' radius="xl" src="/images/light.jpg" alt="it's me" />
                        </Menu.Target>

                        <Menu.Dropdown className=''>
                            <Menu.Item className='' icon={<FaUserCircle size={14} />}>My Profile</Menu.Item>
                            <Menu.Item className='' icon={<MdDoneAll size={14} />}>Applied Jobs</Menu.Item>
                            <Menu.Item className='' icon={<FaSave size={14} />}>Saved Jobs</Menu.Item>
                            <Menu.Divider />
                            <Menu.Item color="red" icon={<RiLogoutBoxFill size={14} />}>Logout</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>


                </ul>
                <div className='py-3 px-3 md:hidden justify-between items-center flex'>
                    <Link to="/" className=' text-lg titleT flex justify-center items-center gap-1' >
                        <MdOutlineBusinessCenter size={19} />  JOBLANE</Link>
                    <div className='flex justify-center items-center' >
                        <div className='pr-12' >
                            <Menu shadow="md" width={200}>
                        <Menu.Target>
                        <Avatar className='cursor-pointer ' radius="xl" size={26} src="/images/light.jpg" alt="it's me" />
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Application</Menu.Label>
                            <Menu.Item icon={<MdOutlineBusinessCenter size={14} />}>Settings</Menu.Item>
                            <Menu.Item icon={<MdOutlineBusinessCenter size={14} />}>Messages</Menu.Item>
                            <Menu.Item icon={<MdOutlineBusinessCenter size={14} />}>Gallery</Menu.Item>
                            <Menu.Item
                                icon={<MdOutlineBusinessCenter size={14} />}
                                rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                            >
                                Search
                            </Menu.Item>

                            <Menu.Divider />

                            <Menu.Label>Danger zone</Menu.Label>
                            <Menu.Item icon={<MdOutlineBusinessCenter size={14} />}>Transfer my data</Menu.Item>
                            <Menu.Item color="red" icon={<MdOutlineBusinessCenter size={14} />}>Delete my account</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>

                        </div>

                        <div className='pr-1'>
                            {toggle ?
                                <RxCross1 size={24} className='cursor-pointer' onClick={() => setToggle(!toggle)} /> :
                                <FaBars size={24} className='cursor-pointer' onClick={() => setToggle(!toggle)} />}
                        </div>
                    </div>
                </div>
                <div className='bg-white border-b md:mx-20 mx-3 '></div>
                <div className={` ${toggle ? "flex" : "hidden"}  absolute w-screen  h-screen  z-20  md:hidden`} >
                    <ul className='bg-gray-950 bg-opacity-95 flex flex-col gap-20 text-2xl justify-start w-screen  pt-20 items-center'>
                        <Link onClick={() => setToggle(!toggle)} to="/" className=' hover:underline underline-offset-4 underL ' >Home</Link>
                        <Link onClick={() => setToggle(!toggle)} to="/jobs" className='hover:underline underline-offset-4 underL ' >Jobs</Link>
                        <Link onClick={() => setToggle(!toggle)} to='/contact' className='hover:underline underline-offset-4 underL' >Contact</Link>
                        <Link onClick={() => setToggle(!toggle)} to='/about' className='hover:underline underline-offset-4 underL' >About</Link>
                    </ul>
                </div>
            </div>


        </>
    )
}
