import React from 'react'

const SingleCard2 = ({ desc, img }) => {
  return (
    <>
      <div className="flex flex-col justify-center my-2 items-center">
        <div className='la:my-4'>
          <img className='la:mr-4 my-2 la:w-16 w-10' src={img} alt="" />
        </div>
        <div className='border-2 la:flex la:flex-col la:justify-center la:items-center border-light-blue w-60 h-14 la:w-416.65px la:h-105.18px la:bg-white rounded-md la:rounded-2xl '>
          <p className=' mx-4 la:ml-4 font-bold text-center text-light-blue'>{desc}</p>
        </div>
      </div>

    </>
  )
}
const HomeBanner5 = ({ items }) => {
  return (
    <>
      <div className="div la:bg-blue-50 my-4 la:my-0 la:flex la:flex-col la:pb-20 la:justify-center la:items-center">
        <div className='la:flex la:flex-col la:my-20 la:justify-center la:items-center la:h-409.08px la:w-1329.95px la:bg-blue-50'>
          <div className='bg-submitToConnect rounded-2xl text-center mx-4 py-2 la:w-1187px la:h-124px'>
            <p className='la:text-4xl text-2xl la:font-semibold text-white text-center la:mt-2'>PRAKRAM GATE</p>
            <span className='la:text-xl text-sm text-white'>Fundamental-Features</span>
          </div>
          <div className='flex flex-col mx-4 la:flex-row justify-between la:mt-10 flex-wrap la:h-409.08px la:w-1329.95px'>
            {items.map(item => <SingleCard2 desc={item.desc} img={item.img} />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeBanner5