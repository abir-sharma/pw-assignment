import React from 'react'

const fourArr1 = [
  "/assets/Rectangle 1.png",
  "/assets/Rectangle 2591.png",
  "/assets/Rectangle 2592.png",
  "/assets/Rectangle 2593.png"

]
const fourArr2 = [
  "/assets/Rectangle 2590.png",
  "/assets/Recwtangle 2592.png",
  "/assets/Recwdtangle 2593.png",
  "/assets/Rectddangle 2591.png"

]
const fourArr3 = [
  "/assets/Rectangle 2.png",
  "/assets/Rectangle 4.png",
  "/assets/Rectangle 25.png",
  "/assets/Rectangle 259.png"
]

const twoArr1 = [
  "/assets/Rectangle 2587.png",
  "/assets/Rectangle 2588.png"

]
const twoArr2 = [
  "/assets/Rectangle 2587.png",
  "/assets/Rectangle 2588.png"

]

const eightArr = [
  "/assets/Rectangle 91.png",
  "/assets/Rectangle 2589.png",
  "/assets/Rectangle 2594.png",
  "/assets/Rectangle 2595.png",
  "/assets/Rectangle 2596.png",
  "/assets/Rectangle 25932.png",
  "/assets/Rectangle 259088.png",
  "/assets/Rectangle 2592197.png"

]
const FourImageCard = ({ title, arr }) => {
  return (
    <>
      <div className='la:w-665.83px la:mt-8 mb-4 la:rounded-xl'>
        <div className='la:border-2 la:border-black la:rounded-t-lg la:flex la:flex-wrap la:justify-between'>
          {arr.map(item => <img className='la:p-2 mt-2' src={item} alt="" />)}

        </div>
        <p className='shadow-lg rounded-b-xl la:py-4 py-2 la:w-full text-center la:text-2xl text-white la:font-semibold bg-gradient-to-r from-light-orange to-dark-orange'>{title}</p>
      </div>
    </>
  )
}
const TwoImageCard = ({ title, arr }) => {
  return (
    <>
      <div className='la:w-665.83px la:mt-8 la:rounded-xl'>
        <div className='la:w-665.83px mb-4 la:h-599.45px'>
          <div className='la:border-2 la:border-black la:rounded-t-lg la:mx-0 mx-2  la:flex la:flex-wrap la:justify-between'>
            {arr.map(item => <img className='la:p-2 la:ml-1 mt-2' src={item} alt="" />)}

          </div>
          <p className='text-center mx-2 la:mx-0 shadow-lg rounded-b-xl la:py-4 py-2 la:w-full la:text-2xl text-white font-semibold bg-gradient-to-r from-light-orange to-dark-orange'>{title}</p>
        </div>
      </div>
    </>
  )
}
const EightImageCard = ({ title, arr }) => {
  return (
    <>
      <div className='la:w-665.83px la:mt-8'>
        <div className='la:w-665.83px mb-4 la:h-599.45px'>
          <div className=' la:border-2 la:border-black la:rounded-t-lg flex flex-wrap la:p-1  justify-center'>
            {arr.map(item => <img className='la:p-1 mt-2' src={item} alt="" />)}

          </div>
          <p className='shadow-lg text-center rounded-b-xl la:py-4 py-2 la:w-full la:text-2xl text-white font-semibold bg-gradient-to-r from-light-orange to-dark-orange'>{title}</p>
        </div>
      </div>
    </>
  )
}
const HomeBanner6 = () => {
  return (
    <>
      <div className='la:bg-blue-50 la:h-2062.84px la:w-full la:flex la:flex-col la:justify-center la:items-center' >
        <div className='la:bg-blue-50 la:h-2062.84px la:w-1368.41px la:text-center'>
          <p className='la:text-4xl text-2xl la:mb-2 text-submitToConnect text-center font-semibold'>Have a Closer Look</p>
          <p className='text-submitToConnect text-sm la:text-xl text-center'>At Our Program Innovating Your Experience</p>
          <div className='flex flex-col la:flex-row items-center my-4 flex-wrap la:mt-20 justify-between'>
            <FourImageCard title="One-to-One Mentorship" arr={fourArr1} />
            <TwoImageCard title="Daily Prelims + Mains Tests" arr={twoArr1} />
            <EightImageCard title="Optional Classes" arr={eightArr} />
            <FourImageCard title="Memory Creator" arr={fourArr2} />
            <TwoImageCard title="Regular Bureaucrat Sessions" arr={twoArr2} />
            <FourImageCard title="Daily Class Notes" arr={fourArr3} />
          </div>
        </div>

      </div>
    </>
  )
}

export default HomeBanner6