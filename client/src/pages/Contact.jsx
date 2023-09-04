import React, { useState } from 'react'
import { MetaData } from '../components/MetaData'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai'
import { BiMinus, BiPlus } from 'react-icons/bi'

export const Contact = () => {

    const [que1, setQue1] = useState(false)
    const [que2, setQue2] = useState(false)
    const [que3, setQue3] = useState(false)



    return (
        <>
            <MetaData title="Contact" />
            <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

                <div className='flex flex-col gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20'>

                    <div>
                        <p className='text-4xl pb-3 underline underline-offset-8 underPur font-bold'>Contact Us</p>

                        <p>We're excited to hear from you! If you have any questions, inquiries, or feedback, feel free to reach out to us using the contact information provided below. Your satisfaction and engagement with our platform are our top priorities, and we're here to assist you in any way we can.</p>
                    </div>

                    <div>
                        <p className='text-2xl text-yellow-500'>Contact Information</p>
                        <p className='text-xl pt-3 pb-1'>Address:</p>
                        <ul className='text-lg'>
                            <li>JobLane</li>
                            <li>Wall Street</li>
                            <li>New York, 123</li>
                            <li>United States</li>
                        </ul>
                        <p className='text-xl pt-3 pb-1'>Email:</p>
                        <ul className='text-lg'>
                            <li>General Inquiries: info@joblane.com</li>
                            <li>Support: support@joblane.com</li>
                            <li>Job Applications: jobs@joblane.com</li>
                        </ul>
                        <p className='text-xl pt-3 pb-1'>Phone:</p>
                        <ul className='text-lg'>
                            <li>Customer Support: +123-456-7890</li>
                            <li>HR & Job Inquiries: +123-456-7891</li>
                        </ul>
                        <p className='text-xl pt-3 pb-1'>Social Media:</p>
                        <ul >
                            <div className='flex gap-5 pt-1 items-center'>
                                <BsFacebook size={22} />
                                <AiFillInstagram size={26} />
                                <AiOutlineTwitter size={26} />
                                <AiTwotoneMail size={26} />
                            </div>
                        </ul>
                    </div>

                    <div>
                        <p className='text-2xl text-yellow-500'>Frequently Asked Questions (FAQs):</p>

                        <div className='pt-3 flex flex-col gap-4'>

                            <div >
                                <div className='md:flex hidden items-center  md:gap-3'>
                                    <p className='text-xl'>1) How do I create an account on your job application platform?</p>
                                    {
                                        !que1 ? <BiPlus onClick={() => setQue1(!que1)} size={24} className='cursor-pointer' /> :
                                            <BiMinus size={24} onClick={() => setQue1(!que1)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className='flex items-center md:gap-3 md:hidden '>
                                    <p className='text-xl'>1) How do I create an account on your job application platform?</p>
                                    {
                                        !que1 ? <BiPlus onClick={() => setQue1(!que1)} size={44} className='cursor-pointer' /> :
                                            <BiMinus size={44} onClick={() => setQue1(!que1)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className={`pt-1 ${que1? "flex":"hidden"} pl-6 text-lg`}>
                                    <p >To crate an account, click on the "Register" button located at the top right corner of the homepage. Fill in your personal information, including your name, email address, and a secure password. Once your account is created, you can start exploring jobs.</p>
                                </div>
                            </div>



                            <div >
                                <div className='md:flex hidden items-center  md:gap-3'>
                                    <p className='text-xl'>2) What should I include in my job application?</p>
                                    {
                                        !que2 ? <BiPlus onClick={() => setQue2(!que2)} size={24} className='cursor-pointer' /> :
                                            <BiMinus size={24} onClick={() => setQue2(!que2)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className='flex items-center md:gap-3 md:hidden '>
                                    <p className='text-xl'>1) How do I create an account on your job application platform?</p>
                                    {
                                        !que2 ? <BiPlus onClick={() => setQue2(!que2)} size={44} className='cursor-pointer' /> :
                                            <BiMinus size={44} onClick={() => setQue2(!que2)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className={`pt-1 ${que2? "flex":"hidden"} pl-6 text-lg`}>
                                    <p >Crafting an effective job application is crucial to stand out to potential employers. Make sure to include a tailored resume that highlights your relevant experience and skills. Additionally, write a resume that showcases how your qualifications align with the job requirements.</p>
                                </div>
                            </div>


                            <div >
                                <div className='md:flex hidden items-center  md:gap-3'>
                                    <p className='text-xl'>3) How can I track the status of my job applications?</p>
                                    {
                                        !que3 ? <BiPlus onClick={() => setQue3(!que3)} size={24} className='cursor-pointer' /> :
                                            <BiMinus size={24} onClick={() => setQue3(!que3)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className='flex items-center md:gap-3 md:hidden '>
                                    <p className='text-xl'>1) How do I create an account on your job application platform?</p>
                                    {
                                        !que3 ? <BiPlus onClick={() => setQue3(!que3)} size={44} className='cursor-pointer' /> :
                                            <BiMinus size={44} onClick={() => setQue3(!que3)} className='cursor-pointer' />
                                    }

                                </div>
                                <div className={`pt-1 ${que3? "flex":"hidden"} pl-6 text-lg`}>
                                    <p >After submitting your applications, you can log in to your account dashboard. Here, you'll find a section that lists your submitted applications along with their current statuses.The statuses may include accepted, rejected or pending.</p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}
