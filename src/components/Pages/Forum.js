import React from 'react'
// import img1 from '../resources/Medlogo.png'
// import img2 from '../resources/analysis (1).jpg'
import MessageBox from './MessageBox'
import NewsItem from './NewsItem'
import QueryHistoryItem from './QueryHistoryItem'
import PostItem from './PostItem'

export default function Forum() {
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-black sticky top-0 z-10">
                <div className=" flex flex-wrap items-center justify-between p-[1vw]">
                    {/* <h1 className="text-xl ml-10 text-green-800 dark:text-pink-400">
                        Forum
                    </h1> */}
                    <button type="button" className=" md:hidden w-[23vw] text-white bg-gradient-to-r justify-center items-center from-green-600 to-green-400 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-1.5  text-center " >
                        <svg className=" mx-auto w-6 h-7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.598 392.598" >
                            <g>
                                <path fill="#FFFFFF" d="M288,205.285c-45.576,0-82.747,37.107-82.747,82.747c0,45.576,37.107,82.747,82.747,82.747
                                s82.747-37.107,82.747-82.747C370.747,242.457,333.576,205.285,288,205.285z"/>
                                <path fill="#FFFFFF" d="M227.232,203.087V31.58c0-5.301-4.331-9.632-9.632-9.632H85.592v52.945
                                c0,6.012-4.848,10.925-10.925,10.925H21.786v199.693c0,5.301,4.331,9.632,9.632,9.632h152.307
                                c-0.129-2.327-0.388-4.655-0.388-7.046C183.467,252.994,200.727,222.093,227.232,203.087z"/>
                            </g>
                            <path fill="#ffffff" d="M88.242,43.604L43.572,88.275v184.889h118.82c3.62-31.418,18.941-60.186,42.99-80.808V43.604H88.242z
                            "/>
                            <path fill="#ffffff" d="M288,348.929c-33.616,0-60.962-27.345-60.962-60.962s27.345-60.962,60.962-60.962
                            s60.962,27.345,60.962,60.962S321.616,348.929,288,348.929z"/>
                            <g>
                                <path fill="#111827" d="M182.691,82.457h-61.802c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h61.802c6.012,0,10.925,4.848,10.925,10.925C193.551,77.608,188.703,82.457,182.691,82.457z"/>
                                <path fill="#111827" d="M182.691,140.444H66.392c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h116.299c6.012,0,10.925,4.848,10.925,10.925C193.551,135.531,188.703,140.444,182.691,140.444z"/>
                                <path fill="#111827" d="M182.691,197.915H66.392c-6.012,0-10.925-4.848-10.925-10.925s4.848-10.925,10.925-10.925h116.299
                                c6.012,0,10.925,4.848,10.925,10.925S188.703,197.915,182.691,197.915z"/>
                                <path fill="#111827" d="M154.246,255.386H66.392c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h87.855c6.012,0,10.925,4.848,10.925,10.925C165.107,250.537,160.259,255.386,154.246,255.386z"/>
                                <path fill="#111827" d="M362.99,215.37l20.687-20.558c4.267-4.267,4.331-11.119,0.065-15.451
                                c-4.267-4.267-11.119-4.331-15.451-0.065l-22.044,21.915c-13.834-9.374-29.996-15.386-47.451-17.131v-14.739h4.655
                                c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925h-31.16c-6.012,0-10.925,4.848-10.925,10.925
                                c0,6.012,4.848,10.925,10.925,10.925h4.655v14.675c-9.826,1.034-19.265,3.491-28.057,7.046V31.58
                                c0.129-17.39-13.964-31.547-31.354-31.547H83.2c-8.339,0-16.291,3.232-22.238,9.18L9.18,60.994C3.232,66.941,0,74.893,0,83.232
                                v202.085c0,17.39,14.158,31.547,31.547,31.547h156.121c12.606,43.636,52.752,75.701,100.396,75.701
                                c57.665,0,104.533-46.933,104.533-104.533C392.533,259.846,381.285,234.246,362.99,215.37z M63.806,37.269v26.57h-26.57
                                L63.806,37.269z M31.547,295.079c-5.301,0-9.632-4.331-9.632-9.632V85.689h52.945c6.012,0,10.925-4.848,10.925-10.925V21.818
                                h131.879c5.301,0,9.632,4.331,9.632,9.632v171.572c-26.505,19.006-43.83,49.907-43.83,84.945c0,2.392,0.259,4.719,0.388,7.046
                                H31.547V295.079z M288,370.78c-45.576,0-82.747-37.107-82.747-82.747c0-45.576,37.107-82.747,82.747-82.747
                                s82.747,37.107,82.747,82.747C370.747,333.608,333.576,370.78,288,370.78z"/>
                            </g>
                            <polygon fill="#56ACE0" points="37.236,63.838 63.806,63.838 63.806,37.269 " />
                            <path fill="#111827" d="M288,217.503c-6.012,0-10.925,4.848-10.925,10.925v59.669c0,6.012,4.848,10.925,10.925,10.925
                            c6.012,0,10.925-4.848,10.925-10.925v-59.669C298.861,222.352,294.012,217.503,288,217.503z"/>
                        </svg>
                    </button>
                    <button type="button" className="md:hidden w-[23vw] text-white bg-gradient-to-r justify-center items-center from-green-600 to-green-400 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-1.5  text-center " >
                        <svg className=" mx-auto w-6 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <button type="button" className="md:hidden w-[23vw] text-white bg-gradient-to-r justify-center items-center from-green-600 to-green-400 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-1.5  text-center " >
                        <svg className=" mx-auto w-8 h-7" fill="#ffffff" stroke="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M344.854 687.167c26.725 56.8 66.665 111.099 118.91 161.654-109.515-16.445-200.574-83.285-250.026-175.73l131.114 14.076zM461.776 177.924c-106.691 16.718-195.535 81.185-245.233 170.432l128.342-12.64c26.395-55.654 65.729-108.624 116.89-157.793zM502.016 337.406l1.78-163.191h-0.362c-57.402 50.103-101.083 104.341-130.194 161.745l128.774 1.45zM224.829 388.081l-23.709-0.211-23.439-0.304-1.84 169.497-94.898-170.523-52.909-0.575-2.593 241.198 23.589 0.331 23.468 0.211 1.871-173.871 97.645 174.957 50.256 0.575 2.564-241.289zM450.373 433.36l0.211-21.506 0.271-21.357-177.611-1.9-2.593 241.289 183.132 1.93 0.241-21.446 0.211-21.387-132.697-1.418 0.663-62.954 117.977 1.266 0.211-20.694 0.211-20.814-117.977-1.238 0.575-51.161 127.175 1.387zM691.15 568.256l-33.060-175.501-53.664-0.635-36.349 176.255-38.43-177.009-52.397-0.603 64.553 242.012 23.922 0.241 23.981 0.304 39.907-189.616 36.711 190.401 24.071 0.331 23.889 0.241 69.742-240.566-50.949-0.544-41.929 174.687zM529.708 174.514h-0.362l-1.748 163.162 128.866 1.359c-27.932-58.038-70.404-113.18-126.754-164.521zM804.932 340.603c-53.633-89.519-145.152-151.602-251.828-164.202 68.335 52.922 106.493 106.707 131.741 162.933l120.086 1.266zM554.925 849.786c109.455-14.028 201.386-78.448 252.927-168.876l-130.547 9.845c-27.963 56.197-69.108 109.589-122.378 159.030zM648.738 690.455l-124.914-1.359-1.69 155.833c54.961-47.872 97.462-99.846 126.602-154.475zM981.396 521.109c-11.763-10.407-35.052-19.757-70.074-27.873-24.132-5.791-39.907-10.528-47.267-14.629-7.513-3.953-11.283-9.593-11.191-16.861 0.061-9.923 3.771-17.979 11.101-23.5 7.209-5.34 17.283-8.084 30.044-7.904 14.781 0.121 26.725 3.682 35.867 10.407 9.079 6.788 13.998 15.867 14.721 27.391l49.077 0.603c-1.569-24.282-10.769-43.469-27.6-57.887-16.741-14.419-38.703-21.748-65.729-22.020-28.837-0.331-51.852 6.335-68.956 19.728-17.073 13.546-25.73 32.246-25.973 55.535-0.211 20.905 6.004 36.349 18.642 46.393 12.819 9.984 38.338 19.517 76.469 28.415 20.753 4.827 34.238 9.562 40.572 13.786 6.395 4.346 9.593 10.979 9.502 20.151-0.090 9.199-4.705 16.259-13.786 21.387-9.109 5.068-21.628 7.54-37.766 7.359-15.596-0.181-27.813-3.71-36.439-10.738-8.746-6.91-13.212-16.711-13.634-29.652l-48.534-0.512c0.875 26.063 9.895 46.213 26.908 60.511 17.043 14.419 40.844 21.689 71.278 21.989 30.495 0.304 54.598-5.942 72.578-19.154 18.038-13.151 27.088-30.979 27.328-53.664 0.362-22.503-5.429-38.974-17.134-49.26zM496.586 844.508l1.69-155.651-124.914-1.359c28.053 55.201 69.348 108.050 123.223 157.009z" /></svg>
                    </button>
                    <button type="button" className="md:hidden w-[23vw] text-white bg-gradient-to-r justify-center items-center from-green-600 to-green-400 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-1.5  text-center " >
                        <svg className=" mx-auto w-6 h-7" fill="currentColor" stroke="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg " xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" >
                            <g>
                                <g>
                                    <path d="M437.073,118.634V43.707H0v349.659h74.927v74.927H512V118.634H437.073z M437.073,156.098h35.468l-35.468,33.251V156.098z
                                    M397.615,81.171L218.537,249.056L39.46,81.171H397.615z M37.463,355.902v-225.25l181.073,169.757L399.61,130.652v225.25H37.463z
                                    M474.537,430.829H112.39v-37.463h324.683V240.7l37.463-35.122V430.829z"/>
                                </g>
                            </g>
                        </svg>
                    </button>
                    {/* Search Bar */}
                    <div className="hidden items-center justify-between w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className=" flex flex-col font-medium p-[1vw] md:p-0  rounded-lg md:flex-row  md:mt-0 md:border-0 md:bg-white md:dark:bg-black ">
                            <li className=' text-2xl text-green-800 dark:text-pink-400'>
                                <form className="flex items-center ">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative ml-[1vw] md:ml-0 md:w-[30vw] w-full">
                                        <div className="absolute inset-y-0 left-0 flex items-center pl-[1vh] pointer-events-none ">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <input type="text" id="simple-search" className="bg-gray-50 md:text-base border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-LandingPageBK dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Users, #hastags... " />
                                    </div>
                                    <button type="button" className="text-white bg-gradient-to-r justify-center items-center from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-2.5 ml-2 text-center " >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                        <span className="sr-only">Search </span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* query +feed+ news+ message all sections */}
            <div className="flex flex-row dark:bg-LandingPageBK">
                {/* query section */}
                <div className=' md:flex md:flex-col hidden md:w-1/4 sticky top-[11vh] px-[1.5vw] py-[1.5vh] mx-[0.5vw] h-1/2 border border-green-800 rounded-lg dark:bg-LandingPageBK dark:border-pink-500'>
                    <div className='flex flex-row h-[5vh] justify-center items-center bg-green-200 dark:bg-LandingPageBK border rounded-lg dark:border-none border-green-600'>
                        <div className='ml-[2vw]'>
                            <svg className="w-6 h-7" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.598 392.598" >
                                <g>
                                    <path fill="#FFFFFF" d="M288,205.285c-45.576,0-82.747,37.107-82.747,82.747c0,45.576,37.107,82.747,82.747,82.747
                                s82.747-37.107,82.747-82.747C370.747,242.457,333.576,205.285,288,205.285z"/>
                                    <path fill="#FFFFFF" d="M227.232,203.087V31.58c0-5.301-4.331-9.632-9.632-9.632H85.592v52.945
                                c0,6.012-4.848,10.925-10.925,10.925H21.786v199.693c0,5.301,4.331,9.632,9.632,9.632h152.307
                                c-0.129-2.327-0.388-4.655-0.388-7.046C183.467,252.994,200.727,222.093,227.232,203.087z"/>
                                </g>
                                <path fill="#ffffff" d="M88.242,43.604L43.572,88.275v184.889h118.82c3.62-31.418,18.941-60.186,42.99-80.808V43.604H88.242z
                            "/>
                                <path fill="#ffffff" d="M288,348.929c-33.616,0-60.962-27.345-60.962-60.962s27.345-60.962,60.962-60.962
                            s60.962,27.345,60.962,60.962S321.616,348.929,288,348.929z"/>
                                <g>
                                    <path fill="#111827" d="M182.691,82.457h-61.802c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h61.802c6.012,0,10.925,4.848,10.925,10.925C193.551,77.608,188.703,82.457,182.691,82.457z"/>
                                    <path fill="#111827" d="M182.691,140.444H66.392c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h116.299c6.012,0,10.925,4.848,10.925,10.925C193.551,135.531,188.703,140.444,182.691,140.444z"/>
                                    <path fill="#111827" d="M182.691,197.915H66.392c-6.012,0-10.925-4.848-10.925-10.925s4.848-10.925,10.925-10.925h116.299
                                c6.012,0,10.925,4.848,10.925,10.925S188.703,197.915,182.691,197.915z"/>
                                    <path fill="#111827" d="M154.246,255.386H66.392c-6.012,0-10.925-4.848-10.925-10.925c0-6.012,4.848-10.925,10.925-10.925
                                h87.855c6.012,0,10.925,4.848,10.925,10.925C165.107,250.537,160.259,255.386,154.246,255.386z"/>
                                    <path fill="#111827" d="M362.99,215.37l20.687-20.558c4.267-4.267,4.331-11.119,0.065-15.451
                                c-4.267-4.267-11.119-4.331-15.451-0.065l-22.044,21.915c-13.834-9.374-29.996-15.386-47.451-17.131v-14.739h4.655
                                c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925h-31.16c-6.012,0-10.925,4.848-10.925,10.925
                                c0,6.012,4.848,10.925,10.925,10.925h4.655v14.675c-9.826,1.034-19.265,3.491-28.057,7.046V31.58
                                c0.129-17.39-13.964-31.547-31.354-31.547H83.2c-8.339,0-16.291,3.232-22.238,9.18L9.18,60.994C3.232,66.941,0,74.893,0,83.232
                                v202.085c0,17.39,14.158,31.547,31.547,31.547h156.121c12.606,43.636,52.752,75.701,100.396,75.701
                                c57.665,0,104.533-46.933,104.533-104.533C392.533,259.846,381.285,234.246,362.99,215.37z M63.806,37.269v26.57h-26.57
                                L63.806,37.269z M31.547,295.079c-5.301,0-9.632-4.331-9.632-9.632V85.689h52.945c6.012,0,10.925-4.848,10.925-10.925V21.818
                                h131.879c5.301,0,9.632,4.331,9.632,9.632v171.572c-26.505,19.006-43.83,49.907-43.83,84.945c0,2.392,0.259,4.719,0.388,7.046
                                H31.547V295.079z M288,370.78c-45.576,0-82.747-37.107-82.747-82.747c0-45.576,37.107-82.747,82.747-82.747
                                s82.747,37.107,82.747,82.747C370.747,333.608,333.576,370.78,288,370.78z"/>
                                </g>
                                <polygon fill="#56ACE0" points="37.236,63.838 63.806,63.838 63.806,37.269 " />
                                <path fill="#111827" d="M288,217.503c-6.012,0-10.925,4.848-10.925,10.925v59.669c0,6.012,4.848,10.925,10.925,10.925
                            c6.012,0,10.925-4.848,10.925-10.925v-59.669C298.861,222.352,294.012,217.503,288,217.503z"/>
                            </svg>
                        </div>
                        <h1 className="text-green-700 dark:text-pink-400 text-0.5xl text-center pl-[0.5vw]">
                            My Recent Queries
                        </h1>
                    </div>
                    <ol className="mt-[0.5vh]">
                        <QueryHistoryItem />
                        <QueryHistoryItem />
                        <QueryHistoryItem />
                        <QueryHistoryItem />
                        <QueryHistoryItem />
                    </ol>
                </div>
                {/* create post bar */}
                <div className=' md:w-1/2 w-[98vw] mx-auto md:mx-0 justify-center mt-[0.5vh] items-center px-[1vw] md:px-0'>
                    <div className="items-center justify-between mb-[0.5vh] md:flex md:w-auto md:order-1 w-full" id="mobile-menu-2">
                        <ul className="flex flex-col font-medium p-[1vw] md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-black md:dark:bg-black ">
                            <li className=' text-2xl text-pink-400 '>
                                <form className="flex flex-row items-center justify-center  w-full">
                                    <label htmlFor="simple-search" className="sr-only">Search</label>
                                    <div className="relative w-[85vw] md:w-[44.8vw]">
                                        <input type="text" id="simple-search" className=" border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 md:w-[45.6vw] w-[82vw] pl-[5.3vw] px-[2vw] py-[1vh] md:p-2.5  dark:bg-LandingPageBK dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Create a post..." />
                                    </div>
                                    <button type="button" className="text-white relative bg-gradient-to-r justify-center items-center from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm p-[1vh] md:p-[0.7vw] ml-[2vw] md:ml-[1.5vw] text-center " >
                                        <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Search </span>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    {/* feed section */}
                    <div className="py-[1vh] px-[1vw] mb-4  rounded-lg bg-white dark:bg-transparent ">
                        <ol className="md:mt-[0.8vh]  ">
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                            <PostItem/>
                        </ol>
                    </div>
                </div>
                <div className=' hidden md:w-1/4 md:flex flex-col '>
                    <div className='p-[1vw] border mb-1 mx-2  border-green-800 rounded-lg bg-white dark:bg-LandingPageBK dark:border-pink-500 h-[50vh]'>
                        <div className="md:flex w-full border border-green-600 bg-green-200 dark:bg-transparent dark:border-none rounded-lg text-center justify-center text-green-800 dark:text-pink-400  px-[4vw] items-center py-[0.5vh] sticky md:order-2">
                            News & Updates
                            <svg className=" w-8 h-7 ml-2 " fill="currentColor" stroke="currentColor" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M344.854 687.167c26.725 56.8 66.665 111.099 118.91 161.654-109.515-16.445-200.574-83.285-250.026-175.73l131.114 14.076zM461.776 177.924c-106.691 16.718-195.535 81.185-245.233 170.432l128.342-12.64c26.395-55.654 65.729-108.624 116.89-157.793zM502.016 337.406l1.78-163.191h-0.362c-57.402 50.103-101.083 104.341-130.194 161.745l128.774 1.45zM224.829 388.081l-23.709-0.211-23.439-0.304-1.84 169.497-94.898-170.523-52.909-0.575-2.593 241.198 23.589 0.331 23.468 0.211 1.871-173.871 97.645 174.957 50.256 0.575 2.564-241.289zM450.373 433.36l0.211-21.506 0.271-21.357-177.611-1.9-2.593 241.289 183.132 1.93 0.241-21.446 0.211-21.387-132.697-1.418 0.663-62.954 117.977 1.266 0.211-20.694 0.211-20.814-117.977-1.238 0.575-51.161 127.175 1.387zM691.15 568.256l-33.060-175.501-53.664-0.635-36.349 176.255-38.43-177.009-52.397-0.603 64.553 242.012 23.922 0.241 23.981 0.304 39.907-189.616 36.711 190.401 24.071 0.331 23.889 0.241 69.742-240.566-50.949-0.544-41.929 174.687zM529.708 174.514h-0.362l-1.748 163.162 128.866 1.359c-27.932-58.038-70.404-113.18-126.754-164.521zM804.932 340.603c-53.633-89.519-145.152-151.602-251.828-164.202 68.335 52.922 106.493 106.707 131.741 162.933l120.086 1.266zM554.925 849.786c109.455-14.028 201.386-78.448 252.927-168.876l-130.547 9.845c-27.963 56.197-69.108 109.589-122.378 159.030zM648.738 690.455l-124.914-1.359-1.69 155.833c54.961-47.872 97.462-99.846 126.602-154.475zM981.396 521.109c-11.763-10.407-35.052-19.757-70.074-27.873-24.132-5.791-39.907-10.528-47.267-14.629-7.513-3.953-11.283-9.593-11.191-16.861 0.061-9.923 3.771-17.979 11.101-23.5 7.209-5.34 17.283-8.084 30.044-7.904 14.781 0.121 26.725 3.682 35.867 10.407 9.079 6.788 13.998 15.867 14.721 27.391l49.077 0.603c-1.569-24.282-10.769-43.469-27.6-57.887-16.741-14.419-38.703-21.748-65.729-22.020-28.837-0.331-51.852 6.335-68.956 19.728-17.073 13.546-25.73 32.246-25.973 55.535-0.211 20.905 6.004 36.349 18.642 46.393 12.819 9.984 38.338 19.517 76.469 28.415 20.753 4.827 34.238 9.562 40.572 13.786 6.395 4.346 9.593 10.979 9.502 20.151-0.090 9.199-4.705 16.259-13.786 21.387-9.109 5.068-21.628 7.54-37.766 7.359-15.596-0.181-27.813-3.71-36.439-10.738-8.746-6.91-13.212-16.711-13.634-29.652l-48.534-0.512c0.875 26.063 9.895 46.213 26.908 60.511 17.043 14.419 40.844 21.689 71.278 21.989 30.495 0.304 54.598-5.942 72.578-19.154 18.038-13.151 27.088-30.979 27.328-53.664 0.362-22.503-5.429-38.974-17.134-49.26zM496.586 844.508l1.69-155.651-124.914-1.359c28.053 55.201 69.348 108.050 123.223 157.009z" /></svg>
                        </div>
                        <ol className="mt-[0.5vh] dark:divide-gray-700">
                            <NewsItem />
                            <NewsItem />
                            <NewsItem />
                            <NewsItem />
                        </ol>
                    </div>
                    <div className='p-[1vw] border sticky top-[11vh] mb-4 mx-2  border-green-800 rounded-lg bg-white dark:bg-LandingPageBK dark:border-pink-500 h-50vh'>
                        <div className="md:flex w-full border border-green-600 bg-green-200 dark:bg-transparent dark:border-none rounded-lg text-center justify-center text-green-800 dark:text-pink-400  px-[4vw] items-center py-[0.5vh] md:order-2">
                            Messages
                            <svg className=" w-6 h-7 ml-2" fill="currentColor" stroke="currentColor" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg " xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" >
                                <g>
                                    <g>
                                        <path d="M437.073,118.634V43.707H0v349.659h74.927v74.927H512V118.634H437.073z M437.073,156.098h35.468l-35.468,33.251V156.098z
                                    M397.615,81.171L218.537,249.056L39.46,81.171H397.615z M37.463,355.902v-225.25l181.073,169.757L399.61,130.652v225.25H37.463z
                                    M474.537,430.829H112.39v-37.463h324.683V240.7l37.463-35.122V430.829z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <ol className="mt-3 divide-y divider-gray-100 dark:divide-gray-700">
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                            <MessageBox />
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}
// {/*  */}