import React, { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'
import { MetaData } from '../components/MetaData'
import { AiOutlineMail } from 'react-icons/ai'
import { MdPermIdentity, MdOutlineFeaturedPlayList } from 'react-icons/md'
import { BsFileEarmarkText } from 'react-icons/bs'
import {updateProfile, me as ME} from '../actions/UserActions'
import { CgProfile } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'




export const EditProfile = () => {

    const dispatch = useDispatch()
    const { loading, me } = useSelector(state => state.user)


  const [name, setName] = useState(me.name);
  const [email, setEmail] = useState(me.email);
  const [skills, setSkills] = useState(me.skills);

  const [avatar, setAvatar] = useState("")
  const [avatarName, setAvatarName] = useState("")

  const [resume, setResume] = useState("")
  const [resumeName, setResumeName] = useState("")


  



  const avatarChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
          setAvatarName(e.target.files[0].name)
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }



  const resumeChange = (e) => {
    if (e.target.name === "resume") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setResume(reader.result);
          setResumeName(e.target.files[0].name)
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }


    const editHandler = (e) => {
        e.preventDefault()
        let skillArr = skills
        if(skills.constructor !== Array){
             skillArr = skills.split(",")
        }

         const data = { 
             newName: name, 
             newEmail: email, 
             newAvatar: avatar, 
             newResume: resume, 
             newSkills: skillArr  
         }

         dispatch(updateProfile(data))

    }


    useEffect(()=>{
        dispatch(ME())
        setName(me.name)
        setEmail(me.email)
        setSkills(me.skills)
    },[dispatch])

    return (
        <>

            <MetaData title="Edit Profile" />
            <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>


                {loading ? <Loader /> :

                    <div>
                        <div className=' flex justify-center w-full items-start pt-14'>
                            <form onSubmit={editHandler} className='flex flex-col md:w-1/3 shadow-gray-700  w-full md:mx-0 mx-3 pb-28' action="">

                                <div className='md:px-10 px-7 pb-6 w-full shadow-sm shadow-gray-700 border-gray-700 border pt-5  flex flex-col gap-4'>
                                    <div className='text-center'>
                                        <p className='text-4xl  font-semibold'>Edit Profile</p>
                                    </div>


                                    {/* Name */}
                                    <div className='bg-white flex justify-center items-center'>
                                        <div className='text-gray-600 px-2'>
                                            <MdPermIdentity size={20} />
                                        </div>
                                        <input value={name} onChange={(e) => setName(e.target.value)} required placeholder='Full name' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                    </div>


                                    {/* Mail */}
                                    <div className='bg-white flex justify-center items-center'>
                                        <div className='text-gray-600 px-2'>
                                            <AiOutlineMail size={20} />
                                        </div>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' type="email" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                    </div>


                                    {/* Profile */}
                                    <div>
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <CgProfile size={20} />
                                            </div>
                                            <label htmlFor='avatar' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                                                {avatarName.length === 0 ? <span className='text-gray-500 font-medium'>Select New Profile Pic...</span>
                                                    : avatarName}
                                            </label>
                                            <input id='avatar' name='avatar' required
                                                onChange={avatarChange}
                                                placeholder='Profile' accept="image/*" type="file" className='outline-none  w-full hidden text-black px-1 pr-3 py-2' />


                                        </div>
                                        <p className='bg-gray-950 text-white text-xs'>Please select Image file</p>
                                    </div>


                                    {/* Resume */}
                                    <div>
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <BsFileEarmarkText size={20} />
                                            </div>
                                            <label className='outline-none w-full text-black px-1 pr-3 py-2' htmlFor="resume">
                                                {resumeName.length === 0 ? <span className='text-gray-500 cursor-pointer font-medium'>Select New Resume...</span> : resumeName}
                                            </label>
                                            <input required
                                                onChange={resumeChange}
                                                placeholder='Resume' id='resume' name='resume' accept="image/*" type="file" className='outline-none hidden w-full text-black px-1 pr-3 py-2' />
                                        </div>
                                        <p className='bg-gray-950 text-white text-xs'>Please select Image file</p>
                                    </div>

                                    {/* Skills */}
                                    <div className='bg-white flex justify-center items-center'>
                                        <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                            <MdOutlineFeaturedPlayList size={20} />
                                        </div>
                                        <textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder='Skills' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                    </div>








                                    <div>
                                        <button className='blueCol px-8 w-full py-2 flex justify-center items-center font-semibold' >Update</button>
                                    </div>


                                </div>



                            </form>
                        </div>


                    </div>

                }


            </div>






        </>
    )
}
