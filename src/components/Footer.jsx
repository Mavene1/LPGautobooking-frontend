import React from 'react'
import {FaDribbble, FaFacebook, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'
import Logo from '../assets/image.jpg'

function Footer() {
  return (
    <div className='bg-black w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='mt-3 flex w-full text-3xl font-bold text-[#00df9a]'>LPG<img className='w-[28px] justify-between' src={Logo} alt="/" /></h1>
            <p className='py-4'>Our solution aims to solve the problem of how to measure the remaining LPG cylinder levels and notifies the user when it is depleted; and allows the user to remotely book a new cylinder for door-delivery.</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaGithub size={30}/>
                <FaDribbble size={30}/>
                <FaFacebook size={30}/>
                <FaTwitter size={30}/>
                <FaInstagram size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 mt-6 flex justify-between mx-20'>
        <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Marketing</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insights</li>
                </ul>
            </div>
            
            
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blog</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul></div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer