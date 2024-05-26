import React from 'react';
import img from '../resources/Medo1.png';
import img2 from '../resources/medo2.png';
import img3 from '../resources/medo3.png';
import img4 from '../resources/medo4.png';
import img5 from '../resources/medo5.png';
import img6 from '../resources/medo6.png';
import dark1 from '../resources/darkmedo1.png';
import dark2 from '../resources/darkmedo2.png';
import dark3 from '../resources/darkmedo3.png';
import dark4 from '../resources/darkmedo4.png';
import dark5 from '../resources/darkmedo5.png';
import dark6 from '../resources/darkmedo6.png';
// import LoginDisplay from '../Pages/LoginDisplay';
import {  useNavigate } from 'react-router-dom';
// import Crousel from './Crousel'


// all india medical council data
export default function Body() {
    const navigate = useNavigate();
    return (<>
    <div className=' bg-green-100 dark:bg-LandingPageBK dark:w-full overflow-hidden '>
        <div className='md:mx-[20vw] md:w-3/5 w-5/6 mx-auto mb-[15vh] h-[70vh] md:h-[85vh] flex-column justify-center border-2 rounded-3xl mt-[4vh] border-green-700 dark:border-none bg-green-200 shadow-2xl  dark:bg-transparent'>
        <h1 className="text-center md:text-4xl sm:text-5xl lg:text-6xl text-green-700 dark:text-white md:h-[70vh] h-[55vh] w-full justify-center align-middle m-auto p-10">Secure your medical history<br />Analyse Reports</h1>
        <div className=" flex justify-center">
        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 mb-[8vh] text-center " onClick={()=>navigate('/login')}>Get Started </button>
        </div>
        </div>
        <div className='mt-[4vh]'>
            <div className="flex justify-center my-[2vh] md:h-[60vh] md:relative left-[25vw] ">
                <img src={img} alt="1" className='dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl ' />
                <img src={dark1} alt="1" className='invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[28vh] rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[25vw] ">
                <img src={img2} alt="2" className='dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl  ' />
                <img src={dark2} alt="2" className=' invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[25vh] rounded-xl ' />
            </div>
            <div className="flex justify-center my-[2vh] md:h-[60vh] md:relative left-[25vw] ">
                <img src={img3} alt="3" className='  dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl   '/>
                <img src={dark3} alt="3" className=' invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[25vh] rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[25vw] ">
                <img src={img4} alt="4" className='dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl '/>
                <img src={dark4} alt="4" className=' invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[25vh] rounded-xl ' />
            </div>
            <div className="flex justify-center my-[2vh] md:h-[60vh] md:relative left-[25vw] ">
                <img src={img5} alt="5" className=' dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl  '/>
                <img src={dark5} alt="5" className=' invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[25vh] rounded-xl ' />
            </div>
            <div className="flex justify-center my-[1vh] md:h-[60vh] md:relative right-[25vw] ">
                <img src={img6} alt="6" className=' dark:hidden md:h-[53vh]  w-[95vw] md:w-[45vw] h-[22vh] rounded-xl  '/>
                <img src={dark6} alt="6" className=' invisible dark:visible dark:md:h-[53vh]  dark:w-[95vw] dark:md:w-[45vw] h-0 w-0 dark:h-[25vh] rounded-xl ' />
            </div>
        </div>
        {/* <LoginDisplay/> */}
    </div>
    </>
    )
}
