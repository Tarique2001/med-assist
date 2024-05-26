import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
// import DoctorLogin from './DoctorLogin'
// import PatientLogin from './PatientLogin'


export default function LoginDisplay() {
    const navigate= useNavigate();
    return (<>
    <div className="flex md:flex-row flex-col justify-center items-center md:h-screen h-[90vh] relative dark:bg-LandingPageBK pb-[4vh] ">
        <div className=" flex flex-col h-[76vh] mx-[4vw] md:ml-[4vw] md:mr-[2vw] w-[84vw] flex-column justify-center items-center border-2 rounded-3xl mt-[4vh] md:mt-0 border-green-700 dark:border-none bg-green-200 shadow-2xl dark:shadow-none dark:bg-transparent">
        <h1 className='mt-[1vh] text-center dark:text-white text-green-800 text-3xl md:text-6xl'>For Doctors</h1>
        <p className=' text-xl dark:text-white text-green-800 text-center mt-[3vh] mb-[3vh] '>I am here to... <br /> Watch my patient's recovery</p>
        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 mb-[8vh] text-center  " onClick={()=>navigate('/doctorlogin')}> Login </button>
        </div>
        <div className=" flex flex-col h-[76vh] md:mr-[4vw] md:ml-[2vw] md:mt-0  w-[84vw] flex-column justify-center items-center border-2 rounded-3xl mt-[4vh] border-green-700 dark:border-none bg-green-200 shadow-2xl  dark:bg-transparent dark:shadow-none">
        <h1 className='mt-[1vh] text-center dark:text-white text-green-800 text-3xl md:text-6xl'>For Patients</h1>
        <p className=' text-xl text-green-800 dark:text-white text-center mt-[3vh] mb-[3vh] '>I am here to... <br /> see myself getting healthy</p>
        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 mb-[8vh] text-center  " onClick={()=>navigate('/patientlogin')}> Login </button>
        </div>
        </div>
        <Outlet/>
    </>
    )
}
// {/* <div className="px-80 m- sm:px-36 py-10 flex h-screen">
//         {/* <DoctorLogin/> */}
//         {/* <PatientLogin/> */}
//         {/* <h4 className="text-xl">otp system</h4> */}
//     </div> */}