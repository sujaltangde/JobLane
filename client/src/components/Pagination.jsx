import React from 'react'

export const Pagination = ({totalPosts,postsPerPage}) => {

    let pages = [] ;

    for(let i = 1 ; i <= Math.ceil(totalPosts/postsPerPage) ; i++ ){
        pages.push(i)
    }

    console.log(totalPosts,postsPerPage)

  return (
    <>
            <div className='text-white'>
                {
                    pages.map((page, index)=>{
                        return <button key={index}>{page}</button>
                    })
                }
            </div>
    
    </>
  )
}
