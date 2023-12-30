import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    ids:[]
}

const favouriteSlice =createSlice({
    name:'favorites',
    initialState:initialState,
    reducers:{
        addFavourite:(state,action)=>{
            state.ids.push(action.payload.id);
        },
        removeFavourite:(state,action)=>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
        }
    }
})


export const  addFavourite = favouriteSlice.actions.addFavourite;
export const  removeFavourite = favouriteSlice.actions.removeFavourite;
export  const favouriteReducer = favouriteSlice.reducer;
