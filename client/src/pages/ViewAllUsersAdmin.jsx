import React, { useEffect, useState } from 'react'
import { MetaData } from '../components/MetaData'
import { Sidebar } from '../components/Sidebar'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { AiOutlineDelete } from 'react-icons/ai'
import { getAllUsersAdmin, deleteUser } from '../actions/AdminActions'
import { useDispatch, useSelector } from 'react-redux'
import { Loader } from '../components/Loader'
import { RxCross1 } from 'react-icons/rx'
import { Link } from 'react-router-dom'


export const ViewAllUsersAdmin = () => {

  const dispatch = useDispatch()

  const { loading, allUsers } = useSelector(state => state.admin)

  const [sideTog, setSideTog] = useState(false)

  useEffect(() => {
    dispatch(getAllUsersAdmin())
  }, [])


  const deleteUserHandler = (id)=>{
        dispatch(deleteUser(id))
  }



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

  return (
    <>

      <MetaData title="All Users" />
      <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>

        {loading ? <Loader /> : <div>

          <div className="pt-1 fixed left-0 z-20 pl-0">
            <div onClick={(() => setSideTog(!sideTog))} className='cursor-pointer blueCol px-3 py-2' size={44} >
              {!sideTog ? "Menu" : <RxCross1 />}
            </div>
          </div>


          <Sidebar sideTog={sideTog} />
          <div>
            <p className='text-center pt-3 pb-4 text-3xl font-medium'>All Users</p>
          </div>

          <div className="relative pb-24 overflow-x-auto shadow-md ">


            <table className="w-full text-sm text-left  text-white">

              <thead className="text-xs text-gray-200 uppercase blueCol dark:text-gray-200">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    User Id
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created On
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  allUsers && allUsers.filter(user => user._id)
                    .sort((a, b) => {
                      const dateA = new Date(a.createdAt);
                      const dateB = new Date(b.createdAt);
                      return dateB - dateA;
                    }).map((user, i) => (

                      <tr key={i} className=" border-b hover:bg-gray-900 bg-gray-950 border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                          {user._id}
                        </th>
                        <td className="px-6 py-4">
                          {user.name}
                        </td>
                        <td className="px-6 py-4">
                          {user.role}
                        </td>
                        <td className="px-6 py-4">
                          {convertDateFormat(user.createdAt.substr(0, 10))}
                        </td>
                        <td className="px-6 flex gap-4 md:pt-4 pt-6 py-4">
                          <Link to={`/admin/user/role/${user._id}`} className='text-blue-500 hover:text-blue-400 cursor-pointer flex justify-center items-center '>
                            <MdOutlineModeEditOutline  size={20} />
                          </Link>

                          <span onClick={()=>deleteUserHandler(user._id)} className='text-red-500 hover:text-red-400 cursor-pointer flex justify-center items-center '>
                            <AiOutlineDelete size={20} />
                          </span>
                        </td>
                      </tr>))}

              </tbody>
            </table>


          </div>


        </div>}

      </div>


    </>
  )
}
