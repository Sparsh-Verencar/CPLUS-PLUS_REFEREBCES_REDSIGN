import RefrenceCard from '../Components/RefrenceCard.jsx'
import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
      <div className='w-screen h-[10vh] text-white'> </div>
      <div className='w-screen h-screen text-white [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]
    grid grid-cols-6 gap-10 p-[5vw]'>
        <div className="col-span-2">
          <RefrenceCard title={'C library'} />
        </div>
        <div className="col-span-2">
          <RefrenceCard title={'Container'} />
        </div>
        <div className="col-span-2">
          <RefrenceCard title={'Input/Output'} />
        </div>
        <div className="col-start-2 col-span-2">
          <RefrenceCard title={'Multithreading'} />
        </div>
        <div className="col-span-2">
          <RefrenceCard title={'Others'} />
        </div>

      </div>
    </>
  )
}

export default About
