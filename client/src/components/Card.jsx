import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className='bg-gray-800 p-4 rounded-lg shadow-md mt-4'>
            <h2 className='text-xl font-bold text-yellow-500'>{title}</h2>
            {Array.isArray(content) ? (
                content.map((item, index) => <p key={index} className='text-white'>{item}</p>)
            ) : (
                <p className='text-white'>{content}</p>
            )}
        </div>
    );
};

export default Card;