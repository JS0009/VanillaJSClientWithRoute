import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    // ваше начальное состояние
    count: 123
};

const reducer = (state = initialState, action) => {
    // ваша логика обработки действий
};

const store = configureStore({
    reducer: reducer
});

export default store;