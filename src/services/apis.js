const BASE_URL = process.env.REACT_APP_BASE_URL

export const endpoints = {
    // SENDOTP_API: BASE_URL + "/auth/sendotp",
    DOCTOR_SIGNUP_API:BASE_URL+"/api/v1/doctorauth/doctorsignup",
    PATIENT_SIGNUP_API:BASE_URL+"/api/v1/patientauth/patientsignup",
    DOCTOR_LOGIN_API:BASE_URL+"/api/v1/doctorauth/doctorlogin",
    PATIENT_LOGIN_API:BASE_URL+"/api/v1/patientauth/patientlogin",
}

export const detailEndpoints={
      PATIENT_PROFILE_DETAIL_API:BASE_URL+"/api/v1/pdetails/patientdetails",
      DOCTOR_PROFILE_DETAIL_API:BASE_URL+"/api/v1/ddetails/doctordetails",
  }