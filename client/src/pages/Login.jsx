import React, { useEffect } from 'react'
import { MetaData } from '../components/MetaData'
import { SignIn, useUser } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSignedIn) {
      navigate('/')
    }
  }, [isSignedIn])

  return (
    <>
      <MetaData title="Login" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white flex justify-center items-center'>
        <div className='flex justify-center w-full items-start pt-14'>
          <SignIn routing="hash" signUpUrl="/register" />
        </div>
      </div>
    </>
  )
}