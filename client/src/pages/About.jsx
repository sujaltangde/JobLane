import React from 'react'
import { MetaData } from '../components/MetaData'

export const About = () => {
  return (
    <>
      <MetaData title="About" />
      <div className="bg-gray-900 min-h-screen pt-14 md:px-20 px-3 text-white">
  <div className="grid md:grid-cols-3 gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20">
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <p className="text-4xl pb-3 font-bold text-center text-yellow-500">About Us</p>
      <p className="text-lg">
        At JobLane, we're more than just a job application platform –
        we're your partners in realizing your professional aspirations.
        Our mission is to connect talented individuals with remarkable
        opportunities that elevate their careers and enrich their lives.
        Whether you're a recent graduate stepping into the workforce or a
        seasoned professional seeking new horizons, JobLane is here to
        guide you every step of the way.
      </p>
    </div>
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <p className="text-3xl text-yellow-500 text-center">What Sets Us Apart</p>
      <ul className="list-disc px-5 text-lg">
        <li>
          <span className="font-semibold text-lg ">
            Tailored Matches:
          </span>{" "}
          We understand that each candidate and company is unique. Our
          advanced matching algorithms ensure that your skills align
          perfectly with the roles you're interested in, saving you time
          and effort
        </li>
        <li>
          <span className="font-semibold text-lg ">
            Exceptional Support:
          </span>{" "}
          Your success is our priority. Our dedicated support team is
          always ready to assist you, from optimizing your profile to
          preparing for interviews.
        </li>
      </ul>
    </div>
    <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
      <p className="text-2xl text-yellow-500">Join the JobLane Community</p>
      <p className="pt-3">
        {" "}When you join JobLane, you're not just signing up for a platform –
        you're becoming part of a dynamic community of professionals,
        recruiters, and mentors. Together, we're shaping the future of
        work, one opportunity at a time.
      </p>
      <p className="pt-4">
        Thank you for choosing JobLane as your partner in career
        advancement. Here's to unlocking a world of possibilities and
        achieving greatness together!
      </p>
    </div>
  </div>
</div>

    </>
  )
}
