import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div className='pb-10'>
      <div className='md:mx-20 my-10 md:flex-row md:flex lg:flex gap-12'>

          <div className="relative w-full">
            <img className='scale-85 pr-20 md:scale-95 lg:scale-97' src={assets.services1} alt="" />
            <div className='absolute left-10 top-20 lg:right-10 md:right-20'>
              <img className='md:scale-75 lg:scale-75' src={assets.services2} alt="" />
            </div>

          </div>

          <div className=' flex flex-col pt-10 mt-20 gap-6'>
            <div className='text-left text-2xl pt-10'>
              <p className='text-blue-950 text-sm font-medium'>Creative Agency</p>
              
            </div>
            <b className='text-left text-blue-950 font-medium text-5xl'>We help your business grow</b>
            <p className="text-left text-sm text-gray-600">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
            <div>
              <p className='text-blue-950 text-sm font-medium'>Creative Design</p>
              <p className="text-left text-sm text-gray-600">Natus error sit voluptatem accus antium doloremque.</p>            
            </div>
            <div>
              <p className='text-blue-950 text-sm font-medium'>Endless Possibilities</p>
              <p className="text-left text-sm text-gray-600">Sit voluptatem accus antium doloremque laudan..</p>            
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
