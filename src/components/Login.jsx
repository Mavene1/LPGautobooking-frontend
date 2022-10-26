import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import { Link} from 'react-scroll'

function Login({visible, onClose}) {
    if (!visible) return null;

    const handleOnClose=(e)=>{
        if (e.target.id==="container")onClose()
    }

  return (
    <div name='Login' id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-4 rounded w-150 md:w-[400px]'>
        <h2 className='text-4xl font-bold text-center py-4'>LPG</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
                <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
            </div>
            <div className='flex flex-col '>
                <label>Password</label>
                <input className='border relative bg-gray-100 p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-green-600 hover:bg-green-500 relative text-white'>Log In</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
            <p className='text-center mt-8'>Not a member?<Link to="Signup" smooth={true} duration={500} className='p-2 cursor-pointer hover:text-green-300 underline'>SignUp</Link>now</p>
        </div>
    </div>
  )
}

export default Login