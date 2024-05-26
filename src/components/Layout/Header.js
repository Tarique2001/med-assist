import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './logoresponsive.svg';
// import { useNavigate } from 'react-router-dom';
import profilePic from '../resources/profile-logo-placeholder-image.png'

export default function Header() {
    const [profilebtn,setprofilebtn]=useState('false');
    const handleclick=()=>{
        setprofilebtn(!profilebtn);
    }
    // const navigate = useNavigate();
    return (
        <>
            <nav className="bg-green-300 border-b-2 border-green-800 dark:border-black dark:bg-black md:h-[9vh] h-[8vh] md:sticky top-0 z-10 ">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-[1vh] z-10 ">
                    <Link to="/" className="flex items-center">
                        {/* <img src={logo} className="h-10 mr-3" alt="Medossier Logo" /> */}
                        <span className="self-center text-2xl text-green-950 font-semibold  dark:text-pink-400">MedAssist</span>
                    </Link>
                    <div className="flex flex-col dark:flex-col items-center md:order-2">
                        <button onClick={() => handleclick()} type="button" className="flex mr-3 text-sm bg-gray-100 dark:bg-gray-800 rounded-full md:mr-0 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom" >
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full " src={profilePic} alt='' />
                        </button>
                        {/* <!-- Dropdown menu --> */}
                        
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700">
                            <li className=' text-2xl text-pink-400'>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={` ${profilebtn?"hidden":""} md:w-full md:pl-[82vw] pl-[50vw] md:h-[10vh] w-[95vw] z-[100] bg-gray-100`}>
                        <div  className={`  z-50 md:w-[15vw]  text-base list-none  divide-y divide-white rounded-lg shadow  dark:divide-gray-200" id="user-dropdown dark:bg-LandingPageBK bg-green-100 border-green-400 dark:border-gray-700 border-2`} >
                            <div className="px-[3vw] z-50 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green1</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                            </div>
                            <ul className="py-2 z-50" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                </li>
                                <li>
                                    <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                </li>
                            </ul>
                        </div>
                </div>
            </nav>
        </>
    )
}

// {/* <div  className={` ${profilebtn?"hidden":""} md:hidden z-50 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown`} >
//                             <div className="px-4 z-50 py-3">
//                                 <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
//                                 <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
//                             </div>
//                             <ul className="py-2 my-1 z-50" aria-labelledby="user-menu-button">
//                                 <li>
//                                     <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
//                                 </li>
//                                 <li>
//                                     <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
//                                 </li>
//                                 <li>
//                                     <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
//                                 </li>
//                                 <li>
//                                     <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//                                 </li>
//                             </ul>
//                         </div> */}