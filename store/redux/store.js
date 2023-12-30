import { configureStore } from "@reduxjs/toolkit";
import { favouriteReducer } from "./favourites";


const store = configureStore({
    reducer:{
        favouriteMeals:favouriteReducer
    }
})


export default store;