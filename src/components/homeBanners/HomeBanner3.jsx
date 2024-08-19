import React from 'react'

const SingleBox = ({desc,img}) => {
  return (
    <>
    <div className="div rounded-xl py-4 my-2 flex flex-col justify-center items-center bg-submitToConnect la:h-264px w-60 la:w-264px">
         <img className='w-5 la:w-10' src={img} alt="" />
         <span className=' text-white text-sm la:text-white la:text-xl la:mx-8 la:mt-4 la:text-center'>{desc}</span>
    </div>
    </>
  )
}
const HomeBanner3 = ({items}) => {
  return (
    <>
    <div className='la:h-555px la:w-1447px my-4 la:flex la:flex-col la:items-center '>
        <p className='la:mt-12 rounded-xl mx-2 py-2 text-center la:px-20 text-sm la:text-3xl text-white  la:font-semibold bg-gradient-to-r from-light-orange to-dark-orange la:ml-20'>UPSC & GATE PROGRAM IN YOUR CAMPUS</p>
        <span className='text-sm la:text-xl la:mt-2 ml-14 la:ml-20'>What does it aim to bring in your Life ?</span>
        <div className="flex flex-col la:flex-row mt-4 items-center justify-between  la:h-264px la:w-1260px la:mt-16 la:ml-20">
          {items.map(item=> <SingleBox desc={item.desc} img={item.img} />)}
        </div>
    </div>
    </>
  )
}

export default HomeBanner3