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
import useIsMobile from '../hooks/useIsMobile'


export const Jobs = () => {

  const dispatch = useDispatch()
  const { allJobs, loading } = useSelector(state => state.job)

  const [baseJobs, setBaseJobs] = useState([]); // New state for base jobs
  const [jobs, setJobs] = useState([]);

  const [category, setCategory] = useState("");
  const [salary, setSalary] = useState(0);
  const [company, setCompany] = useState("");
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);


  const isMobile = useIsMobile()


  const data = ["Technology", "Marketing", "Finance", "Sales", "Legal"]

  const companyData = [
    "Google",
    "Apple",
    "Paypal",
    "Samsung",
    "Amazon",
    "Oracle"
  ]

  console.log(allJobs.length)

  useEffect(() => {
    dispatch(getAllJobs());
  }, [])

  useEffect(() => {
    setJobs(allJobs);
    setBaseJobs(allJobs); // Set base jobs when allJobs changes
  }, [allJobs])

  useEffect(() => {
    const searchArr = baseJobs.filter((e) => (
      e.title.toLowerCase().includes(search.toLowerCase().trim())
    ))

    if (search === "") {

      setJobs(baseJobs)
    } else {

      setJobs(searchArr)
    }

  }, [search, baseJobs])






  const searchHandler = () => {

    console.log(search);

    const searchArr = baseJobs.filter((e) => (
      e.title.toLowerCase().includes(search.toLowerCase())
    ))



    if (search !== "") {
      setJobs(searchArr)
    }
    else if (searchArr.length === 0) {
      setJobs(baseJobs)
    }

  }

  const leftFilter = (jobsList) => {
    if (category == "" && salary == 0) {
      setJobs(allJobs)
      return
    }
    const leftFilArr = jobsList.filter((item) => (
      item.category.toLowerCase() === category.toLowerCase() && parseInt(item.salary) >= salary
    ))
    setJobs(leftFilArr)
  }


  const removeLeftFilter = () => {
    setCategory("")
    setSalary(0)
    rightFilter(allJobs)
    setCurrentPage(1)
  }

  const rightFilter = (jobsList) => {
    if (company == "") {
      setJobs(allJobs)
      return
    }
    const rightFilArr = jobsList.filter((item) => (
      item.companyName.toLowerCase() === company.toLowerCase()
    ))
    setJobs(rightFilArr)

  }
  const removeRightFilter = () => {
    setCompany("")
    leftFilter(allJobs)
    setCurrentPage(1)
  }






  // Pagination 

  const itemsPerPage = 5;

  const totalPageCount = Math.ceil(jobs.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPageCount));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedData = jobs.slice(startIndex, endIndex);

  const pageButtons = [];
  const maxButtonsToShow = 3; // Maximum number of page buttons to show

  let startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
  let endButton = Math.min(totalPageCount, startButton + maxButtonsToShow - 1);

  for (let i = startButton; i <= endButton; i++) {
    pageButtons.push(
      <button
        key={i}
        onClick={() => handlePageChange(i)}
        className={`mx-1 px-3 py-1 border border-gray-700 rounded ${currentPage === i ? 'bg-gray-800  text-white' : 'bg-gray-900  text-white hover:bg-gray-800 hover:text-white'}`}
      >
        {i}
      </button>
    );
  }

  // Pagination 



  return (
    <>
      <MetaData title="Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14 sm:px-20 px-3  text-white'>


        {loading ? <Loader /> :
          <>
            <div className='flex-col flex justify-center items-center w-full '>
              <div className='text-center pt-8 sm:text-3xl text-2xl font-medium'>
                <p>Find your dream job now</p>
              </div>
              <div className='py-3 pt-4 w-full flex justify-center items-center'>

                <div className='flex  justify-center w-full  items-center  '>
                  <div className='bg-white flex sm:w-2/5 w-4/5'>
                    <div className='flex justify-center items-center pl-2 text-black'> <FiSearch size={19} /> </div>
                    <input value={search} placeholder='Search Jobs ' onChange={(e) => setSearch(e.target.value)} type="text" className='outline-none bold-placeholder   text-black px-2 pl-3 sm:h-10 w-full h-8 py-1 text-sm' />
                    <div className='text-black items-center flex justify-center px-2 '><RxCross2 onClick={() => setSearch("")} size={19} className={`cursor-pointer
                    ${search.length !== 0 ? "flex" : "hidden"}
                     `} /></div>
                    <button onClick={() => searchHandler()} className='blueCol sm:text-sm text-xs px-4 sm:h-10 h-8 py-1'>Search</button>
                  </div>
                </div>


              </div>


              <div className=' flex flex-col pt-1 justify-between sm:flex-row w-full '>

              {!isMobile &&  <div className='filter1  flex  flex-col'>
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
                      <button onClick={() => leftFilter(jobs)} className='blueCol px-1 py-1 text-xs'>Apply Filter</button>
                      <button onClick={() => removeLeftFilter()} className='blueCol px-1 py-1 text-xs'>Remove Filter</button>
                    </div>

                  </div>

                </div>}



                <div className='sm:w-2/4 pb-20 pt-2'>

                  <div className='flex  flex-col sm:overflow-y-auto  sm:max-h-[30em] gap-4'>

                    {
                      // jobs && jobs
                      jobs && displayedData
                        .filter(job => job._id)
                        .sort((a, b) => {
                          const dateA = new Date(a.createdAt);
                          const dateB = new Date(b.createdAt);
                          return dateB - dateA;
                        }).map((job, i) => (
                          <JobCard onClick={() => {
                            dispatch(getSingleJob(job._id))
                          }}
                            key={i}
                            job={job} />

                        ))

                    }



                    <div className={`${jobs.length == 0 ? "flex" : "hidden"}  w-full  justify-center items-center  text-center pt-16 pb-12 sm:text-xl text-lg    `}>
                      No Jobs available according to your preferences
                    </div>

                  </div>



                  <div className={` justify-center pt-20 items-center`}>
                    <div className='flex  flex-col'>


                      {/* Pagination */}
                      <div className="flex justify-center mt-1">
                        <button
                          onClick={handlePrevPage}
                          disabled={currentPage === 1}
                          className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 mr-2"
                        >
                          Previous
                        </button>


                        {pageButtons}


                        <button
                          onClick={handleNextPage}
                          disabled={currentPage === totalPageCount}
                          className="bg-gray-900 border border-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 ml-2"
                        >
                          Next
                        </button>
                      </div>


                      {/* Mobile Filters */}
                      <div className='flex  justify-between pt-10 px-6'>

                        <div className='filter1  sm:hidden flex flex-col'>
                          <div className='flex justify-start  flex-col filter  '>
                            <p className='text-lg underline underline-offset-4'>Categories</p>
                            <ul className='flex pt-3 text-sm flex-col gap-3'>

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
                                className='outline-none w-32'
                                onChange={setSalary}
                                value={salary}
                                min={0}
                                max={2000000}
                              />
                            </div>


                            <div className='flex text-sm flex-col gap-4 w-2/3 pt-5'>
                              <button onClick={() => leftFilter(jobs)} className='blueCol px-1 py-1 text-xs'>Apply Filter</button>
                              <button onClick={() => removeLeftFilter()} className='blueCol px-1 py-1 text-xs'>Remove Filter</button>
                            </div>

                          </div>

                        </div>
                        <div className='filter2  sm:hidden flex flex-col ml-16'>
                          <div className='flex justify-end  flex-col filter  '>
                            <p className='text-lg underline underline-offset-4'>Companies</p>

                            <div className='pt-3 flex flex-col justify-end text-right gap-3'>
                              {
                                companyData.map(e => (
                                  <div onClick={() => setCompany(e)} className={`${company === e ? "text-yellow-600" : ""} cursor-pointer text-sm hover:text-yellow-600`} >{e}</div>
                                ))
                              }
                            </div>
                            <div className='flex text-sm flex-col gap-4 pt-5'>
                              <button onClick={() => rightFilter(jobs)} className='blueCol px-1 py-1 text-xs'>Apply Search</button>
                              <button onClick={() => removeRightFilter()} className='blueCol px-1 py-1 text-xs'>Remove Search</button>
                            </div>
                          </div>

                        </div>
                      </div>





                    </div>
                  </div>

                </div>



            {!isMobile &&  <div className='filter2 flex flex-col ml-16'>
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
                      <button onClick={() => rightFilter(jobs)} className='blueCol px-1 py-1 text-xs'>Apply Search</button>
                      <button onClick={() => removeRightFilter()} className='blueCol px-1 py-1 text-xs'>Remove Search</button>
                    </div>
                  </div>

                </div>}










              </div>

            </div>
          </>
        }


      </div>

    </>
  )
}
