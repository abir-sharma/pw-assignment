import React from 'react'
import ConnectForm from '../connectForm/ConnectForm'

const HomeBanner1 = () => {
  return (
    <>
    
      <div className="upper-div bg-dark-blue w-full h-20 la:bg-dark-blue la:w-full la:h-108px"></div>
      <div className="lower-div bg-banner1 w-full bg-no-repeat bg-cover  la:w-60px la:w-full la:bg-banner1 la:bg-cover la:relative la:h-1000px la:bg-no-repeat">
        <div className='la:absolute la:top-0 la:left-0 la:w-full la:h-full bg-blue-opacity bg-opacity-80 la:flex la:flex-col la:items-center'>
          <div className="title px-8 pt-4 la:mt-20 la:w-100 ">
            <img src="/assets/Group 290128.png" alt="" />
          </div>
          <p className=' text-white text-4xl font-semibold text-center la:mx-4 la:text-center la:text-6xl la:mt-7 la:font-semibold la:text-white my-4'>Dreaming to Crack UPSC / GATE EXAM?</p>
          <p className='text-white text-xs font-semibold text-center bg-gradient-to-r from-left to-right rounded-full py-1 mx-4 mt-2
          
          la:text-white la:text-xl la:py-2 la:px-40 la:bg-gradient-to-r la:from-left la:to-right la:rounded-full la:mt-6 la:text-center'>PhysicsWallah in Your Campus : UPSC & GATE Program</p>
          <div className="img-form la:flex">
          <div className="form la:relative la:top-16">
            <ConnectForm />
          </div>
          <div className="img ">
            <img className='la:relative top-0 la:top-2 la:left-20' src="/assets/aP sir 1.png" alt="" />
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner1