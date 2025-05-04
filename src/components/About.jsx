import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Services = () => {

  const navigate = useNavigate();

  return (
    <div className=''>
      <div className='md:mx-20 my-10 md:flex-row md:flex lg:flex gap-12'>

          <div className=' flex flex-col mt-20 gap-6'>
            <div className='text-left text-2xl pt-10'>
              <p className='text-blue-950 text-sm font-medium'>Who We Are</p>
              
            </div>
            <b className='text-left text-blue-950 font-medium text-5xl'>We provide best digital services</b>
            <p className="text-left text-sm text-gray-600">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</p>
            
            <div>
              <button onClick={()=>navigate('#')} className='bg-teal-600 text-white px-8 py-3 rounded-full font-light md:block'>Let's Talk</button>            
            </div>
            
          
          </div>

          <div className="relative ">
            <img className='scale-90' src={assets.about} alt="" />
            <div className='absolute w-full md:max-w-full top-20 right-10'>
              <img className='scale-90' src={assets.about2} alt="" />
            </div>

          </div>


        {/* <div class="relative ...">
          <p>Relative parent</p>
          <div class="absolute bottom-0 left-0 ...">
            <p>Absolute child</p>
          </div>
        </div> */}


      </div>
    </div>
  )
}

export default Services
