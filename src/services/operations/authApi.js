import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
// import { resetCart } from "../../slices/cartSlice"
// import { setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
// import { setPatient } from "../../slices/patientdata"
// import { setDoctor } from "../../slices/doctordata"

const {
    //   SENDOTP_API,
    DOCTOR_SIGNUP_API,
    PATIENT_SIGNUP_API,
    DOCTOR_LOGIN_API,
    PATIENT_LOGIN_API
} = endpoints

export function patientSignUp(
    lastName,
    firstName,
    email,
    password,
    otp,
    street,
    city, 
    postal, 
    state,
    country,
    age,
    sex,
    bloodGroup,
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", PATIENT_SIGNUP_API, {
                firstName,
                lastName,
                email,
                password,
                otp,
                street,
                city, 
                postal, 
                state,
                country,
                age,
                sex,
                bloodGroup
            })
            console.log("PatientSIGNUP API RESPONSE............", response)
            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Signup Successful")
            // navigate("/patientlogin")
        } catch (error) {
            console.log("PatientSIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            // navigate("/patientsignup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function doctorSignUp(
    accountType,
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    imrNumber,
    navigate
) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", DOCTOR_SIGNUP_API, {
                accountType,
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
                imrNumber
            })

            console.log("DoctorSIGNUP API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            toast.success("Signup Successful")
            navigate("/doctorlogin")
        } catch (error) {
            console.log("DoctorSIGNUP API ERROR............", error)
            toast.error("Signup Failed")
            navigate("/doctorsignup")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function patientlogin(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", PATIENT_LOGIN_API, {
                email,
                password,
            })
           
            console.log("LOGIN API RESPONSE............", response)
            // console.log(json);
            // if(json.success){
                dispatch(setToken(response.data.authtoken))
                // dispatch(setPatient({ ...response.data.patient }))
                console.log(response.data.authtoken)
                // console.log("login patient data", ...response.data.patient)
                localStorage.setItem("authtoken",  JSON.stringify(response.data.authtoken));
            // localStorage.setItem("patient", JSON.stringify(response.data.patient))
            
            toast.success("Login Successful")
            navigate("/patientlogin/userdashboard")
            // }
            // if (!json.success) {
            // throw new Error(response.data.message)
            // }
            // const userImage = response.data?.user?.image
            //   ? response.data.user.image
            //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
        } catch (error) {
            console.log("Patient LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}
export function doctorlogin(email, password, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("POST", DOCTOR_LOGIN_API, {
                email,
                password,
            })

            console.log("LOGIN API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }

            toast.success("Login Successful")
            dispatch(setToken(response.data.token))
            // const userImage = response.data?.user?.image
            //   ? response.data.user.image
            //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
            // dispatch(setDoctor({ ...response.data.doctor}))
            localStorage.setItem("authtoken", JSON.stringify(response.data.authtoken))
            localStorage.setItem("doctor", JSON.stringify(response.data.doctor))
            navigate("/doctorlogin/doctordashboard")
        } catch (error) {
            console.log("Doctor LOGIN API ERROR............", error)
            toast.error("Login Failed")
        }
        dispatch(setLoading(false))
        toast.dismiss(toastId)
    }
}

export function logout(navigate) {
    return (dispatch) => {
        dispatch(setToken(null))
        //   dispatch(setUser(null))
        //   dispatch(resetCart())
        localStorage.removeItem("authtoken")
        localStorage.removeItem("patient")
        localStorage.removeItem("doctor");
        toast.success("Logged Out")
        navigate("/")
    }
}