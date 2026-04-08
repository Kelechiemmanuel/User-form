import React from 'react'
import { useState } from 'react'

export const Demo3 = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    return (
        <div className='flex justify-center items-center h-full bg-gray-400'>
            <div className='relative w-200 h-125 shadow-2xl flex overflow-hidden bg-white'>
                <div className={`${isSignIn ? 'translate-x-0' : 'translate-x-full'} w-[50%] p-10 flex flex-col justify-center items-center gap-5  transition-all duration-500 text-center`}>
                    <h1 >
                        {isSignIn ? 'Create Account' : 'Login'}
                    </h1>

                    {isSignIn && (
                        <div className='w-full relative'>
                            <input type="text" placeholder='Full Name' className='border-2 border-gray-400 rounded-md py-2 px-3 outline-none w-full' />
                        </div>
                    )}
                    <div className='w-full relative'>
                        <input type="email" placeholder='Email Address' className='border-2 border-gray-400 rounded-md py-2 px-3 outline-none w-full' />
                    </div>
                    <div className='w-full relative'>
                        <input type="password" placeholder='password' className='border-2 border-gray-400 rounded-md py-2 px-3 outline-none w-full' />
                    </div>
                    <div className='w-full relative'>
                    <button className='w-full border-2 border-gray-400 rounded-md py-2 cursor-pointer'>
                        {isSignIn ? 'Sign Up' : 'Login'}
                    </button>
                    </div>
                </div>

                <div className={`${isSignIn ? 'translate-x-0' : '-translate-x-full'} bg-amber-400 absolute flex justify-center flex-col text-white items-center gap-5 top-0 right-0 w-[50%] h-full  transition-all duration-500`}>
                    <h1>
                        {isSignIn ? 'Welcome Back' : 'Hello Friends'}
                    </h1>
                    <p>
                        {isSignIn ? 'Already have an account?' : "Don't have an account"}
                    </p>
                    <div>
                        <button onClick={() => setIsSignIn(!isSignIn)} className='border border-white px-6 py-2 rounded-md cursor-pointer'>
                            {isSignIn ? 'Login' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
