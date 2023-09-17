import React,{useState} from 'react'
import { MetaData } from '../components/MetaData'
import { Sidebar } from '../components/Sidebar'
import { RxCross1 } from 'react-icons/rx'


export const Dashboard = () => {

    const [sideTog, setSideTog] = useState(false)

    return (
        <>

            <MetaData title="Dashboard" />
            <div className='bg-gray-950 min-h-screen pt-14  md:px-20 px-3  text-white'>

            <div className="pt-1 fixed left-0 z-20 pl-0">
            <div onClick={(() => setSideTog(!sideTog))} className='cursor-pointer blueCol px-3 py-2' size={44} >
              {!sideTog ? "Menu" : <RxCross1 />}
            </div>
          </div>
                   
                   <Sidebar sideTog={sideTog}/>


            </div>


        </>
    )
}
