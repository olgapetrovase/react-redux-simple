import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/counter';
import authSliceReducer from '../store/auth';

const store = configureStore({
    reducer: { 
        counter: counterReducer, 
        auth: authSliceReducer
    }
});

export default store;