import React from 'react'
import { Solutions } from '../assets/assets'
import { Link } from 'react-router-dom'

const Images = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-16' id='Solutions'>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {Solutions.map((item, index)=> (
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-centert text-tx cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 no-scrollbar' key={index}>
                    <img className='w-80 gap-5 md:full lg:full rounded-lg mb-2' src={item.image} alt="" />
              
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Images
