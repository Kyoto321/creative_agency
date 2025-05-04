import React from 'react'

import Partners from '../components/Partners'
import Results from '../components/Results'
import About from '../components/About'
import Services from '../components/Services'
import Blog from '../components/Blog'
import Testimonials from '../components/Testimonials'
import Brands from '../components/Brands'
import Images from '../components/Images'
import BackgroundImage from '../components/BackgroundImage'



const Agency = () => {
  return (
    <div>
        <BackgroundImage />        
        <Services />
        <Results />
        <Brands />
        <Images />
        <Testimonials />
        <About />
        <Partners />
        <Blog />
    </div>
  )
}

export default Agency
