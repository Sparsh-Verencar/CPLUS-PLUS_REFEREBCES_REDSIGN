import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ title, to, img }) => {
    return (
        <Link to={to}>
            <div className="w-full h-full bg-gray-900 rounded-4xl flex flex-col items-center justify-center text-white text-5xl  shadow-lg shadow-blue-600">
                <img src={img} className='w-[20vw] h-[30vh] bg-white rounded-3xl' />
                <h1 className='text-transparent bg-clip-text bg-gradient-to-t from-gray-600 to-white'>
                    {title}

                </h1>

            </div>
        </Link>
    )
}

export default Card
