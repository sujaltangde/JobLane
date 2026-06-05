import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mantine/core';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MdOutlineBusinessCenter, MdOutlineDashboard } from 'react-icons/md';
import { Menu } from '@mantine/core';
import { FaUserCircle, FaSave } from 'react-icons/fa';
import { MdDoneAll } from 'react-icons/md';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { logOrNot } from '../actions/UserActions';
import { useNavigate } from 'react-router-dom';
import { logoutClearState } from '../slices/UserSlice';
import useIsMobile from '../hooks/useIsMobile';
import ChatbotComponent from './ChatbotComponent'; // Import the Chatbot component

export const Navbar = () => {
    const { isLogin, me } = useSelector(state => state.user);
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const LogOut = () => {
        localStorage.removeItem('userToken');
        localStorage.removeItem('role');
        dispatch(logOrNot());
        navigate('/');
        toast.success("Logout Successful!");
        dispatch(logoutClearState());
    };

    return (
        <>
            <div className='text-white z-20 fixed top-0 w-full bg-gray-950'>
                {/* Desktop Navbar */}
                {!isMobile && (
                    <ul className='flex justify-center items-center gap-16 py-4 font-semibold text-xl'>
                        <Link to="/" className='flex items-center titleT ml-24'>
                            <MdOutlineBusinessCenter size={24} /> JOBLANE
                        </Link>
                        <div className='flex gap-8'>
                            <Link to="/" className='cool-link'>Home</Link>
                            <Link to="/jobs" className='cool-link'>Jobs</Link>
                            <Link to='/contact' className='cool-link'>Contact</Link>
                            <Link to='/about' className='cool-link'>About</Link>
                        </div>
                        {isLogin ? (
                            <Menu shadow="md" width={200} className='ml-auto mr-24'>
                                <Menu.Target>
                                    <Avatar className='cursor-pointer' radius="xl" src={me.avatar.url} alt="Profile" />
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Link to="/profile"><Menu.Item icon={<FaUserCircle size={14} />}>My Profile</Menu.Item></Link>
                                    {me.role === "admin" && (
                                        <Link to="/admin/dashboard"><Menu.Item icon={<MdOutlineDashboard size={14} />}>Dashboard</Menu.Item></Link>
                                    )}
                                    <Link to="/applied"><Menu.Item icon={<MdDoneAll size={14} />}>Applied Jobs</Menu.Item></Link>
                                    <Link to="/saved"><Menu.Item icon={<FaSave size={14} />}>Saved Jobs</Menu.Item></Link>
                                    <Menu.Divider />
                                    <Menu.Item onClick={LogOut} color="red" icon={<RiLogoutBoxFill size={14} />}>Logout</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        ) : (
                            <div className='flex gap-3 ml-auto mr-24'>
                                <Link className='text-sm px-4 py-2 rounded-xl blueCol' to="/login">Login</Link>
                                <Link className='text-sm px-4 py-2 rounded-xl blueCol' to="/register">Register</Link>
                            </div>
                        )}
                    </ul>
                )}

                {/* Mobile Navbar */}
                <div className='md:hidden flex justify-between items-center py-3 px-5'>
                    <Link to="/" className='text-lg titleT flex items-center'>
                        <MdOutlineBusinessCenter size={24} /> JOBLANE
                    </Link>
                    <div className='flex items-center'>
                        {isLogin ? (
                            <Menu shadow="md" width={200}>
                                <Menu.Target>
                                    <Avatar size={28} className='cursor-pointer' radius="xl" src={me.avatar.url} alt="Profile" />
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Link to="/profile"><Menu.Item icon={<FaUserCircle size={14} />}>My Profile</Menu.Item></Link>
                                    {me.role === "admin" && (
                                        <Link to="/admin/dashboard"><Menu.Item icon={<MdOutlineDashboard size={14} />}>Dashboard</Menu.Item></Link>
                                    )}
                                    <Link to="/applied"><Menu.Item icon={<MdDoneAll size={14} />}>Applied Jobs</Menu.Item></Link>
                                    <Link to="/saved"><Menu.Item icon={<FaSave size={14} />}>Saved Jobs</Menu.Item></Link>
                                    <Menu.Divider />
                                    <Menu.Item onClick={LogOut} color="red" icon={<RiLogoutBoxFill size={14} />}>Logout</Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        ) : (
                            <div className='flex gap-3'>
                                <Link className='text-sm px-3 py-1 rounded-xl blueCol' to="/login">Login</Link>
                                <Link className='text-sm px-3 py-1 rounded-xl blueCol' to="/register">Register</Link>
                            </div>
                        )}
                        <div className='ml-3'>
                            {toggle ? (
                                <RxCross1 size={24} className='cursor-pointer' onClick={() => setToggle(!toggle)} />
                            ) : (
                                <FaBars size={24} className='cursor-pointer' onClick={() => setToggle(!toggle)} />
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={` ${toggle ? "block" : "hidden"} md:hidden absolute top-14 left-0 w-full bg-gray-950 z-30`}>
                    <ul className='flex flex-col gap-6 text-2xl py-8 items-center'>
                        <Link onClick={() => setToggle(false)} to="/" className='cool-link'>Home</Link>
                        <Link onClick={() => setToggle(false)} to="/jobs" className='cool-link'>Jobs</Link>
                        <Link onClick={() => setToggle(false)} to="/contact" className='cool-link'>Contact</Link>
                        <Link onClick={() => setToggle(false)} to="/about" className='cool-link'>About</Link>
                    </ul>
                </div>
            </div>

            {/* Add Chatbot component */}
            <ChatbotComponent />
        </>
    );
};
