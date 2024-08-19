import React from 'react'

const StudentCard = ({img,name,air,batch,review}) =>{
  return (
    <>
    <div className='border-2 la:py-8 la:pr-4 my-4 border-submitToConnect la:mx-2 flex rounded-md la:rounded-2xl'>
             <div className='ml-2 my-2'><img className='w-20 la:w-28' src={img} alt="" /></div>
             <div className='la:ml-6 ml-4 my-2 w-44 la:w-full'>
              <span className='text-dark-orange la:mt-7 w-12 text-base la:text-3xl font-semibold'>{name},</span><span className='text-submitToConnect la:text-3xl text-lg font-extrabold'>AIR {air}</span> <br />
              <p className='bg-dark-orange la:my-4 mr-8 la:w-44 text-white text-sm py-1 text-center la:py-2  la:px-6 rounded-full font-bold'>{batch}</p>
              <span className='text-submitToConnect text-xs la:text-lg font-bold'>{review}</span>
             </div>
    </div>
    </>
  )
}
const HomeBanner9 = ({items}) => {
  return (
    <>
      <div className='la:h-2162.28px la:w-full bg-blue-50'>
        <div className='la:text-center la:py-6 la:px-4 py-2  bg-gradient-to-r from-banner9gradientfrom to-banner9gradientto'>
          <p className='la:text-4xl text-2xl text-center  font-semibold text-white la:mb-2 '>Our Wall Of UPSC / GATE Toppers</p>
          <p className='text-white text-center la:text-xl text-sm'>Because Efforts Led To Proud Results</p>
        </div>

        <div className='la:w-full bg-blue-50 flex flex-col  justify-center items-center'>
          <div className="upper-div my-4 la:mt-20">
            <img className='w-80 la:w-full' src="/assets/30+ Toppers on main stage (1) 4.png" alt="" />
          </div>
          <div className="lower-div mx-4  flex  flex-row  overflow-scroll la:overflow-hidden la:mt-14 justify-between items-center">
            <img  src="/assets/16.png" alt="" />
            <img className='la:mx-4 mx-4' src="/assets/25.png" alt="" />
            <img src="/assets/01.png" alt="" />
          </div>
          
          <div className='flex la:flex-row flex-col my-4 justify-between  la:mt-28 la:mx-20'>
              <StudentCard img="/assets/Group 4.png" name="Anmol Rathore" air={7} batch="UPSC CSE 2023" review="ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam." />
              
              <StudentCard img="/assets/Group 3.png" name="Smriti Mishra" air={4} batch="UPSC CSE 2023" review="ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam." />
          </div>

           <p className='la:text-4xl text-xl px-6 py-1 la:mt-16 text-white text-center rounded-md la:rounded-lg bg-extra-light-blue la:px-48 la:py-3'>300+ Selections in UPSC 2023</p>

           <div className='flex flex-col la:flex-row justify-between la:mt-20 la:mx-20'>
              <StudentCard img="/assets/Group 2.png" name="Raja Manjhi" air={1} batch="ECE" review="ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam.ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam." />
              <StudentCard img="/assets/Group 1.png" name="Prateek Kumar Khuntia" air={2} batch="UPSC ECE" review="ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam.ex soluta placeat culpa veniam maiores tempora recusandae dolores quasi voluptatem earum eaque distinctio porro ullam." />              
          </div>

          <p className='la:text-4xl text-xl px-6 py-1 la:mt-16 text-white text-center rounded-md la:rounded-lg bg-extra-light-blue la:px-48 la:py-3 mx-4'>8000+ PWians Qualified GATE 2024</p>

        </div>
      </div>

      <div>

      </div>
    </>
  )
}

export default HomeBanner9