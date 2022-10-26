import React, {Fragment, useState} from 'react'
import { Link} from 'react-scroll'
//import {TiThMenuOutline} from 'react-icons/ti'
//import {AiFillCloseCircle} from 'react-icons/ai'
import Logo from '../assets/logo4.jpg'
import {Menu, Transition} from '@headlessui/react'
//import {ChevronDownIcon} from '@heroicons/react/20/solid'
//import PropaneTankIcon from '@mui/icons-material/PropaneTank';
import Login from './Login'
import Signup from './Signup'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

   function Navbar() {
    const [showLogin, setShowLogin] = useState(false)
    const handleOnClose=()=>setShowLogin(false)

    const [showSignup, setShowSignup] = useState(false)
    const honClose=()=>setShowSignup(false)
//     const [nav,setNav] = useState(true)

//     const handleNav = ()=> {
//         setNav(!nav)
//     }
    
  return (
    <div className='border-b border-gray-300 items-center h-20 max-w-[1240px] mx-auto px-4 flex justify-between text-black'>
        
        <h1 className='flex w-full text-3xl font-bold text-[#00df9a] mt-4' >LPG<img className='w-[28px] cursor-pointer justify-between' src={Logo} alt="/" /></h1>
        
        <ul className='hidden md:flex'>
            <li className='p-4 cursor-pointer hover:text-green-300' >
            <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-green-300'>
            <Link to="charts" smooth={true} duration={500}>Charts</Link>
            </li>
            <li className='p-4 cursor-pointer hover:text-green-300'>
            <button onClick={()=>setShowLogin(true)} className='bg-green-400 hover:bg-green-600 hover:shadow-lg px-3 py-1 rounded cursor-pointer text-black'>LogIn</button></li>
            <li className='py-4 px-3 cursor-pointer hover:text-green-300'>
            <button onClick={()=>setShowSignup(true)} className='bg-gray-600 hover:bg-gray-900 hover:shadow-lg px-3 py-1 rounded cursor-pointer text-white'>SignUp</button></li>
            
            {/* <li className='p-4'>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="hover:text-green-300 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 ">
                        Members
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/1"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Mavene Omondi
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/1"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Caroline Wahu
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/2"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Risper Gitau
                                </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                            {({ active }) => (
                                <a
                                href="#/3"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                Collins Rotich
                                </a>
                            )}
                            </Menu.Item>
                            <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                <button
                                    type="submit"
                                    className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block w-full px-4 py-2 text-left text-sm'
                                    )}
                                >
                                    Brannigan Sakwah
                                </button>
                                )}
                            </Menu.Item>
                            </form>
                        </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </li> */}
            
        </ul>
        <div>
        <li className='p-4 block md:hidden'>
                
                <Menu as="div" className="relative inline-block text-left">
                <Menu.Button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"> 
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                </Menu.Button>
                    <Transition 
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                            <Menu.Items className="absolute left-[-50px] z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-200 shadow-lg focus:outline-none">
                            <div className="py-1 ">
                                <Link to="home" smooth={true} duration={500}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#/1"
                                        className={classNames(
                                            active ? 'bg-gray-400 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-bold border-b-4 hover:text-green-300'
                                        )}
                                        >
                                        HOME
                                        </a>
                                    )}
                                </Menu.Item>
                                </Link>
                                <Link to="charts" smooth={true} duration={500}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                        href="#/1"
                                        className={classNames(
                                            active ? 'bg-gray-400 text-gray-900' : 'text-gray-700',
                                            'block px-4 py-2 text-sm-bold hover:text-green-300'
                                        )}
                                        >
                                        CHARTS
                                        </a>
                                    )}
                                </Menu.Item>
                                </Link>
                            </div>
                            </Menu.Items>
                    </Transition>
                </Menu>
            </li>                          
        </div>
        {/* <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiFillCloseCircle size={20}/>:<TiThMenuOutline size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#fefefe] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] pl-5 pt-5' >LPG</h1>
            <ul className=' uppercase p-4'>
                <li className='p-4 border-b border-t border-gray-300'>Home</li>
                <li className='p-4'>Charts</li>
            </ul>
        </div> */}
    <Login onClose={handleOnClose} visible={showLogin}/>
    <Signup onClose={honClose} visible={showSignup}/>
    </div>
    
  )
}

export default Navbar