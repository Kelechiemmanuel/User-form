import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navigate = () => {
    const [isNavigate, setIsNavigate] = useState(true)
    return (
        <div>
            <ul className={`${isNavigate ? 'bg-amber-950' : 'bg-green-900'} flex justify-center items-center gap-10 py-10`}>
                <div className='text-white bg-blue-500'>
                    <Link to='/'>
                        {isNavigate ? 'DEMO' : '2ND DEMO'}
                    </Link>
                </div>
                <div>
                    <Link to='/demo3'>
                        {isNavigate ? '2ND DEMO' : 'DEMO'}
                    </Link>
                </div>
            </ul>
        </div>
    )
}

export default Navigate