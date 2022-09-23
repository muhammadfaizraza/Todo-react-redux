import { configureStore } from "@reduxjs/toolkit";
import Postreducer from "../Features/Posts/PostSlice";



export const store = configureStore({
reducer:{
    posts:Postreducer



}


})