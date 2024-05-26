import React, {  useState } from 'react'
import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';
// import { storage } from '../../firebase';
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
// import { setfile } from '../../slices/patientdata';


// add a verify button 
const PatientDataForm = () => {
    // const dispatch = useDispatch();
    // const { upfile } = useSelector((state) => state.uploadedf)
    // const [progresspercent, setProgresspercent] = useState(0);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        doctor_name: "",
        venue: "",
        docuuid: "",
        specialization: "",
        prescription: "",
        report: "",
        scans: ""
    });
    const { doctor_name, venue, docuuid, specialization, prescription, report, scans } = formData;

    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    // const handleUpload = (e) => {
    //     const file = e.target[0]?.files[0]
    //     if (!file) return;
    //     const storageRef = ref(storage, `files/${file.name}`);
    //     const uploadTask = uploadBytesResumable(storageRef, file);

    //     uploadTask.on("state_changed",
    //         (snapshot) => {
    //             const progress =
    //                 Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //             setProgresspercent(progress);
    //         },
    //         (error) => {
    //             alert(error);
    //         },
    //         () => {
    //             getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //                 setUploadUrl(downloadURL)
    //                 dispatch(setfile(downloadURL))
    //             });
    //         }
    //     );
    // }
    // console.log(uploadUrl);
    // Handle Form Submission
    
    const addDossier=async(doctor_name, venue, docuuid, specialization, prescription, report, scans)=>{
        // API Call 
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/v1/pdossiers/addDossier`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXRpZW50Ijp7ImlkIjoiNjYyN2JkNGZjYjFlNDE1ZDQ0YjQwM2YzIn0sImVtYWlsIjoia3NoaXRpamd1cHRhMjkwNUBnbWFpbC5jb20iLCJpYXQiOjE3MTQxNDU1MTF9.8G8JQjhhI-9Fe-xH_uxmcvAMOV6Ic9Xbu1rYsNhmZc4"
            },
            body:JSON.stringify({doctor_name, venue, docuuid, specialization, prescription, report, scans})
        });
        const json =await response.json();
        console.log(json);
        
        }
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        // const patientDossierData = {
        //     ...formData
        // };
        addDossier(doctor_name, venue, docuuid, specialization, prescription, report, scans)
        toast.success("Saved Succesfully!!");
        navigate('/patientlogin/userdashboard');
    }

    return (
        <div className='md:px-[4vw] dark:bg-LandingPageBK '>
            <form onSubmit={handleOnSubmit}>
                <div className="grid md:grid-cols-2 md:gap-6 md:pt-[2vh] pt-[2vh] px-10">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleOnChange} type="text" name="doctor_name" value={doctor_name} id="doctorName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="doctorName" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doctor's name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleOnChange} type="text" name="venue" id="venue" value={venue} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="venue" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Venue of Treatment</label>
                        {/* location api usage preffered */}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6 px-10">
                    <div className="relative z-0 w-full mb-6 group flex flex-row">
                        <input onChange={handleOnChange} type="tel" value={docuuid} name="docuuid" id="docuuid" className="block py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="docuuid" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Doctor's Unique I'd</label>
                        <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 w-44 h-12 m-1 text-center ">Verify </button>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={handleOnChange} type="text" name="specialization" value={specialization} id="specialization" className="block py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " required />
                        <label htmlFor="specialization" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specialisation of Doctor</label>
                    </div>
                </div>

                <hr className='h-px my-3 mx-6 bg-green-600 border-0 dark:bg-purple-300' />
                <div className=" md:flex opacity-0 md:opacity-100  flex-row md:w-full w-0 h-0 md:h-[4vh] dark:text-white text-center mt-[1vh] ">
                    <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Prescriptions Link</h1>
                    <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Reports Link</h1>
                    <h1 className='text-2xl w-1/3 font-medium text-green-700 dark:text-gray-200'>Scans Link</h1>
                </div>
                <div className="flex md:flex-row flex-col items-center justify-center w-full mb-[2vh] md:mt-[2vh] px-[4vw] md:px-0 ">
                    <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Prescription Link</h1>
                    {/* <label htmlFor="prescription" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG or PDF </p>
                        </div>
                        <input value={prescription} onChange={(e) => { handleUpload(e); setpUpload(true) }} id="prescription" type="file" className="hidden" formEncType='multipart/form-data' multiple />
                    </label> */}
                    <input onChange={handleOnChange} type="text" name="prescription" value={prescription} id="prescription" className="block md:mx-[2vw]  py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" "/>
                        <label htmlFor="prescription" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specialisation of Doctor</label>
                    <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Report link</h1>
                    {/* <label htmlFor="report" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                        <input value={report} onChange={(e) => { handleUpload(e); setrUpload(true) }} id="report" type="file" className="hidden" formEncType='multipart/form-data' multiple />
                    </label> */}
                    <input onChange={handleOnChange} type="text" name="report" value={report} id="report" className="block md:mx-[2vw] py-[1.5vh] px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" "/>
                        <label htmlFor="report" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Specialisation of Doctor</label>
                    <h1 className='md:hidden text-2xl font-medium text-green-700 dark:text-gray-200 h-[8vh] py-[1vh] justify-center text-center border-2 border-green-600 dark:border-gray-200 w-full rounded-2xl pt-[1.5vh] mt-[3vh] mb-[1vh]'>Scan Link</h1>
                    {/* <label htmlFor="scans" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-green-100 dark:bg-LandingPageBK opacity-70 hover:opacity-95 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 mx-4">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-green-600 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-green-600 dark:text-gray-400">SVG, PNG, JPG </p>
                        </div>
                        <input value={scans} onChange={(e) => { handleUpload(e); setsUpload(true) }} id="scans" type="file" className="hidden" formEncType='multipart/form-data' multiple />
                    </label> */}
                    <input onChange={handleOnChange} type="text" name="scans" value={scans} id="scans" className="block py-[1.5vh] md:mx-[2vw]  w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-800 peer" placeholder=" " />
                        <label htmlFor="scans" className="peer-focus:font-medium absolute text-sm text-green-600 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-800 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Scansr</label>
                </div>
                <div className="w-full justify-center flex flex-row ">
                    <button type="submit" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-[12vw] h-12 mb-[10vh]  text-center mr-[2vw] md:mr-[1vw] " >Create File </button>
                    <button type="button" className="text-white bg-gradient-to-r from-green-800 to-green-500  dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 md:w-[12vw] h-12 mb-[10vh]  text-center " >Start Analysis </button>
                </div>
            </form>
        </div>
    )
}

export default PatientDataForm
