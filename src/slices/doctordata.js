import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    patient: localStorage.getItem("doctor") ? JSON.parse(localStorage.getItem("doctor")) : null,
    // loading: false,
};

const doctorSlice = createSlice({
    name:"doctorProfile",
    initialState: initialState,
    reducers: {
        setDoctor(state, value) {
            state.doctor = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
    },
});

export const {setDoctor,setLoading} = doctorSlice.actions;
export default doctorSlice.reducer;