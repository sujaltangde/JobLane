import React from 'react'

export const Pagination = ({totalPosts,postsPerPage}) => {

    const [page, nbPages] = useGloba

  return (
    <>
            <div className='text-white'>
                <button onClick={()=>getPrevPage()} >PREV</button>
                <p>
                    {page} of {nbPages}
                </p>
                <button onClick={()=>getNextPage()} ></button>
            </div>
    
    </>
  )
}
