import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineUnlock, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { TbLoader2 } from 'react-icons/tb'
import { deleteAccount } from '../actions/UserActions'
import { Checkbox } from '@mantine/core';
import { useNavigate } from 'react-router'


export const DeleteAccount = () => {

    const { loading , isLogin} = useSelector(state => state.user)
    const dispatch = useDispatch()

    const [eyeTog, setEyeTog] = useState(false)

    const [password, setPassword] = useState("")

    const [confirm, setConfirm] = useState(false)
    
    const navigate = useNavigate() ;


    const deleteHandler = (e) => {
        e.preventDefault()
        
        const data = {
            password
        }
        
        dispatch(deleteAccount(data))
        setPassword("")
    }


    useEffect(()=>{
        if(!isLogin){
            navigate("/")
        }
    },[isLogin])

    return (
        <>

            <MetaData title="Change Password" />
            <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>


                <div>
                    <div className=' flex justify-center w-full items-start pt-14'>
                        <form onSubmit={deleteHandler} className='flex flex-col md:w-1/3 shadow-gray-700  w-full md:mx-0 mx-4' action="">

                            <div className='md:px-10 px-6 py-6 shadow-sm shadow-gray-700 border-gray-700 border w-full flex flex-col gap-4'>
                                <div className='text-center pb-3'>
                                    <p className='md:text-4xl text-3xl  font-semibold border-b pb-2 border-gray-700'>Delete Account</p>
                                </div>



                                <div className='bg-white flex justify-center items-center'>
                                    <div className='text-gray-600 px-2'>
                                        <AiOutlineUnlock size={20} />
                                    </div>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} required placeholder='Enter Password' type={eyeTog ? "text" : "password"} className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                    <div className='text-gray-600 px-2 cursor-pointer' >
                                        {eyeTog ?
                                            <AiOutlineEye size={20} onClick={() => setEyeTog(!eyeTog)} /> : <AiOutlineEyeInvisible size={20} onClick={() => setEyeTog(!eyeTog)} />
                                        }
                                    </div>
                                </div>
                                <div className='flex gap-2  '>
                                    <div className='pt-1.5 cursor-pointer'><Checkbox className='cursor-pointer' onClick={()=>setConfirm(!confirm)} /></div>
                                    <div>
                                        Are you sure you can to delete your account.
                                    </div>
                                </div>


                                <div>
                                    <button disabled={loading || !confirm} className='blueCol px-8 w-full py-2 flex justify-center items-center font-semibold' >{loading ? <TbLoader2 className='animate-spin' size={24} /> : "Delete"}</button>
                                </div>


                            </div>



                        </form>
                    </div>


                </div>


            </div>


        </>
    )
}
