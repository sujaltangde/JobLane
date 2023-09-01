import React from 'react'
import { MetaData } from '../components/MetaData'

export const About = () => {
  return (
    <>
      <MetaData title="About" />
      <div className='bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white'>

        <div className='flex flex-col gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20'>
          <div>
            <p className='text-4xl pb-3 underline underline-offset-8 underPur font-bold'>About Us</p>

            <p>At JobLane, we're more than just a job application platform – we're your partners in realizing your professional aspirations. Our mission is to connect talented individuals with remarkable opportunities that elevate their careers and enrich their lives. Whether you're a recent graduate stepping into the workforce or a seasoned professional seeking new horizons, JobLane is here to guide you every step of the way.</p>
          </div>
          <div>
            <p className='text-2xl text-yellow-500'>What Sets Us Apart</p>
            <ul className='list-disc px-5'>
              <li><span className='font-semibold text-lg '>Tailored Matches:</span> We understand that each candidate and company is unique. Our advanced matching algorithms ensure that your skills align perfectly with the roles you're interested in, saving you time and effort</li>
              <li><span className='font-semibold text-lg '>Exceptional Support:</span> Your success is our priority. Our dedicated support team is always ready to assist you, from optimizing your profile to preparing for interviews.</li>
              <li><span className='font-semibold text-lg '>Diverse Opportunities:</span> Whether you're seeking remote work, freelance gigs, or traditional 9-to-5 positions, we curate a wide range of opportunities to suit your preferences and lifestyle.</li>
              <li><span className='font-semibold text-lg '>Continuous Learning:</span> We believe in lifelong learning. Access resources, articles, and webinars to enhance your skills and stay ahead in the dynamic world of work.</li>
            </ul>
          </div>

          <div>
            <p className='text-2xl text-yellow-500'>Join the JobLane Community</p>

           <p className='pt-3'> When you join JobLane, you're not just signing up for a platform – you're becoming part of a dynamic community of professionals, recruiters, and mentors. Together, we're shaping the future of work, one opportunity at a time.</p>

            <p className='pt-4'>Thank you for choosing JobLane as your partner in career advancement. Here's to unlocking a world of possibilities and achieving greatness together!</p>
          </div>
        </div>


      </div>

    </>
  )
}
