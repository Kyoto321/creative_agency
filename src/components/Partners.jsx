import React from 'react'
import { partners } from '../assets/assets'
import { Link } from 'react-router-dom'


const Partners = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16' id='partners'>
      
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {partners.map((item, index)=> (
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-centert text-tx cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 no-scrollbar' key={index} to={`#`}>
                    <img className='w-16 md:w-32 mb-2' src={item.image} alt="" />
                    
                </Link>
            ))}
        </div>
    </div>
  )
  
}

export default Partners
