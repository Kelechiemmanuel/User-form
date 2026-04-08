import { useState } from "react"

const Demo1 = () => {
    const [isLogin, setIsLogin] = useState(true)
  return (
    <div>
              <div className='flex justify-center items-center h-full'>
        <div className='flex overflow-hidden w-200 h-125 justify-center items-center relative'>
          <div className={`${isLogin ? 'translate-x-0' : 'translate-x-full'} flex justify-center item flex-col`}>
            <h1>
              {isLogin ? 'Login' : 'Sign Up'}
            </h1>

            {isLogin && (
              <div className='relative w-full'>
                <input type="text" placeholder="Name" className='w-full border-2 border-blue-400 rounded-md py-2 px-3 outline-none ' />
              </div>
            )}
            <div className='relative w-full'>
              <input type="email" placeholder="Email" className='w-full border-2 border-blue-400 rounded-md py-2 px-3 outline-none ' />
            </div>
            <div className='relative w-full'>
              <input type="password" placeholder="password" className='w-full border-2 border-blue-400 rounded-md py-2 px-3 outline-none ' />
            </div>
            <button className='relative w-full bg-blue-500'>
              {isLogin ? 'Login' : 'Sign up'}
            </button>
          </div>

          <div className={`text-white ${isLogin ? 'translate-x-0' : '-translate-x-full'}`}>
            <h1>
              {isLogin ? 'Welcome Back' : 'Hello, friends'}
            </h1>
            <p>
              {isLogin ? 'Already have an Account' : "don't have account"}
            </p>
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo1