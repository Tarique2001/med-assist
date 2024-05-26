import React from 'react'
import img1 from '../resources/Medlogo.png'
import img2 from '../resources/analysis (1).jpg'

const PostItem = () => {
  return (
    <li className='mb-[1vh] border  dark:border-pink-900  py-[1.5vw] px-[1vw] md:p-[1.5vh] rounded-md'>
      <a href="/" className="items-center flex  flex-row sm:flex mb-[1vh] hover:bg-green-200 rounded-lg dark:hover:bg-zinc-900">
        <div className='md:pb-0 sm:pb-[10vh] h-[6vh] sm:w-[3vw] md:w-[2.3vw] w-[8vw] mr-[1vw] md:mr-0'>
          <img className="md:w-[4vh] w-[4vh] h-[4vh] mr-[0.5vw] rounded-full sm:mb-0" src={img1} alt="Jese Leos" />
        </div>
        <div className="text-gray-600 flex flex-col dark:text-gray-400">
          <div className="text-base font-normal w-full"><span className="font-medium text-gray-900 dark:text-white">User Name</span></div>
          <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
            Patient/Doctor-specialization
          </span>
        </div>
      </a>
      <div className="text-sm font-normal px-[4vw] mx-auto dark:text-white">I wanted to share a webinar zeroheight.<span className="font-medium text-gray-900 dark:text-white"> Mentioned Name</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>
        <img className="md:w-full w-[95vw] h-[vh] mx-[0.5vw] rounded-lg sm:mb-0" src={img2} alt="Jese Leos" />
      </div>
      <div className='grid grid-cols-3 place-items-center text-green-800 dark:text-pink-400 mx-auto w-5/6  py-[1vh] '>
        {/* like */}
        <button>
          <svg className="w-6 h-7 md:w-8 md:h-9 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.15" fillRule="evenodd" clipRule="evenodd" d="M8 10V20H17.3604C18.3138 20 19.1346 19.3271 19.3216 18.3922L20.5216 12.3922C20.7691 11.1547 19.8225 10 18.5604 10H14L16.4258 6.36138C17.1929 5.2106 16.5885 3.64714 15.2467 3.31169L15.1992 3.2998C14.4642 3.11607 13.6886 3.36333 13.1956 3.9385L8 10Z" fill="none" />
            <path d="M8 10V20M8 10L4 9.99998V20L8 20M8 10L13.1956 3.93847C13.6886 3.3633 14.4642 3.11604 15.1992 3.29977L15.2467 3.31166C16.5885 3.64711 17.1929 5.21057 16.4258 6.36135L14 9.99998H18.5604C19.8225 9.99998 20.7691 11.1546 20.5216 12.3922L19.3216 18.3922C19.1346 19.3271 18.3138 20 17.3604 20L8 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button>
          {/* comment */}
          <svg className="w-6 h-7 md:w-8 md:h-9" fill="none" stroke="currentColor" strokeWidth="1.91px" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1</style></defs><path className="cls-1" d="M1.5,5.3v9.54a3.82,3.82,0,0,0,3.82,3.82H7.23v2.86L13,18.66h5.73a3.82,3.82,0,0,0,3.82-3.82V5.3a3.82,3.82,0,0,0-3.82-3.82H5.32A3.82,3.82,0,0,0,1.5,5.3Z" /><line className="cls-1" x1="15.82" y1="10.07" x2="17.73" y2="10.07" /><line className="cls-1" x1="11.05" y1="10.07" x2="12.95" y2="10.07" /><line className="cls-1" x1="6.27" y1="10.07" x2="8.18" y2="10.07" /></svg>
        </button>
        <button>
          {/* bookmark */}
          <svg className="w-6 h-7 md:w-8 md:h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.75 5H8.25C7.55964 5 7 5.58763 7 6.3125V19L12 15.5L17 19V6.3125C17 5.58763 16.4404 5 15.75 5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </li>
  )
}

export default PostItem
