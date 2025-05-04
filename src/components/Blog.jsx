import React from 'react'
import { blog } from '../assets/assets'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='flex flex-col items-center gap-6 py-16' id='blog'>
      <h1 className='text-blue-950 font-medium'>OUR BLOG</h1>
      <b className='text-blue-950 mx-10 mb-10 text-center text-3xl lg:text-5xl md:text-6xl'>Latest articles</b>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {blog.map((item, index)=> (
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-centert text-tx cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 no-scrollbar' key={index} to={'#'}>
                    <img className='w-20 md:full lg:full rounded-lg mb-2' src={item.image} alt="" />
                    <p className='text-blue-950 mb-2'>{item.title}</p>
                    <p className='text-blue-950 font-medium text-2xl'>{item.about}</p>
                    <p className='text-blue-950 font-medium text-2xl'>{item.about2}</p>
                    <div className='flex mt-2 text-gray-400'>
                      <p>{item.date} . {item.comment}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )

}

export default Blog
