<<<<<<< HEAD
import React, { useState } from "react";
import { MetaData } from "../components/MetaData";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiTwotoneMail,
} from "react-icons/ai";
import { BiMinus, BiPlus } from "react-icons/bi";
import  Card  from "../components/Card"; // New Card component
import Accordion from "../components/Accordion";// New Accordion component
import X from "../../public/X-twitter.png"
=======
import React, { useState } from 'react'
import { MetaData } from '../components/MetaData'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiOutlineTwitter, AiTwotoneMail } from 'react-icons/ai'
import { BiMinus, BiPlus } from 'react-icons/bi'
// import { FaSquareTwitter } from "react-icons/fa6";
import X from '../../public/X.svg'
>>>>>>> 7432ddc3fbc6f1e3b0a8f4db6c6b041c8a4db382
export const Contact = () => {
  const [que1, setQue1] = useState(false);
  const [que2, setQue2] = useState(false);
  const [que3, setQue3] = useState(false);

  return (
    <>
      <MetaData title="Contact" />
      <div className="bg-gray-950 min-h-screen pt-14 md:px-20 px-3 text-white">
        <div className="flex flex-col gap-5 md:px-0 px-2 md:pt-8 pt-4 pb-20">
          <div>
            <p className="text-4xl pb-3 underline underline-offset-8 underPur font-bold text-center">
              Contact Us
            </p>

            <p>
              We're excited to hear from you! If you have any questions,
              inquiries, or feedback, feel free to reach out to us using the
              contact information provided below. Your satisfaction and
              engagement with our platform are our top priorities, and we're
              here to assist you in any way we can.
            </p>
          </div>

          <div>
            <p class="text-2xl text-yellow-500">Contact Information</p>

            <Card
              title="Address"
              content="JobLane, Wall Street, New York, 123, United States"
            />
            <Card
              title="Email"
              content={[
                "General Inquiries: info@joblane.com",
                "Support: support@joblane.com",
                "Job Applications: jobs@joblane.com",
              ]}
            />
            <Card
              title="Phone"
              content={[
                "Customer Support: +123-456-7890",
                "HR & Job Inquiries: +123-456-7891",
              ]}
            />

          <p className="text-xl pt-3 pb-1">Social Media:</p>
<ul>
  <div className="flex gap-5 pt-1 items-center">
    <BsFacebook className="hover:text-blue-600" size={26} />
    <AiFillInstagram className="hover:text-pink-500" size={30} />
    {/* <AiOutlineTwitter className="hover:text-blue-400" size={30} /> */}
    <img src={X} className="hover:cursor-pointer"/>
    <AiTwotoneMail className="hover:text-red-600" size={28} />
  </div>
</ul>
</div>
        

          <div>
            <p className="text-2xl pb-4 text-yellow-500">
              Frequently Asked Questions (FAQs):
            </p>

<<<<<<< HEAD
            <Accordion
              question="How do I create an account on your job application platform?"
              answer="To create an account, click on the 'Register' button located at the top right corner of the homepage. Fill in your personal information, including your name, email address, and a secure password. Once your account is created, you can start exploring jobs."
            />
            <Accordion
              question="What should I include in my job application?"
              answer="Crafting an effective job application is crucial to stand out to potential employers. Make sure to include a tailored resume that highlights your relevant experience and skills. Additionally, write a resume that showcases how your qualifications align with the job requirements."
            />
            <Accordion
              question="How can I check the status of my job application?"
              answer="After submitting your applications, you can log in to your account dashboard. Here, you'll find a section that lists your submitted applications along with their current statuses.The statuses may include accepted, rejected or pending."
            />
          </div>
        </div>
      </div>
    </>
  );
};
=======
    <div class='mt-4'>
        <p class='text-xl pb-1'>Email:</p>
        <ul class='list-disc pl-4 text-lg'>
            <li>General Inquiries: info@joblane.com</li>
            <li>Support: support@joblane.com</li>
            <li>Job Applications: jobs@joblane.com</li>
        </ul>
    </div>

    <div class='mt-4'>
        <p class='text-xl pb-1'>Phone:</p>
        <ul class='list-disc pl-4 text-lg'>
            <li>Customer Support: +123-456-7890</li>
            <li>HR & Job Inquiries: +123-456-7891</li>
        </ul>
    </div>
</div>

                        <p className='text-xl pt-3 pb-1'>Social Media:</p>
                        <ul >
                            <div className='flex gap-5 pt-1 items-center'>
                                <BsFacebook size={26} />
                                <AiFillInstagram size={30} />
                                {/* <FaSquareTwitter size={30} /> */}
                                <img src={X} height={25} width={25} alt='twitter' className='text-white bg-white'/>
                                <AiTwotoneMail size={28} />
                            </div>
                        </ul>
                    </div>

                    <div>
                        <p className='text-2xl pb-4 text-yellow-500'>Frequently Asked Questions (FAQs):</p>

                     


                        <div id="accordion-collapse" data-accordion="collapse">
                            <h2 id="accordion-collapse-heading-1">
                                <button onClick={()=>setQue1(!que1)}  type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>How do I create an account on your job application platform?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-1" className={`${que1? "flex":"hidden"}`}  aria-labelledby="accordion-collapse-heading-1">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-950">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Ans: To create an account, click on the "Register" button located at the top right corner of the homepage. Fill in your personal information, including your name, email address, and a secure password. Once your account is created, you can start exploring jobs.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-2">
                                <button onClick={()=>setQue2(!que2)}  type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span>What should I include in my job application?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-2" className={`${que2? "flex":"hidden"}`}  aria-labelledby="accordion-collapse-heading-2">
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Ans: Crafting an effective job application is crucial to stand out to potential employers. Make sure to include a tailored resume that highlights your relevant experience and skills. Additionally, write a resume that showcases how your qualifications align with the job requirements.</p>
                                </div>
                            </div>
                            <h2 id="accordion-collapse-heading-3">
                                <button onClick={()=>setQue3(!que3)} type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-900" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                                    <span >How can I check the status of my job application?</span>
                                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                                    </svg>
                                </button>
                            </h2>
                            <div id="accordion-collapse-body-3" className={`${que3? "flex":"hidden"}`} aria-labelledby="accordion-collapse-heading-3">
                                <div className="p-5  border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Ans: After submitting your applications, you can log in to your account dashboard. Here, you'll find a section that lists your submitted applications along with their current statuses.The statuses may include accepted, rejected or pending.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>


        </>
    )
}
>>>>>>> 7432ddc3fbc6f1e3b0a8f4db6c6b041c8a4db382
