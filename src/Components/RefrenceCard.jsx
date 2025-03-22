import React from 'react'

const RefrenceCard = ({title}) => {
  return (
    <div className='w-full h-full bg-gray-900 rounded-4xl text-white text-5xl  shadow-lg shadow-blue-600 flex items-center justify-center'>
      <h1 className='text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-white'>
          {title}
          </h1>
    </div>
  )
}

export default RefrenceCard
