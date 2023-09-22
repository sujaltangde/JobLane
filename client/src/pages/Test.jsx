

    import React, { useState } from 'react';

export const Test = () => {
    const dataArray = [
        { "1": "One One One" },
        { "1": "Two Two Two" },
        { "1": "Three Three Three" },
        { "1": "Four Four Four" },
        { "1": "Five Five Five" },
        { "1": "Six Six Six" },
        { "1": "Seven Seven Seven" },
        { "1": "Eight Eight Eight" },
        { "1": "Nine Nine Nine" },
        { "1": "Ten Ten Ten" },
        { "1": "Eleven Eleven Eleven" },
        { "1": "Twelve Twelve Twelve" },
        { "1": "Thirteen Thirteen Thirteen" },
        { "1": "Fourteen Fourteen Fourteen" },
        { "1": "Fifteen Fifteen Fifteen" },
        { "1": "Sixteen Sixteen Sixteen" },
        { "1": "Seventeen Seventeen Seventeen" },
        { "1": "Eighteen Eighteen Eighteen" },
        { "1": "Nineteen Nineteen Nineteen" },
        { "1": "Twenty Twenty Twenty" },
        { "1": "Twenty One Twenty One Twenty One" },
        { "1": "Twenty Two Twenty Two Twenty Two" },
        { "1": "Twenty Three Twenty Three Twenty Three" },
        { "1": "Twenty Four Twenty Four Twenty Four" },
        { "1": "Twenty Five Twenty Five Twenty Five" },
        { "1": "Twenty Six Twenty Six Twenty Six" },
        { "1": "Twenty Seven Twenty Seven Twenty Seven" },
        { "1": "Twenty Eight Twenty Eight Twenty Eight" },
        { "1": "Twenty Nine Twenty Nine Twenty Nine" },
        { "1": "Thirty Thirty Thirty" }
    ];

    const itemsPerPage = 5; 
    const [currentPage, setCurrentPage] = useState(1);

    const totalPageCount = Math.ceil(dataArray.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPageCount));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const displayedData = dataArray.slice(startIndex, endIndex);

    const pageButtons = [];
    const maxButtonsToShow = 3; // Maximum number of page buttons to show

    let startButton = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
    let endButton = Math.min(totalPageCount, startButton + maxButtonsToShow - 1);

    for (let i = startButton; i <= endButton; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                className={`mx-1 px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-blue-500 hover:text-white'}`}
            >
                {i}
            </button>
        );
    }
 
    return (
        <>
            <div className='min-h-screen'>
                <div className='grid gap-5 mx-[20em] py-[10em] grid-cols-1'>
                    {displayedData.map((e, i) => (
                        <p key={i} className='bg-yellow-300 p-3 text-black'>{Object.values(e)[0]}</p>
                    ))}
                </div>



                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
                    >
                        Previous
                    </button>
                    
                    
                    {pageButtons}


                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPageCount}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2"
                    >
                        Next
                    </button>
                </div>



            </div>
        </>
    );
};
