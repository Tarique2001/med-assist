import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    patient: localStorage.getItem("patient") ? JSON.parse(localStorage.getItem("patient")) : null,
    // loading: false,
};

const patientSlice = createSlice({
    name:"patientProfile",
    initialState: initialState,
    reducers: {
        setPatient(state, value) {
            state.patient = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
    },
});

export const {setPatient,setLoading} = patientSlice.actions;
export default patientSlice.reducer;