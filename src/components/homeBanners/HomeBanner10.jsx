import React, { useState } from 'react'

const SingleQuestion = () => {
  const [down, setDown] = useState(false)
  console.log(down)
  return (
    <>
      <div className={`la:rounded-lg mx-4 la:p-4 ${down? "bg-blue-100 la:mx-2 la:my-6":"la:my-6"}`}>
        <div className='la:w-full ml-80 la:ml-72'>
        {down?
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => setDown(!down)} width="12" height="16" fill="currentColor" class="bi bi-chevron-up la:ml-96 hover:cursor-pointer" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" onClick={(e) => setDown(!down)} width="12" height="16" fill="currentColor" class="bi bi-chevron-down la:ml-96  hover:cursor-pointer" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          }
        </div>
          
          
        <p className={`font-bold text-center ${down? 'bg-blue-100':''}`}>Does this program cover full UPSC / GATE preparation?</p>
        {down && <p className='la:mt-0 text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo laudantium possimus maxime deserunt corporis.</p>}
      </div>
      <hr />

    </>
  )
}
const HomeBanner10 = () => {
  return (
    <>
      <div className='la:w-full ml-3 la:ml-0 la:bg-blue-50 flex justify-center w-80 items-center'>
        <div className='la:w-884px mt-4 la:mt-24'>
          <p className='text-extra-light-blue text-3xl la:text-4xl la:mt-4 lfont-extrabold text-center '>Frequently Asked Questions</p>
          <div className='la:mt-20 la:mb-96 my-8 la:mx-8 '>
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
            <SingleQuestion />
          </div>

        </div>
      </div>

    </>
  )
}

export default HomeBanner10