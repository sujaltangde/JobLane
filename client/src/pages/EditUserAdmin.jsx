import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { toast } from 'react-toastify'
import { getUserData, updateUser } from '../actions/AdminActions'
import { Sidebar } from '../components/Sidebar'
import { RxCross1 } from 'react-icons/rx'


export const EditUserAdmin = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { loading, userData } = useSelector(state => state.admin)

    const [role, setRole] = useState("not");
    const [sideTog, setSideTog] = useState(false)


    const updateRolehandler = () => {
        if (role === "not") {
            toast.info("Please Select Role !")
        }
        else {
            dispatch(updateUser(id,{role}))
            setRole("not") ;
        }
    }


    useEffect(() => {
        dispatch(getUserData(id));
    }, [])


    return (
        <>
            <MetaData title="Edit User Role" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>
                {
                    loading ? <Loader /> :

                        <div>
                            <div className="pt-1 fixed left-0 z-20 pl-0">
                                <div onClick={(() => setSideTog(!sideTog))} className='cursor-pointer blueCol px-3 py-2' size={44} >
                                    {!sideTog ? "Menu" : <RxCross1 />}
                                </div>
                            </div>

                            <Sidebar sideTog={sideTog} />
                            <div className='flex flex-col gap-3 md:px-0 px-3  justify-center items-center md:pt-20 pt-28'>

                                <div className='py-4 md:w-1/3 w-full  px-5 shadow-sm shadow-gray-700 border-gray-700 border'>
                                    <div className='flex gap-3 border-b border-gray-700  pb-3 text-2xl justify-center items-center'>
                                       <div className='font-semibold'>Update User</div>
                                    </div>
                                    <div className='flex gap-3  pt-3 py-2 text-xl justify-start items-center'>
                                        <div>Name:</div>
                                        <div>{userData.name}</div>
                                    </div>
                                    <div className='flex gap-3   py-2 text-xl justify-start items-center'>
                                        <div>Email:</div>
                                        <div>{userData.email}</div>
                                    </div>
                                    <div className='flex gap-3 border-b border-gray-700 py-2 text-xl justify-start items-center'>
                                        <div>Role:</div>
                                        <div>{userData.role}</div>
                                    </div>
                                    <div className='flex gap-3  pt-4 py-2 text-sm justify-start items-center'>
                                        <select onChange={(e) => setRole(e.target.value)} id="large" className="block w-full px-6 py-2 text-base  border  bg-gray-900 border-gray-600 placeholder-gray-400 text-white ">
                                            <option value="not" selected>Select Status</option>
                                            <option value="admin">Admin</option>
                                            <option value="applicant">Applicant</option>
                                        </select>
                                    </div>
                                    <div className='flex gap-3 font-semibold  py-2 text-sm '>
                                        <button onClick={() => updateRolehandler()} className='blueCol px-6 w-full py-2'>Update Role</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                }
            </div>


        </>
    )
}
