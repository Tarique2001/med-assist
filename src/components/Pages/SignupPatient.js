import React, { useState } from 'react';
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import {  useNavigate } from 'react-router-dom';
// import { setPatientSignupData } from "../../slices/authSlice";
import { patientSignUp } from '../../services/operations/authApi';

const SignupPatient = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    // useEffect(()=>{
    //     if(localStorage.getItem('token')){
    //         // getallnotes();
    //         navigate("/patientlogin");
    //     }
    //     else{
    //         navigate("/patientsignup");
    //     }
    //    // eslint-disable-next-line
    // },[])
    const [formData, setFormData] = useState({
        lastName: "",
        firstName: "",
            email: "",
            password: "",
            confirmPassword: "",
            phNumber: "",
            otp: "",
            street: "",
            city: "",
            postal: "",
            state: "",
            country: "",
            age: "",
            sex: "",
            bloodGroup: "",
    });


    const { lastName,firstName,  email, password, confirmPassword, phNumber, otp,  street, city, postal, state, country, age, sex, bloodGroup } = formData;
    // Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    // Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords Do Not Match");
            return;
        }
        const patientSignupData = {
            ...formData
        };

        // Setting signup data to state
        // To be used after otp verification
        dispatch(patientSignUp(patientSignupData));
        // Send OTP to user for verification
        // dispatch(sendOtp(formData.email, navigate));
        // Reset
        // setFormData({
        //     firstName: "",
        //     lastName: "",
        //     email: "",
        //     password: "",
        //     confirmPassword: "",
        //     phNumber: "",
        //     otp: "",
        //     street: "",
        //     city: "",
        //     postal: "",
        //     state: "",
        //     country: "",
        //     age: "",
        //     sex: "",
        //     bloodGroup: "",
        // });
    };
    return (
        <div className=' px-[8vw] dark:bg-LandingPageBK  '>
            <h1 className='text-4xl flex justify-start pt-[4vh]  dark:text-white text-green-800 '>
                Create an account
            </h1>
            <form onSubmit={handleOnSubmit} className='mt-[4vh]'>
                <div className="relative z-0 w-full mb-[3vh] group">
                    <input type="email" value={email} onChange={handleOnChange} name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder='' required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-[3vh] group">
                    <input type="password" value={password} onChange={handleOnChange} name="password" id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <div className="relative z-0 w-full mb-[3vh] group">
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleOnChange} id="repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                    <label htmlFor="repeat_password" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input type="text" value={firstName} onChange={handleOnChange} name="firstName" id="first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                        <label htmlFor="first_name" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input type="text" value={lastName} onChange={handleOnChange} name="lastName" id="last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="last_name" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input type="tel" value={phNumber} onChange={handleOnChange} name="phNumber" id="phNumber" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                        <label htmlFor="phNumber" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={otp} onChange={handleOnChange} type="tel" name="otp" id="signupotp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder="" required />
                        <label htmlFor="signupotp" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">One Time Password</label>
                    </div>
                </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={street} onChange={handleOnChange} type="text" name="street" id="address" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="address" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Street</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={city} onChange={handleOnChange} type="text" name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City </label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={postal} onChange={handleOnChange} type="text" name="postal" id="postal" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="postal" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Postal</label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={state} onChange={handleOnChange} type="text" name="state" id="state" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="state" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">State</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 md:gap-6">
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={country} onChange={handleOnChange} type="text"  name="country" id="country" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="country" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country </label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={age} onChange={handleOnChange} type="tel" name="age" id="age" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age </label>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={sex} onChange={handleOnChange} type="text" name="sex" id="sex" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="sex" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Sex</label>
                    </div>
                    <div className="relative z-0 w-full mb-[3vh] group">
                        <input value={bloodGroup} onChange={handleOnChange} type="text" name="bloodGroup" id="bloodGroup" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-200 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " required />
                        <label htmlFor="bloodGroup" className="peer-focus:font-medium absolute text-sm text-green-800 dark:text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-600 peer-focus:dark:text-gray-200 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blood Group</label>
                    </div>
                    </div>
                </div>
                <button type="submit" className="text-white bg-gradient-to-r  from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  hover:bg-gradient-to-l dark:focus:ring-purple-800">Submit</button>
            </form>
            <div className='relative flex items-center flex-col'>
                <h1 className='text-2xl text-green-800 dark:text-white h-[3vh] w-full text-center m-[3vh]'>
                    OR
                </h1>
                <button type="button" className=" text-white bg-gradient-to-r from-green-800 to-green-500 dark:from-purple-500 dark:to-pink-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-green-200 dark:focus:ring-purple-800-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-purple-800 mr-2 mb-14">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
            </div>
        </div>
    )
}

export default SignupPatient