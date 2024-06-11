import React from 'react'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaFacebook,FaTwitterSquare,  FaYoutube } from 'react-icons/fa'

import { AiFillInstagram, AiFillMail } from 'react-icons/ai'


export const Footer = () => {
  return (
    <>
      <div className="bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center">
        <div className="flex gap-6 justify-center items-center">
          <Link
            to="/"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Jobs
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 hover:underline"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 hover:underline"
          >
            Contact
          </Link>
        </div>

        <div>
          <div className="flex flex-col justify-center items-center pt-5">
            <p className="titleT text-2xl flex justify-center items-center">
              {" "}
              <MdOutlineBusinessCenter /> JOBLANE
            </p>
            <p className="text-sm text-gray-300">
              Giving best opportunities to best peoples.
            </p>
          </div>

          <div className="flex gap-5 py-2 justify-center items-center">
            <FaFacebook
              className="cursor-pointer hover:text-[#2D68C4] duration-200 ease"
              size={22}
            />
            <FaTwitterSquare 
            className="cursor-pointer hover:text-[#1DA1F2] duration-200 ease"
            size={22}
            />
            <FaYoutube
              className="cursor-pointer hover:text-[#FF0000] duration-200 ease"
              size={22}
            />
            <AiFillInstagram
              className="cursor-pointer hover:text-[#C13584] duration-200 ease"
              size={22}
            />
            <AiFillMail
              className="cursor-pointer hover:text-[#D44638] duration-200 ease"
              size={22}
            />
          </div>
        </div>

        <div className="flex flex-col pt-3 justify-center items-center">
          <p className="text-sm">
            Designed and Developed by{" "}
            <Link
              target="_blank"
              className="underline text-blue-400"
              to="https://sujal-tangde.netlify.app/"
            >
              Sujal Tangde
            </Link>
          </p>
          <p className="text-sm"> &copy;Copyright, All rights reserved.</p>
        </div>

        <div></div>
      </div>
    </>
  );
}
