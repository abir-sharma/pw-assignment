import React from 'react'
import HomeBanner1 from '../../components/homeBanners/HomeBanner1'
import HomeBanner2 from '../../components/homeBanners/HomeBanner2'
import HomeBanner3 from '../../components/homeBanners/HomeBanner3'
import HomeBanner4 from '../../components/homeBanners/HomeBanner4'
import HomeBanner5 from '../../components/homeBanners/HomeBanner5'
import HomeBanner6 from '../../components/homeBanners/HomeBanner6'
import HomeBanner7 from '../../components/homeBanners/HomeBanner7'
import HomeBanner8 from '../../components/homeBanners/HomeBanner8'
import HomeBanner9 from '../../components/homeBanners/HomeBanner9'
import HomeBanner10 from '../../components/homeBanners/HomeBanner10'

const data1=[
    {"desc":"Save Your Valuable time","img":"/assets/time.png"},
    {"desc":"Enhance your Effective Efficeincy","img":"/assets/Group 290110.png"},
    {"desc":"Organize your considerative studies","img":"/assets/Groupman.png"},
    {"desc":"Build your learning-peer-group","img":"/assets/Vector.png"}
  ]
  const data2=[
    {"desc":"G.S Classes","img":"/assets/Group 290019.png"},
    {"desc":"Optional Classes","img":"/assets/Group 290024.png"},
    {"desc":"CAST Classes","img":"/assets/Group 290020.png"},
    {"desc":"Daily Revision + Practice","img":"/assets/Group.png"},
    {"desc":"Personalized Mentorship","img":"/assets/Group 290026.png"},
    {"desc":"UPSC Comprehensive Books","img":"/assets/book.png"},

  ]
  const data3=[
    {"desc":"1200+ Hour Class","img":"/assets/Group 290096.png"},
    {"desc":"Gate Comprehensive Books","img":"/assets/Group 290095.png"},
    {"desc":"Personalized Mentorship","img":"/assets/Group 290094.png"},
    {"desc":"Subjectwise Mock Tests with Regular Feedback","img":"/assets/Group 290091.png"},
    {"desc":"Class Notes by Subject Experts","img":"/assets/Group 290092.png"},
    {"desc":"Recording will be available on app for allthe classes","img":"/assets/Group 290093.png"},

  ]
const Home = () => {
  return (
    <>
      <HomeBanner1 />
      <HomeBanner2 /> 
       <HomeBanner3 items={data1} /> 
       <HomeBanner4 items={data2} /> 
       <HomeBanner5 items={data3} /> 
       <HomeBanner6 /> 
       <HomeBanner7 /> 
       <HomeBanner8 /> 
       <HomeBanner9 /> 
       <HomeBanner10 /> 
    </>
  )
}

export default Home