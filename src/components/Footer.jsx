import React from 'react'

const Footer = () => {
return (
    <div className='bg-gray-950'>
      <div className='md:mx-20'>
          <div className='flex-col grid grid-cols-[1fr_1fr] md:grid-cols-[1fr_1fr_1fr_2fr] lg:grid-cols-[1fr_1fr_1fr_2fr]  my-20 gap-14 mt-40 text-sm'>
          {/**------------left side--------------*/}
          <div className="mt-20">
              <p className='text-xl text-white font-medium mb-5'>Office</p>
              <p className='w-full py-1 text-lg font-medium text-gray-600 leading-6'> Germany —785 15h Street, Office 478 Berlin, De 81566</p>
              <p className='w-full py-1 text-lg font-medium text-gray-600 leading-6'>info@email.com</p>
              <p className='w-full py-1 text-lg font-medium text-gray-600 leading-6'>+1 840 841 25 69</p>
          
          </div>

          {/**------------center--------------*/}
          <div className="mt-20">
              <p className='text-xl text-white font-medium mb-5'>Links</p>
              <ul className='flex cursor-pointer flex-col text-lg  font-medium gap-2 text-gray-600'>
                  <li>Home</li>
                  <li>Services</li>
                  <li>About us</li>
                  <li>Our Team</li>
                  <li>Contact Us</li>
                  

              </ul>
          </div>

          {/**------------center--------------*/}
          <div className="mt-20">
              <p className='text-xl text-white font-medium mb-5'>Socials</p>
              <ul className='flex cursor-pointer text-lg font-medium flex-col gap-2 text-gray-600'>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>Dribble</li>
                  <li>Instagram</li>
                
                  

              </ul>
          </div>

          {/**------------right side--------------*/}
          <div className="mt-20">
              <p className='text-xl text-white font-medium mb-5'>Newsletter</p>
              <ul className='flex cursor-pointer flex-col gap-2 text-gray-600'>
              <div className="">
                
                  <input type="text" id="newsletter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email address" />
              
              </div>  
                  <li>I agree to the <b>Privacy Policy.</b></li>
              </ul>
          </div>
          </div>

          {/**------------right side--------------*/}
          <div>
              <hr />
              <p className='py-5 text-gray-600 text-sm'>AyoBankole & AxiomThemes © 2025. All Rights Reserved.</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
