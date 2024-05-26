import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import profileImg from '../resources/fotor_2023-4-6_14_33_25.png'
import TableItem from './TableItem';
// import { useSelector } from "react-redux"
// import { getPatientDetails } from '../../services/operations/patientDoctorDataApi';

let token=localStorage.getItem('authtoken')
const UserDashboard = () => {
 const [patientProfile,setPatientProfile]=useState({
    firstname:"",
    lastname:"",
    age:"",
    sex:"",
    bloodgroup:""
 });
 const [dossierData,setDossierData]=useState([]);
 const captialize=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
 }
    const getPatientDetails=async()=>{
        // API Call 
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pdetails/patientdetails`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXRpZW50Ijp7ImlkIjoiNjYyN2JkNGZjYjFlNDE1ZDQ0YjQwM2YzIn0sImVtYWlsIjoia3NoaXRpamd1cHRhMjkwNUBnbWFpbC5jb20iLCJpYXQiOjE3MTQxNDU1MTF9.8G8JQjhhI-9Fe-xH_uxmcvAMOV6Ic9Xbu1rYsNhmZc4"
            },
        });
        const json =await response.json();
        console.log(json)
        const {first_name}=await json;
        const {last_name}=json;
        const {age}=json;
        const {sex}=json;
        const {blood_group}=json;
        let fname=captialize(first_name)
        let lname=captialize(last_name)
        setPatientProfile({firstname:fname,lastname:lname,age:age,sex:sex,bloodgroup:blood_group});
        console.log(patientProfile);
        }
        const getAllDossiers=async()=>{
            // API Call 
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pdossiers/alldossiers`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXRpZW50Ijp7ImlkIjoiNjYyN2JkNGZjYjFlNDE1ZDQ0YjQwM2YzIn0sImVtYWlsIjoia3NoaXRpamd1cHRhMjkwNUBnbWFpbC5jb20iLCJpYXQiOjE3MTQxNDU1MTF9.8G8JQjhhI-9Fe-xH_uxmcvAMOV6Ic9Xbu1rYsNhmZc4"

                    // "auth-token":localStorage.getItem("authtoken")
                },
            });
            const json =await response.json();
            console.log(json)
            // if(json>0){
                setDossierData(json);
                console.log(dossierData);
            // }

            // const {first_name}=await json;
            // const {last_name}=json;
            // const {age}=json;
            // const {sex}=json;
            // const {blood_group}=json;
            // let fname=captialize(first_name)
            // let lname=captialize(last_name)
            // setPatientProfile({firstname:fname,lastname:lname,age:age,sex:sex,bloodgroup:blood_group});
            // console.log(patientProfile);
            }

    const navigate = useNavigate();
    useEffect(()=>{
        getAllDossiers();
        if(token){
            getPatientDetails();
        }
        else{
            navigate("/patientlogin");
        }
        // eslint-disable-next-line
    },[])
    return (
        <>
            <div className='md:h-screen w-full dark:bg-LandingPageBK overflow-hidden dark:text-white z-0 relative text-green-900 flex flex-col '>
                <div className="md:flex md:flex-row flex-wrap relative w-full m-[2vh] ">
                    <div className='w-full md:w-[8vw] justify-center items-center  '>
                        <img src={profileImg} alt="profile" className='md:h-[16vh] left-[40vw] md:left-0 relative z-0 md:w-[8vw] w-[15vw] h-[7vh] md:my-[2vh] md:px-[1vw] group'/>
                    </div>
                    <div className="md:h-[16vh] w-[95vw] md:w-3/5 grid md:grid-cols-2 grid-cols-2 relative z-0 group text-xs md:text-xl">
                        <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200  rounded-xl border-2 border-green-400 dark:border-none  dark:bg-transparent'>NAME : {patientProfile.firstname+"  "+patientProfile.lastname}</div>
                        <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none  dark:bg-transparent'>Age : {patientProfile.age}</div>
                        <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none  dark:bg-transparent'>Sex: {patientProfile.sex}</div>
                        <div className='p-[1vw] md:m-[1vh] m-[1vw] bg-green-200 rounded-xl border-2 border-green-400 dark:border-none  dark:bg-transparent'>Blood group : {patientProfile.bloodgroup}</div>
                    </div>
                    <div className="md:flex md:flex-col grid grid-cols-2 md:w-1/6 w-[95vw] relative z-0 group">
                        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none   dark:focus:ring-purple-800 shadow-2xl hover:shadow-none   font-medium rounded-lg text-sm px-[1vw] py-[1vh] h-[5vh] md:h-[7vh]  md:mt-[1vh] m-[2vw] mb-[1vh] text-center" onClick={() => navigate('/patientdataform')}>Create Dossier </button>
                        <button type="button" className="text-white  bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l dark:focus:ring-4 dark:focus:outline-none  dark:focus:ring-purple-800 shadow-2xl hover:shadow-none  font-medium rounded-lg text-sm px-[1vw] py-[1vh] h-[5vh] md:mt-[1vh] md:h-[7vh] m-[2vw] text-center" onClick={() => navigate('/analysisdisplay')}>Show All Analysis </button>
                    </div>
                    <button type="button" className="text-white bg-gradient-to-r justify-center items-center from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm md:px-[3vw] px-[40.5vw] py-[2vw] md:mt-[1vh]  md:w-[2/6] md:h-[15.7vh] ml-[1.3vw] md:ml-0 md:text-base text-center  " onClick={() => navigate('/forum')}>Forum </button>
                </div>
                <hr className=' md:h-px my-3 mx-8 bg-gray-200 border-0 dark:bg-purple-300' />
                <h1 className='text-3xl px-[1vw] py-[1vh] text-center w-full '>Your Files</h1>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-[1vw]">
                    <table className="w-full text-sm text-left text-white dark:text-white">
                        <thead className="text-xs text-white uppercase bg-green-700 dark:bg-purple-500 dark:text-white">
                            <tr>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    Doctor's Name
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Unique I'd
                                        {/* <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Date
                                        {/* <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Venue
                                        {/* <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <div className="flex items-center">
                                        Specialisation
                                        {/* <a href="/"><svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" /></svg></a> */}
                                    </div>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <span className="sr-only">Edit</span>
                                </th>
                                <th scope="col" className="px-[1.5vw] py-[1.6vh]">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        {/* dynamic variable creation by using map munction so that the row renders after every click */}
                        <tbody>
                            {
                                dossierData.map((dossierData)=>{
                                    return <TableItem  key={dossierData._id} dossierData={dossierData}  />
                                })                            }
                            {/* <TableItem/> */}
                        </tbody>
                    </table>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default UserDashboard
// onClick={()=>navigate('/login')}