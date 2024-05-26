import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupData: null,
  loading: false,
  token: localStorage.getItem("authtoken") ? JSON.parse(localStorage.getItem("authtoken")) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setPatientSignupData(state, value) {
        state.patientSignupData = value.payload;
    },
    setDoctorSignupData(state, value) {
        state.doctorSignupData = value.payload;
    },
    setLoading(state, value) {
        state.loading = value.payload;
    },
    setToken(state, value) {
        state.token = value.payload;
        },
    },
});

export const { setSignupData,setPatientSignupData,setDoctorSignupData, setLoading, setToken } = authSlice.actions;

export default authSlice.reducer;