import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { FiSearch } from 'react-icons/fi'
import { Loader } from '../components/Loader'
import { JobCard } from '../components/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobs, getSingleJob } from '../actions/JobActions'
import { Slider } from '@mantine/core';
import { RxCross2 } from 'react-icons/rx'
import { Pagination } from '@mantine/core';


export const Jobs = () => {

  const dispatch = useDispatch()
  const { allJobs, loading } = useSelector(state => state.job)

  const [jobs, setJobs] = useState([]);

  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState(0);
  const [company, setCompany] = useState("");
  const [search, setSearch] = useState("");

  

  const data = ["Technology", "Marketing", "Finance", "Sales", "Legal"]

  const companyData = [
    "Google",
    "Apple",
    "Paypal",
    "Samsung",
    "Airtel",
    "Oracle"
  ]

console.log(allJobs.length)

  useEffect(() => {
    dispatch(getAllJobs());
  }, [])

  useEffect(() => {
    setJobs(allJobs);
  }, [allJobs])

  useEffect(() => {
    const searchArr = jobs.filter((e) => (
      e.title.toLowerCase().includes(search.toLowerCase().trim())
    ))

    if (search === "") {

      setJobs(allJobs)
    } else {

      setJobs(searchArr)
    }

  }, [search])






  const searchHandler = () => {

    console.log(search);

    const searchArr = jobs.filter((e) => (
      e.title.toLowerCase().includes(search.toLowerCase())
    ))

  

    if (search !== "") {
      setJobs(searchArr)
    }
    else if (searchArr.length === 0) {
      setJobs(allJobs)
    }

  }

  const leftFilter = () => {
    console.log(category, salary)


    const leftFilArr = allJobs.filter((item) => (
      item.category.toLowerCase() === category.toLowerCase() && parseInt(item.salary) >= salary
    ))
    setJobs(leftFilArr)
  }
  const removeLeftFilter = () => {
    setCategory("")
    setSalary(0)
    setJobs(allJobs)
  }

  const rightFilter = () => {
    const rightFilArr = allJobs.filter((item) => (
      item.companyName.toLowerCase() === company.toLowerCase()
    ))
    setJobs(rightFilArr)

  }
  const removeRightFilter = () => {
    setCompany("")
    setJobs(allJobs)
  }

 

  


  return (
    <>
      <MetaData title="Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>


        {loading ? <Loader /> :
          <>
            <div className='flex-col flex justify-center items-center w-full '>
              <div className='text-center pt-8 md:text-3xl text-2xl font-medium'>
                <p>Find your dream job now</p>
              </div>
              <div className='py-3 pt-4 w-full flex justify-center items-center'>

                <div className='flex  justify-center w-full  items-center  '>
                  <div className='bg-white flex md:w-2/5 w-4/5'>
                    <div className='flex justify-center items-center pl-2 text-black'> <FiSearch size={19} /> </div>
                    <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" className='outline-none   text-black px-2 pl-3 md:h-10 w-full h-8 py-1 text-sm' />
                    <div className='text-black items-center flex justify-center px-2 '><RxCross2 onClick={() => setSearch("")} size={19} className={`cursor-pointer
                    ${search.length !== 0 ? "flex" : "hidden"}
                     `} /></div>
                    <button onClick={() => searchHandler()} className='blueCol px-4 md:h-10 h-8 py-1'>Search</button>
                  </div>
                </div>


              </div>


              <div className=' flex flex-col pt-1 justify-between md:flex-row w-full '>

                <div className='filter1  md:flex hidden flex-col'>
                  <div className='flex justify-start  flex-col filter  '>
                    <p className='text-xl underline underline-offset-4'>Categories</p>
                    <ul className='flex pt-3 flex-col gap-3'>

                      {
                        data.map((e, i) => (
                          <li key={i} onClick={() => setCategory(e)} className={`hover:text-yellow-600 cursor-pointer ${category === e ? "text-yellow-600" : ""} `}>{e}</li>
                        ))
                      }

                    </ul>
                    <div className='pt-5'>
                      <p className='text-xl pb-3 underline underline-offset-4'>Salary</p>

                      <Slider
                        color="indigo"
                        className='outline-none w-44'
                        onChange={setSalary}
                        value={salary}
                        min={0}
                        max={2000000}
                      />
                    </div>


                    <div className='flex flex-col gap-4 w-2/3 pt-5'>
                      <button onClick={() => leftFilter()} className='blueCol px-1 py-1 text-xs'>Apply Filter</button>
                      <button onClick={() => removeLeftFilter()} className='blueCol px-1 py-1 text-xs'>Remove Filter</button>
                    </div>

                  </div>

                </div>



                <div className='md:w-2/4 pb-20 pt-2'>
                  {/* overflow-y-auto max-h-[30em] */}
                  {/* <div className='flex flex-col gap-4'> */}
                  <div className='grid grid-cols-1  pb-14 md:px-0 px-2 gap-4'>
                    {
                      jobs && jobs
                        .filter(job => job._id)
                        .sort((a, b) => {
                          const dateA = new Date(a.createdAt);
                          const dateB = new Date(b.createdAt);
                          return dateB - dateA;
                        }).map((job, i) => (
                          <JobCard onClick={() => { dispatch(getSingleJob(job._id)) }} key={i} job={job} />

                        ))

                    }



                    <div className={`${jobs.length == 0 ? "flex" : "hidden"}  w-full  justify-center items-center  text-center pt-16 pb-12 md:text-xl text-lg    `}>
                      No Jobs available according to your preferences
                    </div>
                  </div>

                  <div className={`${jobs.length === 0 ? "hidden" : "flex"} justify-center pt-20 items-center`}>
                    <div className='flex '>

                    

                    </div>
                  </div>

                </div>



                <div className='filter2  md:flex hidden flex-col ml-16'>
                  <div className='flex justify-end  flex-col filter  '>
                    <p className='text-xl underline underline-offset-4'>Companies</p>

                    <div className='pt-3 flex flex-col justify-end text-right gap-3'>
                      {
                        companyData.map(e => (
                          <div onClick={() => setCompany(e)} className={`${company === e ? "text-yellow-600" : ""} cursor-pointer hover:text-yellow-600`} >{e}</div>
                        ))
                      }
                    </div>
                    <div className='flex flex-col gap-4 pt-5'>
                      <button onClick={() => rightFilter()} className='blueCol px-1 py-1 text-xs'>Apply Search</button>
                      <button onClick={() => removeRightFilter()} className='blueCol px-1 py-1 text-xs'>Remove Search</button>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </>
        }


      </div>

    </>
  )
}
