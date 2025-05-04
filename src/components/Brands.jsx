import React from 'react'


const Brands = () => {
  return (
      <div className='mt-40 my-10 flex flex-col md:flex-row lg:flex-row '>
 
        <div className='md:pl-20'>
          
          <b className='text-blue-950 font-medium text-5xl md:text-6xl'>We make unique & memorable brands</b>

        </div> 
           
        <div className='pr-5'>
            <p className=' text-xl text-gray-600'>At vero eos et accusamus et iusto odio dignissimos <br />ducimus qui blanditiis praesentium voluptatum deleniti <br />atque lorem in voluptate velit iusto odio dignissimos duci esse.</p>
            <br />
            <p className='text-xl text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit <br />voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
            <br />
            <b className='text-blue-800 pt-5'>Read More</b>
        </div>

       
      </div>
  )
}

export default Brands
