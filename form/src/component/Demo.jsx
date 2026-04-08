import { useState } from "react"

const Demo = () => {
const [isSignup, setIsSignup] = useState(true)
return (
<div>
<div className='flex justify-center items-center bg-[#94a3b8] h-screen'>
<div className='relative w-200 h-125 bg-white shadow-2xl overflow-hidden flex'>

    {/* LEFT SIDE (FORM) */}
    <div className={`w-[50%] p-10 flex flex-col justify-center items-center gap-6 transition-all duration-500 ${isSignup ? 'translate-x-0' : 'translate-x-full'}`}>

        <h1 className='text-2xl font-bold'>
            {isSignup ? 'Create Account' : 'Login'}
        </h1>

        {/* Full Name (only signup) */}
        {isSignup && (
            <div className='relative w-full'>
                <input type="text" placeholder=" " className='peer w-full border-2 border-gray-400 rounded-md py-2 px-3 outline-none focus:border-blue-500' />
                <span className='absolute left-3 top-2 text-gray-400 transition-all duration-200 bg-white px-1
peer-placeholder-shown:top-2
peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>
                    Full Name
                </span>
            </div>
        )}

        {/* Email */}
        <div className='relative w-full'>
            <input type="email" placeholder=" " className='peer w-full border-2 border-gray-400 rounded-md py-2 px-3 outline-none focus:border-blue-500' />
            <span className='absolute left-3 top-2 text-gray-400 transition-all duration-200 bg-white px-1
peer-placeholder-shown:top-2
peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>
                Email
            </span>
        </div>

        {/* Password */}
        <div className='relative w-full'>
            <input type="password" placeholder=" " className='peer w-full border-2 border-gray-400 rounded-md py-2 px-3 outline-none focus:border-blue-500' />
            <span className='absolute left-3 top-2 text-gray-400 transition-all duration-200 bg-white px-1
peer-placeholder-shown:top-2
peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-500'>
                Password
            </span>
        </div>

        <button className='w-full bg-blue-500 text-white py-2 rounded-md'>
            {isSignup ? 'Sign Up' : 'Login'}
        </button>
    </div>

    {/* RIGHT PANEL */}
    <div className={`absolute top-0 right-0 w-[50%] h-full bg-blue-500 text-white flex flex-col justify-center items-center gap-6 transition-all duration-500 ${isSignup ? 'translate-x-0' : '-translate-x-full'}`}>

        <h1 className='text-2xl font-bold'>
            {isSignup ? 'Welcome Back!' : 'Hello, Friend!'}
        </h1>

        <p>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
        </p>

        <button
            onClick={() => setIsSignup(!isSignup)}
            className='border border-white px-6 py-2 rounded-md'
        >
            {isSignup ? 'Login' : 'Sign Up'}
        </button>
    </div>

</div>
</div>
</div>
)
}

export default Demo