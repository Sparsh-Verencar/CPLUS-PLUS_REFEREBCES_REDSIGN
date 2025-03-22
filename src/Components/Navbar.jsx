import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import Logo from '../assets/C++_Logo.svg';
import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='fixed flex justify-between items-center w-screen h-[10vh] bg-[#060606] shadow-2xl shadow-blue-950'>
                <Link to={"/"}>
                    <img className='w-14 h-14 mx-[1vw]' src={Logo} alt="logo" />
                    
                    
                </Link>
                <input className='bg-gray-900 rounded-full  w-[40vw] text-amber-50 px-5 py-2'
                    type="search"
                    placeholder='Search' />


                <div className='mx-[1vw]'>
                    <SignedOut>
                        <button className=' rounded-2xl bg-gray-900 border-2 border-yellow-50 p-3 text-white '>
                            <SignInButton />
                        </button>
                    </SignedOut>
                    <SignedIn>
                        <button className='text-amber-50'>
                            <UserButton />
                        </button>
                    </SignedIn>
                </div>
            </div>
        </>
    )
}

export default Navbar