import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state) => state + 1,
        decrement: (state) => state - 1,
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const counterElement = document.getElementById('counter');

incrementButton.addEventListener('click', () => {
    store.dispatch(counterSlice.actions.increment());
});

decrementButton.addEventListener('click', () => {
    store.dispatch(counterSlice.actions.decrement());
});

// store.subscribe(() => {
//     const state = store.getState();
//     counterElement.textContent = state;
//});