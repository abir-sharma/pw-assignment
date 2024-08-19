import React from 'react'

const SingleCard = ({desc,img}) => {
  return (
    <>
    <div className='border-2 flex  items-center my-2 py-4 border-light-blue la:w-416.65px la:h-105.18px la:bg-white la:rounded-2xl rounded-lg '>
          <div className='la:ml-12 ml-4'>
          <img className='la:mr-4 la:w-10 la:h-10 w-8 h-8' src={img} alt="" />
          </div>
          <span className='ml-4 font-bold text-center text-light-blue'>{desc}</span>
    </div>
    </>
  )
}
const HomeBanner4 = ({items}) => {
  return (
    <>
    <div className="div la:bg-blue-50 la:flex la:flex-col la:justify-center la:items-center">
      <div className='la:flex la:flex-col la:my-20 la:justify-center la:items-center la:h-409.08px la:w-1329.95px la:bg-blue-50'>
        <div className='bg-submitToConnect mx-4 rounded-2xl la:text-center py-2 la:w-1187px la:h-124px'>
          <p className='la:text-4xl la:font-semibold text-white text-center align-middle la:mt-2'>UPSC FOUNDATION COURSE</p>
          <p className='la:text-xl text-sm text-center text-white'>Fundamental-Features</p>
        </div>
        <div className='flex flex-col mx-4 my-4 la:flex-row justify-between la:mt-10 flex-wrap la:h-409.08px la:w-1329.95px'>
             {items.map(item=><SingleCard desc={item.desc} img={item.img} />)}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeBanner4