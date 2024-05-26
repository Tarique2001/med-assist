import { toast } from "react-hot-toast"

// import { setLoading, setPatient } from "../../slices/patientdata"
import { apiConnector } from "../apiConnector"
import { detailEndpoints } from "../apis"
import { logout } from "./authApi"

const { PATIENT_PROFILE_DETAIL_API,
  DOCTOR_PROFILE_DETAIL_API,
  PATIENT_DOSSIERS_API,  DOCTOR_DOSSIERS_API 
} = detailEndpoints

export function getPatientDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", PATIENT_PROFILE_DETAIL_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_PATIENT_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    //   const userImage = response.data.data.image
    //     ? response.data.data.image
    //     : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      // dispatch(setPatient({ ...response }))//, image: userImage
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_PATIENT_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    // dispatch(setLoading(false))
  }
}
export function getDoctorDetails(token, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    // dispatch(setLoading(true))
    try {
      const response = await apiConnector("GET", DOCTOR_PROFILE_DETAIL_API, null, {
        Authorization: `Bearer ${token}`,
      })
      console.log("GET_DOCTOR_DETAILS API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
    //   const userImage = response.data.data.image
    //     ? response.data.data.image
    //     : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
      // dispatch(setPatient({ ...response.data.data }))//, image: userImage
    } catch (error) {
      dispatch(logout(navigate))
      console.log("GET_DOCTOR_DETAILS API ERROR............", error)
      toast.error("Could Not Get User Details")
    }
    toast.dismiss(toastId)
    // dispatch(setLoading(false))
  }
}


export async function getDoctorDossiers(token) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      console.log("BEFORE Calling BACKEND API FOR ENROLLED COURSES");
      const response = await apiConnector(
        "GET",
        DOCTOR_DOSSIERS_API,
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      )
      console.log("AFTER Calling BACKEND API FOR ENROLLED COURSES");
      // console.log(
      //   "GET_USER_ENROLLED_COURSES_API API RESPONSE............",
      //   response
      // )
  
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      result = response.data.data
    } catch (error) {
      console.log("GET_USER_ENROLLED_COURSES_API API ERROR............", error)
      toast.error("Could Not Get Enrolled Courses")
    }
    toast.dismiss(toastId)
    return result
  }