import { configureStore, combineReducers } from '@reduxjs/toolkit';
import basket from './basket';

const rootReducer = combineReducers({
    basket,
});

const store = configureStore({
    reducer: rootReducer,
})



export default store;