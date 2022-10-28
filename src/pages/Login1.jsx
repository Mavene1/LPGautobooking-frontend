import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook} from 'react-icons/ai'
import loginImg from '../assets/trees.jpg'
import { Link } from 'react-router-dom'
import { Checkbox } from "@material-tailwind/react";

export default function Login1() {
  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
        <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />
    
        <div className='flex justify-center items-center h-full'>
            <div className='bg-white p-4 rounded-md w-[350px] md:w-[400px]'>
            <h2 className='text-4xl font-bold text-center py-4'>LPG</h2>
                <div className='flex justify-between py-8'>
                    <p className='border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full'><AiFillFacebook className='mr-2' /> Facebook</p>
                    <p className='border shadow-lg hover:shadow-xl px-4 py-1 relative flex items-center rounded-full'><FcGoogle className='mr-2' /> Google</p>
                </div>
                <div className='flex flex-col mb-4'>
                    <label>Username</label>
                    <input className='border relative bg-gray-100 p-[4px]' type="text" />
                </div>
                <div className='flex flex-col '>
                    <label>Password</label>
                    <input className='border relative bg-gray-100 p-[4px]' type="password" />
                </div>
                <Link to='/home'><button className='w-full py-2 mt-6 mb-2 bg-green-600 hover:bg-green-500 relative text-white rounded-full'>Log In</button></Link>
                <div>
                    <Checkbox label="Remember Me" className='mt-0'/>
                    <div className='flex items-center justify-between'>
                        <p className='ml-[117px] md:ml-[169px]'>Not a Member? Then</p><Link to='/signup1'><button className='w-[60px] mt-0 py-1 relative text-black rounded-full bg-white underline'>Sign Up!</button></Link>
                </div></div>
            </div>
        </div>
    </div>
  )
}