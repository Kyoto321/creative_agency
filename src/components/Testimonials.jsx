import React from 'react'
import { testimonials } from '../assets/assets';
import { useNavigate } from 'react-router-dom'


const Testimonials = () => {

  const navigate = useNavigate()

  return (
    <div className='md:mx-20 flex-col lg:flex-row md:flex-row mt-10'>
      <div className='flex flex-row mb-5 gap-6 mt-20'>
       
        <b className='text-left text-blue-950 font-medium text-2xl lg:text-5xl md:text-5xl'>Feedback from our clients</b>

            <ul className='flex flex-col gap-2 text-gray-600'>
              <div className="">
                
              <input type="text" id="newsletter" class="bg-white border border-gray-100 text-gray-900 text-md rounded-full block w-full p-2.5 pl-5 pr-20" placeholder="Enter your email address" />
              
              </div>  
                  <li className='pl-5'>I agree to the <b>Privacy Policy.</b></li>
              </ul>

          <div>
          <button onClick={()=>navigate('#')} className='bg-blue-600 text-white px-8 py-3 rounded-full font-light md:block'>Subscribe</button>
          </div>
          
      
      </div>
      <div className=' items-center gap-4 my-6 text-gray-500 md:mx-10'>
    
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>

        </div> 


          <div className='flex flex-row items-center gap-6 py-16' id='Solutions'>
              <div className='flex flex-row sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
              {testimonials.map((item, index)=>(
                <div onClick={()=>scrollTo(0,0)} className='flex flex-col items-centert text-tx cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 no-scrollbar' key={index}>
                    <img className='m-auto mt-10 rounded-full' src={item.image} alt="" />
                    <div className='p-4 text-center'>
                        <p className='text-gray-600 text-sm'>{item.about}</p>
                        <p className='text-gray-600 text-sm'>{item.about2}</p>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-500 mb-10'>{item.title}</p> 
                    </div>
                    
                </div>
            ))}
              </div>
          </div>


      </div>
    </div>
  )
}

export default Testimonials
