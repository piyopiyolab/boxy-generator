import { configureStore } from "@reduxjs/toolkit";
import shadows from "./reducers/shadows";
import boxProperties from "./reducers/boxProperties";



export const store = configureStore({
    reducer: {
        shadows,
        boxProperties,


    }
})