import React, { useState, useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import { Sidebar } from '../components/Sidebar'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobsAdmin, deleteJobData } from '../actions/AdminActions'
import { Loader } from '../components/Loader'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'


export const ViewAllJobAdmin = () => {

  const dispatch = useDispatch();
  const { loading, allJobs } = useSelector((state) => state.admin)
  const [sideTog, setSideTog] = useState(false)

  useEffect(() => {
    dispatch(getAllJobsAdmin());
  }, [])

  const convertDateFormat = (inputDate) => {
    const parts = inputDate.split('-');
    if (parts.length !== 3) {
      return "Invalid date format";
    }

    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day}-${month}-${year}`;
  }


  const deleteJobHandler = (id) => {
    dispatch(deleteJobData(id))
  }


  return (
    <>

      <MetaData title="All Jobs" />
      <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>

        <>

          {loading ? <Loader /> :
            <div>

              <div className="pt-1 fixed left-0 z-20 pl-0">
                <div onClick={(() => setSideTog(!sideTog))} className='cursor-pointer blueCol px-3 py-2' size={44} >
                  {!sideTog ? "Menu" : <RxCross1 />}
                </div>
              </div>

              <Sidebar sideTog={sideTog} />
              <div>
                <p className='text-center pt-3 pb-4 text-3xl font-medium'>All Jobs</p>
              </div>

              <div className="relative pb-24 overflow-x-auto shadow-md ">


                <table className="w-full  text-sm text-left text-gray-500 dark:text-gray-400">

                  <thead className="text-xs text-gray-200 uppercase blueCol dark:text-gray-200">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Job Id
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Job Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Location
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Posted On
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {allJobs && allJobs.filter(job => job._id)
                      .sort((a, b) => {
                        const dateA = new Date(a.createdAt);
                        const dateB = new Date(b.createdAt);
                        return dateB - dateA;
                      }).map((job, i) => ( 
                        <tr className=" border-b hover:bg-gray-900 bg-gray-950 border-gray-700 text-white">
                          <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                            {job._id}
                          </th>
                          <td className="px-6 py-4">
                            {job.title}
                          </td>
                          <td className="px-6 py-4">
                            {job.companyName}
                          </td>
                          <td className="px-6 py-4">
                            {job.location}
                          </td>
                          <td className="px-6 py-4">
                            {convertDateFormat(job.createdAt.substr(0, 10))}
                          </td>
                          <td className="px-6 flex gap-4 py-4">
                            <Link to={`/admin/job/details/${job._id}`} className='text-blue-500 hover:text-blue-400 cursor-pointer'>
                              <MdOutlineModeEditOutline size={20} />
                            </Link>

                            <span className='text-red-500 hover:text-red-400 cursor-pointer'>
                              <AiOutlineDelete onClick={()=> deleteJobHandler(job._id)} size={20} />
                            </span>
                          </td>
                        </tr>
                      ))

                    }

                  </tbody>
                </table>


              </div>


            </div>}
        </>

      </div>


    </>
  )
}
