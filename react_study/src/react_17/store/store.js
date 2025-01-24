// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './reducer/counterSlice';

// let store = createStore(reducer)
let store = configureStore({
    reducer: {
        counter : counterSlice
    }
})

export default store