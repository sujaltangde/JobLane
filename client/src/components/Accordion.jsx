import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

// Controlled component: the parent decides which item is open,
// so only one answer can be visible at a time.
const Accordion = ({ question, answer, isOpen, onToggle }) => {
    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md mt-4'>
            <div className='flex justify-between items-center cursor-pointer' onClick={onToggle}>
                <h2 className='text-xl font-bold text-white'>{question}</h2>
                <div>
                    {isOpen ? <BiMinus className='text-2xl text-yellow-500' /> : <BiPlus className='text-2xl text-yellow-500' />}
                </div>
            </div>
            {isOpen && <p className='text-white mt-2'>{answer}</p>}
        </div>
    );
};

export default Accordion;
