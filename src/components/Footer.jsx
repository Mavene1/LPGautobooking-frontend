import React from 'react'
import {FaDribbble, FaFacebook, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>LPG</h1>
            <p className='py-4'>The transformation to a data-driven company often starts with enterprise data management. After all, this first step is often the biggest challenge. As a basis for a smooth start and also as a foundation for the entire life cycle of all data projects, a long-term and future-proof data management strategy helps to avoid mistakes and unnecessary costs.</p>
            <div className='flex md:w-[75%] my-6 justify-between'>
                <FaDribbble size={30}/>
                <FaFacebook size={30}/>
                <FaGithub size={30}/>
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