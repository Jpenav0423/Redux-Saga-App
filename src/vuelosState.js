import {createSlice} from "@reduxjs/toolkit";

export const vuelosSlice = createSlice({
    name: 'vuelos',
    initialState: {
        vuelos: [],
        isLoading: false
    },
    reducers: {
        getVuelosFetch: (state) => {
            state.isLoading = true;
        },
        getVuelosSuccess: (state, action) =>{
            state.vuelos = action.payload;
            state.isLoading = false;
        },
        getVuelosFailure: (state) => {
            state.isLoading = false;
        }
     }

});

export const {getVuelosFetch, getVuelosSuccess, getVuelosFailure} = vuelosSlice.actions;

export default vuelosSlice.reducer;