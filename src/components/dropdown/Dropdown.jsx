import React, { useState } from 'react'

const Dropdown = ({ arr,set,faq }) => {
  const [state, seState] = useState(false)
  return (
    <>

      <div class="relative inline-block la:relative la:inline-block">
        <div>
            <svg class="-mr-1 h-5 w-5 text-gray-400 la:-mr-1 la:h-5 la:w-5 hover:cursor-pointer la:text-gray-400" onClick={() => seState(!state)}  viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
        </div>

        {state &&
          <div className="container bg-blue-50 la:absolute la:w-28 la:left-6 la:top-7 la:py-4 la:border-2 la:flex la:justify-evenly">
            <div className="left mx-0 la:mx-2 hover:cursor-pointer">
                {arr.map(item=><p className='text-sm' onClick={(e=>set(item))}>{item}</p>)}
            </div>  
          </div>
        }
      </div>

    </>
  )
}

export default Dropdown