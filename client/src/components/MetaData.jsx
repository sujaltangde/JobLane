import React from 'react'
import  Helmet  from 'react-helmet'

export const MetaData = ({title}) => {
  return (
  
         <Helmet>
            <title>{title}</title>
        </Helmet>
    
  )
}
