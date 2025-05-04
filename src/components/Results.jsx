import React from 'react'




const Results = () => {

  //const navigate = useNavigate()

  return (
    <div className='ml-20 mt-20 pb-10 flex flex-col  gap-40 md:gap-0 lg:gap-0 md:flex-row lg:flex-row'>

      <div className="relative flex-1 item-center">
        
        <div className="text-9xl p-3 text-white  absolute opacity-50">
          <p>98</p>
        </div>

        
        <div className="absolute flex justify-centertext-white">
          <div className="bg-transparent p-14 shadow-lg">
          <b className="text-lg text-blue-950">Project</b>
          </div>
        </div>
      </div>

      <div className="relative flex-1 item-center">
        
        <div className="text-9xl p-3 text-white  absolute opacity-50">
          65
        </div>

        
        <div className="absolute flex justify-centertext-white">
          <div className="bg-transparent p-14 shadow-lg">
            <b className="text-lg text-blue-950">People</b>
          </div>
        </div>
      </div>

      <div className="relative flex-1 item-center">
        
        <div className="text-9xl p-3 text-white  absolute opacity-50">
          <p>10</p>
        </div>

        
        <div className="absolute flex justify-centertext-white">
          <div className="bg-transparent p-14 shadow-lg">
            <b className="text-lg text-blue-950">Years</b>
          </div>
        </div>
      </div>

      <div className="relative flex-1 item-center">
        
        <div className="text-9xl p-3 text-white  absolute opacity-50">
          <p>15</p>
        </div>

        
        <div className="absolute flex justify-centertext-white">
          <div className="bg-transparent p-14 shadow-lg">
            <b className="text-lg text-blue-950">Offices</b>
          </div>
        </div>
      </div>

    </div>
  )
}


export default Results
