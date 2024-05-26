import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    upfile: '',   
    loading: false,
};

const fileSlice = createSlice({
    name:"uploadedf",
    initialState: initialState,
    reducers: {
        setfile(state, value) {
            state.upfile = value.payload;
        },
        setLoading(state, value) {
            state.loading = value.payload;
        },
    },
});

export const {setfile,setLoading} = fileSlice.actions;
export default fileSlice.reducer;