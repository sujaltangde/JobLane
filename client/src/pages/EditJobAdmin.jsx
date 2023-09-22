import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { getJobData, updateJobData } from '../actions/AdminActions'
import { Sidebar } from '../components/Sidebar'
import { RxCross1 } from 'react-icons/rx'
import { MdOutlineLocationOn, MdOutlineFeaturedPlayList, MdOutlineWorkOutline, MdWorkspacesOutline, MdAttachMoney, MdOutlineReceiptLong } from 'react-icons/md'
import { BiImageAlt } from 'react-icons/bi'
import { TbLoader2 } from 'react-icons/tb'
import { BiBuilding } from 'react-icons/bi'
import {toast} from 'react-toastify'




export const EditJobAdmin = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    const { loading, jobData } = useSelector(state => state.admin)

    const [sideTog, setSideTog] = useState(false)


    const [title, setTitle] = useState(jobData.title);
    const [description, setDescription] = useState(jobData.description);
    const [companyName, setCompanyName] = useState(jobData.companyName);
    const [location, setLocation] = useState(jobData.location);
    const [skillsRequired, setSkillsRequired] = useState(jobData.skillsRequired);
    const [experience, setExperience] = useState(jobData.experience);
    const [salary, setSalary] = useState(jobData.salary);
    const [category, setCategory] = useState(jobData.category);
    const [employmentType, setEmploymentType] = useState(jobData.employmentType);

    const [logo, setLogo] = useState(jobData.companyLogo.url);
    const [logoName, setLogoName] = useState("Select New Logo");






    const logoChange = (e) => {
        if (e.target.name === "logo") {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setLogo(reader.result);
                    setLogoName(e.target.files[0].name)
                }
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }


    const postEditHandler = (e) => {
        e.preventDefault();
    }


    useEffect(() => {
        dispatch(getJobData(id))
    }, [])

   
    
    useEffect(()=>{
        setTitle(jobData.title)
        setDescription(jobData.description)
        setCompanyName(jobData.companyName)
        setLocation(jobData.location)
        setSkillsRequired(jobData.skillsRequired)
        setExperience(jobData.experience)
        setSalary(jobData.salary)
        setCategory(jobData.category)
        setEmploymentType(jobData.employmentType)
        setLogo(jobData.companyLogo.url)
       
    },[jobData])


    const updateJobHandler = () => {
        let skillsArr = skillsRequired ;
        if(typeof(skillsRequired) === "string"){
            skillsArr = skillsRequired.split(",") ;
        }

        if(logo.includes("cloudinary")){
            toast.info("Please select new logo !")
        }
        else{
            const updatedData = {
                title,
                companyName,
                location,
                skillsRequired:skillsArr,
                experience,
                salary,
                category,
                employmentType,
                companyLogo:logo,
                description
            }
    
            dispatch(updateJobData(id,updatedData))
        }
        

    }

    return (
        <>

            <MetaData title="Edit Job Details" />
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
                            <div className=' flex justify-center w-full items-start pt-6'>


                                <form onSubmit={postEditHandler} className=' md:flex hidden  shadow-gray-700  w-full md:mx-0 mx-8' action="">
                                    <div className='flex flex-col w-full justify-start items-start pt-4 gap-3'>
                                        <div className='text-4xl pb-1 font-medium border-b border-gray-500 w-full'>
                                            Edit Job Details
                                        </div>
                                        <div className='flex gap-3 pt-3'>
                                            {/* Job Title */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineWorkOutline size={20} />
                                                </div>
                                                <input
                                                    value={title} onChange={(e) => setTitle(e.target.value)}
                                                    required placeholder='Job Title' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>



                                            {/* Company Name */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <BiBuilding size={20} />
                                                </div>
                                                <input
                                                    value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                                    required placeholder='Company Name' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>



                                            {/* Company Logo */}
                                            <div>
                                                <div className='bg-white flex w-[15.2rem] justify-center items-center'>
                                                    <div className='text-gray-600 px-2'>
                                                        {
                                                            logo.length !== 0 ?
                                                                <img src={logo} className='w-[3em]' alt="" /> :
                                                                <BiImageAlt size={20} />
                                                        }
                                                    </div>
                                                    <label htmlFor='logo' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                                                        {logoName.length === 0 ? <span className='text-gray-500 font-medium'>Select Company Logo...</span>
                                                            : logoName}
                                                    </label>
                                                    <input id='logo' name='logo' required
                                                        onChange={logoChange}
                                                        placeholder='Logo' accept="image/*" type="file" className='outline-none  w-full hidden text-black px-1 pr-3 py-2' />


                                                </div>
                                                {/* <p className='bg-gray-950 text-white text-xs'>Please select Image file</p> */}
                                            </div>

                                        </div>
                                        <div className='flex gap-3'>
                                            {/* Experience */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineReceiptLong size={20} />
                                                </div>
                                                <input
                                                    value={experience} onChange={(e) => setExperience(e.target.value)}
                                                    required placeholder='Experience' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>


                                            {/* Location */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdOutlineLocationOn size={20} />
                                                </div>
                                                <input
                                                    value={location} onChange={(e) => setLocation(e.target.value)}
                                                    required placeholder='Location' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>


                                            {/* Salary */}
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    <MdAttachMoney size={20} />
                                                </div>

                                                <input
                                                    value={salary} onChange={(e) => setSalary(e.target.value)}
                                                    required placeholder='Salary' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                            </div>
                                        </div>

                                        <div className='flex w-[48rem] gap-3'>
                                            {/* Job Description */}
                                            <div className='bg-white w-full flex justify-center items-center'>
                                                <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                                    <MdOutlineFeaturedPlayList size={20} />
                                                </div>
                                                <textarea
                                                    value={description}
                                                    onChange={(e) => setDescription(e.target.value)}
                                                    placeholder='Job Description' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                            </div>

                                        </div>

                                        <div className='flex gap-3 w-[48rem]'>
                                            {/* Skills Required */}
                                            <div className='bg-white w-full flex justify-center items-center'>
                                                <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                                    <MdWorkspacesOutline size={20} />
                                                </div>
                                                <textarea
                                                    value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)}
                                                    placeholder='Required Skills' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                            </div>

                                        </div>
                                        <div className='flex gap-3'>
                                            {/* Category */}
                                            <div className='bg-white flex justify-center items-center'>


                                                <select required onChange={(e) => setCategory(e.target.value)} 
                                                value={category} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300  bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 ">
                                                    <option selected value="">Select Category</option>
                                                    <option value="Technology">Technology</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Finance">Finance</option>
                                                    <option value="Sales">Sales</option>
                                                    <option value="Legal">Legal</option>
                                                </select>
                                            </div>


                                            {/* Employment Type */}
                                            <div className='bg-white flex justify-center items-center'>


                                                <select required onChange={(e) => setEmploymentType(e.target.value)} value={employmentType} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300  bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 ">
                                                    <option selected value="">Select Employment Type</option>
                                                    <option value="full-time">Full-time</option>
                                                    <option value="part-time">Part-time</option>
                                                    <option value="contract">Contract</option>
                                                    <option value="internship">Internship</option>
                                                </select>




                                            </div>


                                        </div>
                                        <div className='flex w-full'>

                                            <button onClick={()=>updateJobHandler()} className='blueCol w-[20rem] justify-center items-center flex px-4 py-2'>
                                                {loading ? <TbLoader2 className='animate-spin' size={24} /> : "Edit Job"}
                                            </button>

                                        </div>


                                    </div>

                                </form>




                                <form onSubmit={postEditHandler} className=' md:hidden flex md:w-1/3 shadow-gray-700  w-full md:mx-0 mx-8' action="">

                                    <div className='md:px-10 px-2 pt-4 pb-20 w-full flex flex-col gap-4'>
                                        <div className='text-center border-gray-500 border-b'>
                                            <p className='text-4xl  font-medium'>Edit Job Details</p>
                                        </div>

                                        {/* Job Title */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <MdOutlineWorkOutline size={20} />
                                            </div>
                                            <input
                                                value={title} onChange={(e) => setTitle(e.target.value)}
                                                required placeholder='Job Title' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                        </div>



                                        {/* Job Description */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                                <MdOutlineFeaturedPlayList size={20} />
                                            </div>
                                            <textarea
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                placeholder='Job Description' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                        </div>



                                        {/* Company Name */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <BiBuilding size={20} />
                                            </div>
                                            <input
                                                value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                                required placeholder='Company Name' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                        </div>



                                        {/* Company Logo */}
                                        <div>
                                            <div className='bg-white flex justify-center items-center'>
                                                <div className='text-gray-600 px-2'>
                                                    {
                                                        logo.length !== 0 ?
                                                            <img src={logo} className='w-[3em]' alt="" /> :
                                                            <BiImageAlt size={20} />
                                                    }
                                                </div>
                                                <label htmlFor='logo' className='outline-none w-full cursor-pointer text-black px-1 pr-3 py-2 '>
                                                    {logoName.length === 0 ? <span className='text-gray-500 font-medium'>Select Company Logo...</span>
                                                        : logoName}
                                                </label>
                                                <input id='logo' name='logo' required
                                                    onChange={logoChange}
                                                    placeholder='Logo' accept="image/*" type="file" className='outline-none  w-full hidden text-black px-1 pr-3 py-2' />


                                            </div>
                                        </div>



                                        {/* Location */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <MdOutlineLocationOn size={20} />
                                            </div>
                                            <input
                                                value={location} onChange={(e) => setLocation(e.target.value)}
                                                required placeholder='Location' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                        </div>

                                        {/* Skills Required */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 md:pb-12 pb-8 px-2'>
                                                <MdWorkspacesOutline size={20} />
                                            </div>
                                            <textarea
                                                value={skillsRequired} onChange={(e) => setSkillsRequired(e.target.value)}
                                                placeholder='Required Skills' type="text" className='outline-none w-full text-black bold-placeholder px-1 pr-3 py-2' />
                                        </div>


                                        {/* Experience */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <MdOutlineReceiptLong size={20} />
                                            </div>
                                            <input
                                                value={experience} onChange={(e) => setExperience(e.target.value)}
                                                required placeholder='Experience' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />
                                        </div>


                                        {/* Category */}
                                        <div className='bg-white flex justify-center items-center'>


                                            <select required onChange={(e) => setCategory(e.target.value)} 
                                            value={category} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300  bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 ">
                                                <option selected value="">Select Category</option>
                                                <option value="Technology">Technology</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Legal">Legal</option>
                                            </select>
                                        </div>


                                        {/* Salary */}
                                        <div className='bg-white flex justify-center items-center'>
                                            <div className='text-gray-600 px-2'>
                                                <MdAttachMoney size={20} />
                                            </div>

                                            <input
                                                value={salary} onChange={(e) => setSalary(e.target.value)}
                                                required placeholder='Salary' type="text" className='outline-none bold-placeholder w-full text-black px-1 pr-3 py-2' />

                                        </div>


                                        {/* Employment Type */}
                                        <div className='bg-white flex justify-center items-center'>


                                            <select required onChange={(e) => setEmploymentType(e.target.value)} value={employmentType} name="" id="large" className="block w-full px-6 py-2 text-base text-gray-900 border border-gray-300  bg-gray-50 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 ">
                                                <option selected value="">Select Employment Type</option>
                                                <option value="full-time">Full-time</option>
                                                <option value="part-time">Part-time</option>
                                                <option value="contract">Contract</option>
                                                <option value="internship">Internship</option>
                                            </select>




                                        </div>









                                        <div>
                                            <button onClick={()=>updateJobHandler()} disabled={loading} className='blueCol flex justify-center items-center px-8 w-full py-2 font-semibold' >
                                                {loading ? <TbLoader2 className='animate-spin' size={24} /> : 
                                                "Edit Job"}</button>
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
