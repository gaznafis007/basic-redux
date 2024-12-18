import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counterSlice'
import reduxLogger from "../middlewares/reduxLogger";

const store = configureStore({
    reducer:{
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger)
})
export default store;