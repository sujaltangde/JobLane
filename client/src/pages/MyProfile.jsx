import React from 'react'
import {MetaData} from '../components/MetaData'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from '../components/Loader'

export const MyProfile = () => {

  const {loading, me} = useSelector(state => state.user)
  console.log(me)

  return (
    <>

<MetaData title="My Profile" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3  text-white'>
        {
          loading ? <Loader/> : 

            <div className='flex justify-center items-center border border-blue-500 min-h-[90vh] ' >

                
                        


            </div>
          
        
        }


        </div>
    
    </>
  )
}

// _id: "64f2d9a08359986acaa53af1"
// ​
// avatar: Object { public_id: "avatar/mkzuwzhg2drkq9epytc8", url: "https://res.cloudinary.com/dwltg98sm/image/upload/v1693637020/avatar/mkzuwzhg2drkq9epytc8.jpg" }
// ​
// createdAt: "2023-09-02T06:43:44.506Z"
// ​
// email: "levi@mail.com"
// ​
// name: "levi ackerman"
// ​
// password: "$2b$10$y8dofrvjZmGj9m1FAViDq.Z0bGkJiikfSbx09iMrOAvd01tuogYSK"
// ​
// resume: Object { public_id: "resume/pmthgkompbnjlja3lgy3", url: "https://res.cloudinary.com/dwltg98sm/image/upload/v1693637022/resume/pmthgkompbnjlja3lgy3.png" }
// ​
// role: "applicant"
// ​
// skills: Array [ "frontend", "backend" ]
// ​
