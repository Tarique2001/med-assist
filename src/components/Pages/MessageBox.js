import React from 'react'
import img1 from '../resources/fotor_2023-4-6_14_33_25.png'
const MessageBox = () => {
  return (
    <li>
      <a href="/" className="items-center flex flex-row sm:flex mb-[1vh] hover:bg-green-200 border dark:border-none rounded-lg md:p-[1vh] hover:border-green-400 dark:hover:bg-zinc-900">
        <div className='md:pb-0 sm:pb-[10vh] h-[6vh] sm:w-[3vw] md:w-[2.3vw] w-[8vw] mr-[1vw] md:mr-0'>
          <img className="md:w-[4vh] w-[4vh] h-[4vh] mr-[0.5vw] rounded-full sm:mb-0" src={img1} alt="Jese Leos" />
        </div>
        <div className="text-gray-600 flex flex-col dark:text-gray-400">
          <div className="text-base font-normal w-full"><span className="font-medium text-gray-900 dark:text-white">User Name</span>
            <span className="font-medium text-gray-900 dark:text-white">Thomas Lean's</span></div>
          <span className="inline-flex items-center font-normal text-gray-500 dark:text-gray-400">
            message body
          </span>
        </div>
      </a>
    </li>
  )
}

export default MessageBox
