import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./reducer/listSlice"

const store = configureStore({
    reducer: {
        List : listSlice
    }
})

export default store