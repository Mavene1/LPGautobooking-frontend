import React, {useState} from 'react'
import lpg from '../assets/lpg.jpg'
import Form from './Form';

function Hero({token}) {
  const [showForm, setShowForm] = useState(false)

  const handleOnClose=()=>setShowForm(false)

  return (
    <div name='hero' className='text-black'>
        <div className='max-w-[1240px] grid md:grid-cols-2 pt-0 w-full h-screen mx-auto'>
            <img className='justify-center w-[300px] md:w-[500px] mx-auto my-2' src={lpg} alt="/" />
            <div className='md:pt-20 flex flex-col'>
                <p className='text-[#00df9a] m-2 font-bold uppercase'>LPG Cylinder Level Monitoring and Autobooking System</p>
                <h1 className='m-2 md:text-3xl sm:text-2xl text-xl font-bold'>Monitor Your Gas Remotely and Book instantly</h1>
                <p className='m-2'>Our solution aims to solve the problem of how to measure the remaining LPG cylinder levels and notifies the user when it is depleted; and allows the user to remotely book a new cylinder for door-delivery. </p>
                <p className='pb-2 m-2 font-bold'> Are You Out of Gas? Then fear no more because we are here for you!</p>
                <button onClick={()=>setShowForm(true)} type="button" className=" w-[150px] mb-6 inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out mx-auto md:mx-0 ">Book Now</button>
            </div>
        </div>
        <Form onClose={handleOnClose} visible={showForm} token={token}/>
    </div>
  )
}

export default Hero